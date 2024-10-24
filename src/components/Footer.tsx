import Link from 'next/link';

import { Separator } from '@/components';

import { navigationItems } from '@/utils/data/navigationItems';

export default function Footer() {
  return (
    <footer className="bg-muted px-4 pt-10 pb-4">
      <div className="container mx-auto space-y-8">
        <div className="flex justify-evenly">
          <div>
            <Link href="/" className="text-4xl font-bold">
              Logo
            </Link>
          </div>

          {navigationItems.footer.map((link) => (
            <div key={link.title} className="flex flex-col space-y-2">
              <h3>{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  className="text-muted-foreground text-sm hover:text-primary duration-100"
                  key={item.title}
                  href={item.href}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <Separator />
        <div className="flex justify-between text-xs">
          <p className="text-xs">
            © all rights reserved. Web Design by Doe. Company No. 15513952.
          </p>
          <div className="space-x-2">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
