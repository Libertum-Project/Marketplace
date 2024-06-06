import { NextRequest } from 'next/server';
import {
  EmailClient,
  KnownEmailSendStatus,
  EmailSendResult
} from '@azure/communication-email';

const connectionString: string = process.env.AZURE_EMAIL_CONNECTION_STRING!;
const senderAddress: string = process.env.AZURE_SENDER_EMAIL_ADDRESS!;

export async function POST(req: NextRequest) {
  const reqBody = await req.json();
  const { email, code } = reqBody;
  const recipientAddress = email;

  const message = {
    senderAddress: senderAddress,
    recipients: {
      to: [{ address: recipientAddress }]
    },
    content: {
      subject: 'Your Verification Code',
      plainText: `Your verification code is ${code}`
    }
  };

  try {
    const client = new EmailClient(connectionString);
    const poller = await client.beginSend(message);
    const result = (await poller.pollUntilDone()) as EmailSendResult;

    if (result.status === KnownEmailSendStatus.Succeeded) {
      console.log(`Successfully sent the email (operation id: ${result.id})`);
      return new Response(
        JSON.stringify({ message: 'Verification code sent' }),
        { status: 200 }
      );
    } else {
      throw result.error;
    }
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: 'Failed to send verification code' }),
      { status: 500 }
    );
  }
}
