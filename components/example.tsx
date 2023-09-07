"use client";
import { useAuth, useUser } from "@clerk/nextjs";
 
export default function Example() {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { isLoaded: isUserLoaded, isSignedIn, user } = useUser();
 
  // In case the user signs out while on the page.
  if (!isLoaded || !isUserLoaded || !userId) {
    return null;
  }

  console.log(user)
 
  return (
    <div>
      Hello, {user?.firstName} your current active session is {sessionId}
    </div>
  );
}