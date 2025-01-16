"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { path: "/", name: "Home" },
  { path: "/services", name: "Services" },
  { path: "/about", name: "About Us" },
  { path: "/contact", name: "Contact" },
];

export default function NavBar() {
  const pathname = usePathname() || "/";

  return (
    <nav className=" w-full border-gray-200 text-white fixed top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          TechNova
        </Link>
        <div className="flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`transition-colors duration-300 ${pathname === item.path} ?'text-blue-600 font-semibold'  : 'text-gray-700 hover:text-blue-500' `}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
