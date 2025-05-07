'use client';

import type React from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { categoryColors, categoryNames } from '@/constants/product/categories';
import { ROUTES } from '@/constants/routes';
import type { Product } from '@/types/product';
import { formatPrice } from '@/utils/format_price';

import { Plus } from 'lucide-react';

interface ProductCardProps {
    product: Product | any;
    onAddToCart: () => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
    const router = useRouter();

    const handleCardClick = (e: React.MouseEvent) => {
        // Evitar navegação se o clique foi no botão de adicionar ao carrinho
        if ((e.target as HTMLElement).closest('button')) {
            return;
        }
        router.push(ROUTES.PRODUCTS.DETAIL(product.id));
    };

    return (
        <Card
            className='group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-md'
            onClick={handleCardClick}>
            <div className='bg-muted/10 relative aspect-square overflow-hidden'>
                <div className='absolute inset-0 z-10 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100'>
                    <Button
                        onClick={(e) => {
                            e.stopPropagation();
                            onAddToCart();
                        }}
                        variant='secondary'
                        className='translate-y-4 transform opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
                        Adicionar ao Carrinho
                    </Button>
                </div>
                <Image
                    src={product.image || '/placeholder.svg'}
                    alt={product.name}
                    fill
                    className='object-cover transition-transform duration-500 group-hover:scale-110'
                />
                <div className='absolute top-2 left-2 z-20'>
                    <Badge variant='outline' className={`${categoryColors[product.category]} border-0`}>
                        {categoryNames[product.category]}
                    </Badge>
                </div>
            </div>
            <CardContent className='p-4'>
                <div className='space-y-1'>
                    <p className='text-muted-foreground text-xs'>Cód. {product.code}</p>
                    <h3 className='line-clamp-1 font-medium'>{product.name}</h3>
                </div>
            </CardContent>
            <CardFooter className='flex items-center justify-between p-4 pt-0'>
                <p className='font-bold'>{formatPrice(product.price)}</p>
                <Button
                    size='icon'
                    variant='ghost'
                    onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart();
                    }}
                    className='bg-primary/10 hover:bg-primary/20 h-8 w-8 rounded-full'>
                    <Plus className='h-4 w-4' />
                    <span className='sr-only'>Adicionar ao carrinho</span>
                </Button>
            </CardFooter>
        </Card>
    );
}
