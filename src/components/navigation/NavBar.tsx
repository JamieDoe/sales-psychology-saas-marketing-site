import Link from 'next/link';

import getLoggedinUser from '@/lib/actions/getLoggedinUser';
import MobileNav from './MobileNav';
import LogoutButton from '../LogoutButton';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
];

export default async function NavBar() {
  const account = await getLoggedinUser();
  return (
    <nav className="bg-background shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold">
              Logo
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                {item.name}
              </Link>
            ))}
            {account && <LogoutButton />}
          </div>

          {/* Mobile navigation */}
          <MobileNav navItems={navItems} account={account ? true : false} />
        </div>
      </div>
    </nav>
  );
}
