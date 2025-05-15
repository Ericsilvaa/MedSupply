'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Product } from '@/types/product';

import { ShoppingCart } from 'lucide-react';

type MiniCartProps = {
    cartItems: Product[];
};

export default function MiniCart({ cartItems }: MiniCartProps) {
    const total = cartItems.reduce((sum, item) => sum + item.preco, 0);

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant='outline' size='icon' aria-label='Abrir carrinho'>
                    <ShoppingCart />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Meu Carrinho</SheetTitle>
                </SheetHeader>

                <div className='mt-4 space-y-4'>
                    {cartItems.length === 0 ? (
                        <p className='text-muted-foreground text-sm'>Seu carrinho está vazio.</p>
                    ) : (
                        cartItems.map((item, index) => (
                            <div key={index} className='flex justify-between border-b pb-2'>
                                <span className='text-sm'>{item.nome}</span>
                                <span className='text-sm font-medium'>R$ {item.preco.toFixed(2)}</span>
                            </div>
                        ))
                    )}

                    {cartItems.length > 0 && (
                        <div className='mt-4 border-t pt-4 text-right text-sm font-semibold'>
                            Total: R$ {total.toFixed(2)}
                        </div>
                    )}
                </div>
            </SheetContent>
        </Sheet>
    );
}
