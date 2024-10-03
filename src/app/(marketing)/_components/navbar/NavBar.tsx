"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function NavBar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="flex justify-between items-center h-[10vh] fixed w-full top-0 left-0 px-8 z-20">
      <Link href="/" className="">
        <Image
          src="/Images/logo.svg"
          alt="Logo"
          width={100}
          height={50}
          className=""
        />
      </Link>
      <div className=" flex items-center justify-center gap-5 ">
        <Link
          href="/"
          className={`${
            isActive("/")
              ? "bg-[#1E1E1E] py-1 px-4 rounded-2xl align-middle"
              : ""
          }`}
        >
          Home
        </Link>

        <Link
          href="/merchandise"
          className={`${
            isActive("/merchandise")
              ? "bg-[#1E1E1E] py-1 px-4 rounded-2xl align-middle"
              : ""
          }`}
        >
          Merchandise
        </Link>

        <Link
          href="/about"
          className={`${
            isActive("/about") ? "bg-[#1E1E1E] py-1 px-4 rounded-2xl" : ""
          }`}
        >
          About
        </Link>
      </div>
      <button className=" text-center bg-[#4F46E5] text-white px-6 rounded-2xl flex justify-center  align-middle items-center gap-1 text-sm py-2">
        <p className="text-sm">Get started</p>
        <Image src="/Icons/arrow.svg" alt="arrow" width={16} height={16} />
      </button>
    </nav>
  );
}
