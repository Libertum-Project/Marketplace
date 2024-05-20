'use client';
import React, { useState, FormEvent, ChangeEvent } from 'react';
import { Button } from '@/components/ui/button';

const Subscribe: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);

  const audience: string | undefined = process.env.NEXT_PUBLIC_RESEND_AUDIENCE_ID;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          unsubscribed: false,
          audienceId: audience,
        }),
      });

      if (response.ok) {
        console.log('Contact successfully added');
        setEmail('');
        setSubscribeSuccess(true);
      } else {
        console.error('Error adding contact to Resend:', response.statusText);
        alert('Oops, there was a problem. Please try again.');
      }
    } catch (error) {
      console.error('Error making the request:', error);
      alert('Oops, there was a problem. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  let buttonSubscribeText: string;
  if (loading) buttonSubscribeText = 'Sending...';
  if (subscribeSuccess) buttonSubscribeText = 'Subscribed ✔️';
  else buttonSubscribeText = 'Subscribe';

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-2">
      <div className="grid flex-1 gap-2">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
          className="border rounded-sm focus:border-libertumGreen h-full p-2"
        />
      </div>
      <Button
        type="submit"
        disabled={loading}
        className="px-3 bg-libertumGreen w-fit text-white rounded hover:bg-teal-600 transition duration-300 flex items-center justify-center font-space_grotesk"
      >
        {buttonSubscribeText}
      </Button>
    </form>
  );
};

export default Subscribe;
