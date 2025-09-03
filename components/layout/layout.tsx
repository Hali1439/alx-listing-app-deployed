"use client";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar always at the top */}
      <Navbar />

      {/* Main content expands */}
      <main className="flex-1 max-w-6xl mx-auto mt-6 px-4">
        {children}
      </main>

      {/* Footer sticks to bottom */}
      <Footer />
    </div>
  );
}
