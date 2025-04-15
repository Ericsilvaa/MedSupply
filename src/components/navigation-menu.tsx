'use client';

import Link from 'next/link';

import { ROUTES } from '@/constants/routes';

export function NavigationMenu() {
    const NAV_ITEMS = [
        { name: 'Início', href: ROUTES.HOME },
        { name: 'Produtos', href: ROUTES.PRODUCTS.ROOT },
        { name: 'Categorias', href: ROUTES.CATEGORIES },
        { name: 'Promoções', href: ROUTES.PROMOTIONS },
        { name: 'Sobre', href: ROUTES.ABOUT },
        { name: 'Contato', href: ROUTES.CONTACT }
    ];

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
