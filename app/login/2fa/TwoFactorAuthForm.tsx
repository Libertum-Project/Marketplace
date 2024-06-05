'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEmbeddedWalletUserEmail, useAddress } from '@thirdweb-dev/react';
import { useState, useEffect, useRef } from 'react';
import { sendVerificationCode } from '@/utils/sendVerificationCode';
import Loading from '@/components/shared/Loading/Loading';

export default function TwoFactorAuthForm() {
  const getEmail = useEmbeddedWalletUserEmail();
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [email, setEmail] = useState('');
  const [code, setCode] = useState(Array(6).fill(''));
  const [generatedCode, setGeneratedCode] = useState('');
  const [error, setError] = useState('');
  const address = useAddress();
  const serverURL = process.env.NEXT_PUBLIC_SERVER_URL;
  const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY;
  const router = useRouter();

  const generateCode = () =>
    Math.floor(100000 + Math.random() * 900000).toString();

  const handleSendCode = async () => {
    const newCode = generateCode();
    setGeneratedCode(newCode);

    try {
      await sendVerificationCode(email, newCode);
    } catch (error) {
      setError('Failed to send verification code');
    }
  };

  const handleVerifyCode = async () => {
    if (code.join('') === generatedCode) {
      try {
        if (address) {
          const response = await fetch(`${serverURL}/users/${address}`, {
            method: 'PATCH',
            headers: {
              Authorization: `Bearer ${secretKey}`,
              Accept: 'application/json',
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
              isAuthenticated: true
            })
          });

          if (response.ok) {
            router.push('/profile');
          }
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setError('Invalid verification code');
    }
  };

  useEffect(() => {
    if (getEmail.status === 'success' && getEmail.data) {
      setEmail(getEmail.data);
    }
  }, [getEmail.status, getEmail.data]);

  useEffect(() => {
    if (email) {
      handleSendCode();
    }
  }, [email]);

  useEffect(() => {
    if (code.every((char) => char !== '')) {
      handleVerifyCode();
    }
  }, [code]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    if (value.length <= 1) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      if (value && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const paste = e.clipboardData.getData('text');
    const newCode = [...code];
    paste.split('').forEach((char: string, i: number) => {
      if (i < newCode.length) {
        newCode[i] = char;
      }
    });
    setCode(newCode);
    inputRefs.current[newCode.length - 1]?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleVerifyCode();
    }
  };

  if (getEmail.status === 'loading') {
    return <Loading />;
  }

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-primary-gradient">
      <Image
        src="/horizontal-logo.svg"
        width={274}
        height={36}
        alt="Logo"
        className="my-8"
      />
      <div className="bg-white p-8 rounded-lg shadow-lg w-[22rem] h-[25rem]">
        <h2 className="text-center text-2xl font-semibold mb-4">2FA</h2>
        <p className="text-center text-gray-600 mb-6">
          Enter the verification code sent to <br />{' '}
          <span className="text-libertumOrange">{email}</span>
        </p>
        <div className="flex justify-center mb-4" onPaste={handlePaste}>
          {code.map((char, i) => (
            <input
              key={i}
              type="text"
              maxLength={1}
              className="w-10 h-10 mx-1 border border-gray-300 text-center text-xl rounded"
              value={char}
              onChange={(e) => handleInputChange(e, i)}
              onKeyDown={handleKeyDown}
              ref={(el) => (inputRefs.current[i] = el)}
            />
          ))}
        </div>
        <button
          className="w-full bg-[#00B3B5] text-white py-2 rounded-[8px]"
          onClick={handleVerifyCode}
        >
          Verify
        </button>
        <button
          className="mt-14 text-[#00B3B5] w-full text-center"
          onClick={handleSendCode}
        >
          Resend verification code
        </button>
        {error && <p className="text-center text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
}
