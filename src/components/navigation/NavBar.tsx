import Link from 'next/link';
import MobileNav from './MobileNav';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
];

export default function NavBar() {
  return (
    <nav className="bg-background shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold">Logo</span>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile navigation */}
          <MobileNav navItems={navItems} />
        </div>
      </div>
    </nav>
  );
}
