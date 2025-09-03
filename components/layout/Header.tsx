import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-800">
          Halima M
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-900">
            About
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
