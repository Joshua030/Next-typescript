"use client";

import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>is Loading ....</p>;
  return (
    <div className="flex flex-col">
      <span>{session?.user?.name}</span>
      <span>{session?.user?.email}</span>
      <span>{session?.user?.image}</span>
    </div>
  );
}
