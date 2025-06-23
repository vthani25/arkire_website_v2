// src/components/JoinWaitlistButton.jsx
import React from 'react';
import { SignInButton } from '@clerk/clerk-react';

export default function JoinWaitlistButton() {
  return (
    <SignInButton
      mode="modal"
      redirectUrl="/joined"
    >
      <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold">
        Join Waitlist
      </button>
    </SignInButton>
  );
}
