import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 border-b border-gray-700 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">
          <Link href="/">Player Stats</Link>
        </h1>

        {/* Navigation */}
        <nav className="flex gap-6">
          <Link href="/" className="text-gray-300 hover:text-white transition">
            Home
          </Link>
          <Link
            href="/players"
            className="text-gray-300 hover:text-white transition"
          >
            Players
          </Link>
          <Link
            href="/teams"
            className="text-gray-300 hover:text-white transition"
          >
            Teams
          </Link>
          <Link
            href="/about"
            className="text-gray-300 hover:text-white transition"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
