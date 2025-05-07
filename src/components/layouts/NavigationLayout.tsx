import { ReactNode } from 'react';

import { redirect } from 'next/navigation';

import Header from '../header';

// import MobileNav from './mobile-nav';
// import Navbar from './navbar';

interface NavigationLayoutProps {
    children: ReactNode;
}

export default async function NavigationLayout({ children }: NavigationLayoutProps) {
    return (
        <div className='text-foreground flex min-h-screen flex-col bg-white'>
            <Header />

            {/* <Navbar user={user} /> */}
            <main className='flex-1 px-4 sm:px-6 lg:px-8'>{children}</main>
            {/* <MobileNav /> */}
        </div>
    );
}
