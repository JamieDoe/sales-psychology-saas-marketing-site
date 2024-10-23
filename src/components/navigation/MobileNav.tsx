'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Button,
} from '@/components';
import Link from 'next/link';

interface NavItem {
  name: string;
  href: string;
}

export default function MobileNav({ navItems }: { navItems: NavItem[] }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex md:hidden">
      <Drawer open={isOpen} onOpenChange={setIsOpen} direction="left">
        <DrawerTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Navigation</DrawerTitle>
          </DrawerHeader>
          <div className="flex flex-col gap-4 px-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(!isOpen)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <DrawerClose asChild className="absolute top-4 right-4">
            <Button variant="outline" size="icon" className="rounded-full">
              <X className="m-auto" />
              <span className="sr-only">Close menu</span>
            </Button>
          </DrawerClose>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
