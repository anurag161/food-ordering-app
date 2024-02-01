"use client";
import Link from "next/link";
import Bars2 from "../icons/Bars2";
import { signOut, useSession } from "next-auth/react";
import { useContext, useState } from "react";

function AuthLinks({ status, userName }) {
  if (status === "authenticated") {
    return (
      <>
        <Link href={"/profile"} className="whitespace-nowrap">
          Hello, {userName}
        </Link>
        <button
          onClick={() => signOut()}
          className="bg-red-600 rounded-full text-white px-8 py-2"
        >
          Logout
        </button>
      </>
    );
  }
  if (status === "unauthenticated") {
    return (
      <>
        <Link href={"/login"}>Login</Link>
        <Link
          className="bg-orange-500 text-white py-2 px-8 rounded-full"
          href={"/register"}
        >
          Register
        </Link>
      </>
    );
  }
}

function Header() {
  const session = useSession();
  console.log(session);
  const status = session?.status;
  const userData = session.data?.user;

  let userName = userData?.name || userData?.email;
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  if (userName && userName.includes(" ")) {
    userName = userName.split(" ")[0];
  }
  return (
    <header>
      <div className="flex items-center md:hidden justify-between mt-4 mb-6">
        <Link className="text-orange-500 font-bold text-3xl" href={"/"}>
          BILLIANOS
        </Link>
        <div className="flex gap-8 items-center">
          <button
            className="p-1 border"
            onClick={() => setMobileNavOpen((prev) => !prev)}
          >
            <Bars2 />
          </button>
        </div>
      </div>
      {mobileNavOpen && (
        <div
          onClick={() => setMobileNavOpen(false)}
          className="md:hidden p-4 bg-gray-200 rounded-lg mt-2 flex flex-col gap-2 text-center"
        >
          <Link href={"/"}>Home</Link>
          <Link href={"/menu"}>Menu</Link>
          <Link href={"#about"}>About</Link>
          <Link href={"/#contact"}>Contact</Link>
          <AuthLinks status={status} userName={userName} />
        </div>
      )}
      <div className="hidden md:flex items-center justify-between">
        <nav className="flex gap-8 text-2xl text-gray-600 font-semibold">
          <Link className="text-orange-500 font-bold text-3xl" href={"/"}>
            BILLIANOS
          </Link>
          <Link href={"/"}>Home</Link>
          <Link href={"/menu"}>Menu</Link>
          <Link href={"#about"}>About</Link>
          <Link href={"/#contact"}>Contact</Link>
        </nav>
        <nav className="flex items-center gap-8 text-gray-700 font-semibold">
          <AuthLinks status={status} userName={userName} />
        </nav>
      </div>
    </header>
  );
}

export default Header;
