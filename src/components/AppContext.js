"use client";
import { SessionProvider } from "next-auth/react";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function AppProvider({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}
