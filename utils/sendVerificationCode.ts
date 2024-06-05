export async function sendVerificationCode(email: string, code: string) {
  const response = await fetch('/api/send-2fa-code', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, code })
  });

  if (!response.ok) {
    throw new Error('Failed to send verification code');
  }

  return response.json();
}
