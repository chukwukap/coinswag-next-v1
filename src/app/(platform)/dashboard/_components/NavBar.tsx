"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  LayoutDashboard,
  Shirt,
  Package2,
  Contact,
  LogOut,
  Settings,
} from "lucide-react";

function NavBar() {
  const pathname = usePathname();

  const getNavLinkClass = (path: string) => {
    const isActive = pathname === path;
    return `w-full flex justify-center items-center h-[3.5rem] ${
      isActive ? "active" : ""
    }`;
  };

  const NavIcon = ({
    path,
    icon: Icon,
  }: {
    path: string;
    icon: React.ElementType;
  }) => {
    const isActive = pathname === path;
    return <Icon color={isActive ? "#fff" : "#7e7e7e"} />;
  };

  return (
    <aside className=" flex flex-col items-center gap-[1rem] border-r border-r-[#272727]">
      <div className=" flex justify-center items-center mb-[3rem] h-[10vh]">
        <Image
          src="/Images/logo.svg"
          alt="coinswag logo"
          width={32}
          height={32}
          className="brightness-200"
        />
      </div>
      <Link href="/dashboard" className={getNavLinkClass("/dashboard")}>
        <NavIcon path="/dashboard" icon={LayoutDashboard} />
      </Link>

      <Link
        href="/dashboard/products"
        className={getNavLinkClass("/dashboard/products")}
      >
        <NavIcon path="/dashboard/products" icon={Shirt} />
      </Link>
      <Link
        href="/dashboard/orders"
        className={getNavLinkClass("/dashboard/orders")}
      >
        <NavIcon path="/dashboard/orders" icon={Package2} />
      </Link>
      <Link
        href="/dashboard/customers"
        className={getNavLinkClass("/dashboard/customers")}
      >
        <NavIcon path="/dashboard/customers" icon={Contact} />
      </Link>
      <div className="mt-auto w-full flex flex-col gap-4">
        <Link
          href="/dashboard/settings"
          className={getNavLinkClass("/dashboard/settings")}
        >
          <NavIcon path="/dashboard/settings" icon={Settings} />
        </Link>
        <Link href="/messages" className={getNavLinkClass("/messages")}>
          <NavIcon path="/messages" icon={LogOut} />
        </Link>
      </div>
    </aside>
  );
}

export default NavBar;
