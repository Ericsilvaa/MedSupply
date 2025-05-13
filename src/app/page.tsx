'use client';

import React, { useEffect, useState } from 'react';

import MiniCart from '@/components/cart/mini-cart';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import ProductGrid from '@/components/product-grid';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { generateSeedProducts } from '@/lib/seed';
import { Product, ProductWitCategory } from '@/types/product';
import { CATEGORY_PATTERNS, getProductCategory } from '@/utils/productsWithCategory';

import { produtos } from '../db/produtos';
import { toast } from 'sonner';

export default function Home() {
    const [products] = useState<ProductWitCategory[]>(
        produtos.map((produto) => ({
            ...produto,
            categoria: getProductCategory(produto)
        }))
    );
    const [cartItems, setCartItems] = useState<Product[]>([]);
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

    useEffect(() => {
        const saved = localStorage.getItem('cart');
        if (saved) setCartItems(JSON.parse(saved));
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product: Product) => {
        setCartItems((prev) => [...prev, product]);
        toast.success(`${product.nome} adicionado ao carrinho`);
    };

    const getSorted = (items: ProductWitCategory[], order: 'asc' | 'desc') =>
        [...items].sort((a, b) => (order === 'asc' ? a.preco - b.preco : b.preco - a.preco));

    const getFilteredAndSorted = (categoryId: string): ProductWitCategory[] => {
        const filtered = categoryId === 'todos' ? products : products.filter((p) => p.categoria === categoryId);

        return getSorted(filtered, sortOrder);
    };

    return (
        <main className='bg-background min-h-screen'>
            <Header cartItemCount={cartItems.length} />

            <HeroSection />

            <div className='container mx-auto px-4 py-12'>
                <div className='mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
                    <h2 className='text-2xl font-medium'>Produtos Hospitalares</h2>

                    <div className='flex items-center gap-4'>
                        <span className='text-muted-foreground text-sm'>{products.length} produtos</span>

                        <select
                            onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
                            className='rounded border px-2 py-1 text-sm'>
                            <option value='asc'>Menor preço</option>
                            <option value='desc'>Maior preço</option>
                        </select>

                        <MiniCart cartItems={cartItems} />
                    </div>
                </div>

                <Tabs defaultValue='todos' className='w-full'>
                    <TabsList className='mb-8 flex flex-wrap gap-2 bg-transparent'>
                        {CATEGORY_PATTERNS.map(({ category }) => (
                            <TabsTrigger
                                key={category}
                                value={category}
                                className='data-[state=active]:bg-primary data-[state=active]:text-primary-foreground'>
                                {category}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    <TabsContent value='todos'>
                        <ProductGrid products={getFilteredAndSorted('todos')} onAddToCart={addToCart} />
                    </TabsContent>

                    {CATEGORY_PATTERNS.slice(1).map(({ category }) => (
                        <TabsContent key={category} value={category}>
                            <ProductGrid
                                products={getSorted(
                                    products.filter((p) => p.categoria === category),
                                    sortOrder
                                )}
                                onAddToCart={addToCart}
                            />
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </main>
    );
}
