// src/components/Header.tsx
import Link from 'next/link';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">ASA</Link>
        <div className="space-x-4">
          <Link href="#about" className="text-gray-600 hover:text-gray-800">About</Link>
          <Link href="#projects" className="text-gray-600 hover:text-gray-800">Projects</Link>
          <Link href="#contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
