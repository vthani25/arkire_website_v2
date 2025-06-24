import React, { useEffect } from 'react';
import { ClerkProvider, SignInButton, useUser } from '@clerk/clerk-react';

export default function JoinWaitlist() {
  return (
    <ClerkProvider publishableKey={import.meta.env.PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <JoinWaitlistContent />
    </ClerkProvider>
  );
}

function JoinWaitlistContent() {
  const { isSignedIn } = useUser();

  useEffect(() => {
    if (isSignedIn) {
      // User signed in! Redirect manually
      window.location.href = '/joined';
    }
  }, [isSignedIn]);

  return (
    <SignInButton mode="modal">
      <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold">
        Join Waitlist
      </button>
    </SignInButton>
  );
}
