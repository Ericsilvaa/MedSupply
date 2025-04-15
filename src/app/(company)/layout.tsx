'use client';

import type { ReactNode } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

const navLinks = [
    { label: 'Sobre', href: '/sobre' },
    { label: 'Contato', href: '/contato' },
    { label: 'FAQ', href: '/faq' }
];

export default function InstitutionalLayout({ children }: { children: ReactNode }) {
    const pathname = usePathname();

    return (
        <main className='min-h-screen bg-slate-50'>
            <div className='container mx-auto max-w-screen-xl space-y-12 px-4 py-10'>
                {/* Topbar + Navegação */}
                <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
                    {/* Logo */}
                    <Link href='/' className='text-primary text-xl font-bold tracking-tight'>
                        MEDSUPPLY
                    </Link>

                    {/* Navegação */}
                    <nav className='flex flex-wrap justify-center gap-4 md:gap-6'>
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    'hover:text-primary text-sm font-medium transition-colors',
                                    pathname === link.href ? 'text-primary font-semibold' : 'text-muted-foreground'
                                )}>
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Conteúdo da página */}
                <div>{children}</div>
            </div>
        </main>
    );
}
