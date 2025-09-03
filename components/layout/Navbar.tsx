"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      {/* Logo / Brand */}
      <Link href="/" className="text-2xl font-bold text-indigo-600">
        ALX Listings
      </Link>

      {/* Navigation Links */}
      <div className="space-x-6">
        <Link href="/properties" className="hover:text-indigo-500 transition">
          Properties
        </Link>
        <Link href="/about" className="hover:text-indigo-500 transition">
          About
        </Link>
        <Link href="/contact" className="hover:text-indigo-500 transition">
          Contact
        </Link>
      </div>
    </nav>
  );
}
