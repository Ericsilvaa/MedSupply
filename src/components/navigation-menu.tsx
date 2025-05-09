'use client';

import Link from 'next/link';

import { NAV_ITEMS } from '@/constants/navigation';

export function NavigationMenu() {
    return (
        <nav className='flex flex-col gap-4 md:flex-row md:items-center md:gap-6'>
            {NAV_ITEMS.map((item) => (
                <Link
                    key={item.name}
                    href={item.href}
                    className='hover:text-primary text-sm font-medium transition-colors'>
                    {item.name}
                </Link>
            ))}
        </nav>
    );
}
