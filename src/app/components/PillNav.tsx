'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function PillNav() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Work', href: '/projects', hasIndicator: true },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-white/80 backdrop-blur-md rounded-full px-8 py-4 shadow-lg border border-gray-200/50">
        <ul className="flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.name} className="relative">
              <Link
                href={item.href}
                className={`text-sm font-medium transition-colors relative ${
                  pathname === item.href
                    ? 'text-gray-900'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {item.hasIndicator && (
                  <span className="absolute -top-1 -right-3 w-2 h-2 bg-red-500 rounded-full"></span>
                )}
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
