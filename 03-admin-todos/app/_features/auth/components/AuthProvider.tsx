"use client";

import { SessionProvider } from "next-auth/react";

interface AuthProvidersProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children, ...rest }: AuthProvidersProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};
