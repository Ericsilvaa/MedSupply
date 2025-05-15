'use client';

import { useState } from 'react';

import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Product } from '@/lib/seed';
import { ProductWitCategory } from '@/types/product';

import { Minus, Plus, Trash2 } from 'lucide-react';

interface CartItemProps {
    item: ProductWitCategory;
}

export function CartItem({ item }: CartItemProps) {
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleRemove = () => {
        // Implementar lógica de remoção
        console.log(`Removendo item ${item.codigo}`);
    };

    return (
        <div className='flex flex-col space-y-4'>
            <div className='flex items-start space-x-4'>
                <div className='relative h-28 w-28 overflow-hidden rounded-lg bg-gray-100'>
                    <Image src={item.imagem || '/placeholder.svg'} alt={item.nome} fill className='object-cover' />
                </div>
                <div className='flex-1 space-y-1'>
                    <h3 className='font-medium'>{item.nome}</h3>
                    <p className='text-muted-foreground text-sm'>ID: {item.codigo}</p>
                    <div className='mt-2 flex items-center space-x-2'>
                        <Button
                            variant='outline'
                            size='icon'
                            className='h-8 w-8 rounded-full'
                            onClick={handleDecrement}
                            disabled={quantity <= 1}>
                            <Minus className='h-3 w-3' />
                            <span className='sr-only'>Diminuir quantidade</span>
                        </Button>
                        <span className='w-8 text-center'>{quantity}</span>
                        <Button
                            variant='outline'
                            size='icon'
                            className='h-8 w-8 rounded-full'
                            onClick={handleIncrement}>
                            <Plus className='h-3 w-3' />
                            <span className='sr-only'>Aumentar quantidade</span>
                        </Button>
                    </div>
                </div>
                <div className='flex flex-col items-end space-y-2'>
                    <span className='font-medium'>R$ {(item.preco * quantity).toFixed(2)}</span>
                    <Button
                        variant='ghost'
                        size='sm'
                        className='text-red-500 hover:bg-red-50 hover:text-red-600'
                        onClick={handleRemove}>
                        <Trash2 className='mr-1 h-4 w-4' />
                        Remover
                    </Button>
                </div>
            </div>
            <Separator />
        </div>
    );
}
