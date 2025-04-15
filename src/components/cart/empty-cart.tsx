import Link from 'next/link';

import { Button } from '@/components/ui/button';

import { ShoppingBag } from 'lucide-react';

export function EmptyCart() {
    return (
        <div className='flex flex-col items-center justify-center py-12 text-center'>
            <div className='mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100'>
                <ShoppingBag className='h-10 w-10 text-gray-400' />
            </div>
            <h2 className='mb-2 text-xl font-semibold'>Seu carrinho está vazio</h2>
            <p className='text-muted-foreground mb-6 max-w-md'>
                Parece que você ainda não adicionou nenhum produto ao seu carrinho. Explore nossa loja e descubra
                produtos incríveis!
            </p>
            <Button asChild>
                <Link href='/products'>Explorar Produtos</Link>
            </Button>
        </div>
    );
}
