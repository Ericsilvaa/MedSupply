import type { Metadata } from 'next';
import Link from 'next/link';

import { CartItem } from '@/components/cart/cart-item';
import { CartSummary } from '@/components/cart/cart-summary';
import { EmptyCart } from '@/components/cart/empty-cart';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

import { ChevronLeft, ShoppingCart, Trash2 } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Carrinho | WappCart',
    description: 'Revise os itens em seu carrinho e finalize sua compra.'
};

export default function CartPage() {
    const cartItems = [
        {
            id: 1,
            name: 'Smartphone Premium XS',
            price: 1299.99,
            quantity: 1,
            image: '/placeholder.svg?height=100&width=100'
        },
        {
            id: 2,
            name: 'Fones de Ouvido Bluetooth',
            price: 149.99,
            quantity: 2,
            image: '/placeholder.svg?height=100&width=100'
        },
        {
            id: 3,
            name: 'Smartwatch Series 5',
            price: 299.99,
            quantity: 1,
            image: '/placeholder.svg?height=100&width=100'
        }
    ];

    const hasItems = cartItems.length > 0;

    return (
        <div className='container mx-auto max-w-7xl px-4 py-10'>
            <div className='mb-8 flex items-center justify-between'>
                <h1 className='text-3xl font-bold tracking-tight'>Seu Carrinho</h1>
                <div className='text-muted-foreground flex items-center text-sm'>
                    <ShoppingCart className='mr-2 h-4 w-4' />
                    <span>
                        {cartItems.length} {cartItems.length === 1 ? 'item' : 'itens'}
                    </span>
                </div>
            </div>

            {!hasItems ? (
                <EmptyCart />
            ) : (
                <div className='grid gap-8 md:grid-cols-3'>
                    <div className='md:col-span-2'>
                        <Card className='border-none shadow-lg'>
                            <CardHeader className='px-6'>
                                <CardTitle>Itens do Carrinho</CardTitle>
                            </CardHeader>
                            <CardContent className='px-6'>
                                <div className='space-y-5'>
                                    {cartItems.map((item) => (
                                        <CartItem key={item.id} item={item} />
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter className='flex justify-between border-t px-6 py-4'>
                                <Button variant='outline' size='sm' asChild>
                                    <Link href='/products' className='flex items-center'>
                                        <ChevronLeft className='mr-2 h-4 w-4' />
                                        Continuar Comprando
                                    </Link>
                                </Button>
                                <Button
                                    variant='outline'
                                    size='sm'
                                    className='text-red-500 hover:bg-red-50 hover:text-red-600'>
                                    <Trash2 className='mr-2 h-4 w-4' />
                                    Limpar Carrinho
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>

                    <div>
                        <CartSummary cartItems={cartItems} />

                        {/* <Card className='mt-6 border-none shadow-lg'>
                            <CardHeader className='px-6'>
                                <CardTitle>Cupom de Desconto</CardTitle>
                            </CardHeader>
                            <CardContent className='px-6'>
                                <div className='flex space-x-2'>
                                    <Input placeholder='Digite seu cupom' className='flex-1' />
                                    <Button variant='outline'>Aplicar</Button>
                                </div>
                            </CardContent>
                        </Card> */}
                    </div>
                </div>
            )}
        </div>
    );
}
