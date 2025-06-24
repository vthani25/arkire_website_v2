// src/pages/joined.jsx
import React from 'react';
import { ClerkProvider, SignInButton, SignedIn, SignedOut, useUser, useClerk } from '@clerk/clerk-react';

const PUBLISHABLE_KEY = import.meta.env.PUBLIC_CLERK_PUBLISHABLE_KEY;

function JoinedContent() {
  const { user } = useUser();
  const { signOut } = useClerk();

  if (!user) return;

  const handleSignOut = () => {
    signOut({ redirectUrl: '/' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 text-center p-6">
      <div className="bg-white p-10 rounded-xl shadow-lg max-w-lg w-full">
        <h1 className="text-3xl font-bold text-orange-600 mb-4">🎉 Welcome to Arkire!</h1>
        {user && (
          <p className="text-gray-700 text-lg">
            Hello <span className="font-semibold">{user.firstName}</span>, your account has been successfully created.
          </p>
        )}
        <p className="mt-4 text-sm text-gray-500">You're all set to start exploring your marketing journey.</p>
        <button
        onClick={handleSignOut}
        className="mt-5 px-5 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium text-lg rounded-xl shadow-lg transition cursor-pointer"
      >
        Go Back
      </button>
      </div>
    </div>
  );
}

export default function JoinedPage() {
  return (
      <ClerkProvider publishableKey={import.meta.env.PUBLIC_CLERK_PUBLISHABLE_KEY}>
            <JoinedContent />
    </ClerkProvider>
  );
}
