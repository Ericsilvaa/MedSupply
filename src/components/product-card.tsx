'use client';

import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import type { Product, ProductWitCategory } from '@/types/product';
import { CATEGORY_COLORS, CATEGORY_NAMES } from '@/utils/productsWithCategory';

import ImageWithFallback from './ImageWithFallback';
import { Plus } from 'lucide-react';

interface ProductCardProps {
    product: ProductWitCategory;
    onAddToCart: () => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
    // Função para formatar o preço em reais
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(price);
    };

    return (
        <Card className='group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-md'>
            <div className='bg-muted/10 relative aspect-square overflow-hidden'>
                <ImageWithFallback
                    src={'/placeholder.svg'}
                    alt={product.nome}
                    fill
                    className='object-cover transition-transform duration-500 group-hover:scale-110'
                />
                <div className='absolute top-2 left-2 z-20'>
                    <Badge variant='outline' className={`${CATEGORY_COLORS[product.categoria ?? 'Outros']} border-0`}>
                        {CATEGORY_NAMES[product.categoria ?? 'Outros']}
                    </Badge>
                </div>
            </div>
            <CardContent className='p-4'>
                <div className='space-y-1'>
                    <p className='text-muted-foreground text-xs'>Cód. {product.codigo}</p>
                    <h3 className='line-clamp-1 font-medium'>{product.nome}</h3>
                    <span></span>
                </div>
            </CardContent>
            <CardFooter className='flex items-center justify-between p-4 pt-0'>
                <Button
                    size='icon'
                    variant='ghost'
                    onClick={onAddToCart}
                    className='bg-primary/10 hover:bg-primary/20 h-8 w-8 rounded-full'>
                    <Plus className='h-4 w-4' />
                    <span className='sr-only'>Adicionar ao carrinho</span>
                </Button>
            </CardFooter>
        </Card>
    );
}
