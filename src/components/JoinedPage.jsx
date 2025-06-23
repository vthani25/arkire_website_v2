// src/pages/joined.jsx
import React from 'react';
import { ClerkProvider, SignInButton, SignedIn, SignedOut, useUser, useClerk } from '@clerk/clerk-react';

const PUBLISHABLE_KEY = import.meta.env.PUBLIC_CLERK_PUBLISHABLE_KEY;

function JoinedContent() {
  const { user } = useUser();
  const { signOut } = useClerk();

  if (!user) return <p>Loading user info...</p>;

  const handleSignOut = () => {
    signOut({ redirectUrl: '/' });
  };

  return (
    <div className="max-w-md mx-auto p-8 text-center">
      <h1 className="text-3xl font-bold mb-6 text-orange-600">
        Welcome, {user.firstName}!
      </h1>
      <p className="mb-8">You have successfully joined the waitlist.</p>
      <button
        onClick={handleSignOut}
        className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold"
      >
        Logout
      </button>
    </div>
  );
}

function JoinWaitlistSignInButton() {
  return (
    <SignInButton mode="modal" redirectUrl="/joined">
      <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold">
        Join Waitlist
      </button>
    </SignInButton>
  );
}

export default function JoinedPage() {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <div className="min-h-screen flex items-center justify-center">
        <SignedOut>
          <JoinWaitlistSignInButton />
        </SignedOut>

        <SignedIn>
          <JoinedContent />
        </SignedIn>
      </div>
    </ClerkProvider>
  );
}
