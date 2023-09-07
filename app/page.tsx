import Example from '@/components/example'
import { UserButton, auth } from '@clerk/nextjs'
import Image from 'next/image'
import { currentUser } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/api";

export default async function Home() {
  const user: User | null = await currentUser();
  const { userId } = auth();

  return (
    <main className="">
      <UserButton afterSignOutUrl="/"/>
      <h2>Server side:</h2>
      <div>Hello, {user?.firstName}!</div>
      <div>userId, {userId}!</div>
      <h2>Client side:</h2>
      <Example />
    </main>
  )
}
