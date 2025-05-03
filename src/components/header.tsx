'use client';

import { useState } from 'react';

import Link from 'next/link';

import { NavigationMenu } from '@/components/navigation-menu';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import { Menu, Search, ShoppingCart, User } from 'lucide-react';

interface HeaderProps {
    cartItemCount: number;
}

export default function Header({ cartItemCount }: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className='bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur'>
            <div className='container flex h-16 items-center'>
                <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                    <SheetTrigger asChild>
                        <Button variant='ghost' size='icon' className='md:hidden'>
                            <Menu className='h-5 w-5' />
                            <span className='sr-only'>Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side='left' className='w-[300px] sm:w-[400px]'>
                        <NavigationMenu />
                    </SheetContent>
                </Sheet>

                <div className='hidden md:flex md:flex-1 md:items-center md:justify-start md:gap-6'>
                    <NavigationMenu />
                </div>

                <div className='flex flex-1 items-center justify-center md:justify-center'>
                    <Link href='/' className='flex items-center space-x-2'>
                        <span className='text-xl font-bold'>CASA DO DENTISTA </span>
                    </Link>
                </div>

                <div className='flex flex-1 items-center justify-end gap-4'>
                    {/* <Button variant='ghost' size='icon'>
                        <Search className='h-5 w-5' />
                        <span className='sr-only'>Pesquisar</span>
                    </Button>

                    <Button variant='ghost' size='icon'>
                        <User className='h-5 w-5' />
                        <span className='sr-only'>Conta</span>
                    </Button> */}

                    <Link href='/carrinho' className='relative'>
                        {/* Link to the cart page */}
                        <Button variant='ghost' size='icon'>
                            <ShoppingCart className='h-5 w-5' />
                            <span className='sr-only'>Carrinho</span>
                            {cartItemCount > 0 && (
                                <span className='absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white'>
                                    {cartItemCount}
                                </span>
                            )}
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
