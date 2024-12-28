'use client';

import { Building2, Menu } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  
  return (
    <nav className="border-b bg-background">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <Link href="/" className="flex items-center space-x-2">
          <Building2 className="h-6 w-6" />
          <span className="font-bold">UniVenue</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6 mx-6">
          <Link 
            href="/about"
            className={`text-sm transition-colors hover:text-primary ${
              pathname === '/about' ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            About
          </Link>
          <Link 
            href="/contact"
            className={`text-sm transition-colors hover:text-primary ${
              pathname === '/contact' ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Contact
          </Link>
        </div>

        <div className="ml-auto flex items-center space-x-4">
          <Button variant="outline" asChild>
            <Link href="/login">Login</Link>
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0 md:hidden">
                <Menu className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/about">About</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/contact">Contact</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}