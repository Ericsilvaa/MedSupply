import type React from 'react';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import AppToaster from '@/components/common/toast/Toaster';
import { ThemeProvider } from '@/components/theme-provider';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'MedSupply - Orçamento de Produtos Hospitalares',
    description: 'Monte seu orçamento de produtos hospitalares de forma rápida e fácil',
    generator: 'v0.dev'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='pt-BR'>
            <body className={inter.className}>
                <ThemeProvider attribute='class' defaultTheme='light' enableSystem disableTransitionOnChange>
                    {children}
                </ThemeProvider>
                <AppToaster />
            </body>
        </html>
    );
}
