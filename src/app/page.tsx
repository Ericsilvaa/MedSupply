'use client';

import { useEffect, useState } from 'react';

import MiniCart from '@/components/cart/mini-cart';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import ProductGrid from '@/components/product-grid';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { filter_categories } from '@/constants/filters';
import { products_data } from '@/db/product-data';
import { Product } from '@/types/product';

import { toast } from 'sonner';

export default function Home() {
    const [products] = useState<any[]>(products_data);
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
        toast.success(`${product.name} adicionado ao carrinho`);
    };

    const getSorted = (items: Product[]) =>
        [...items].sort((a, b) => (sortOrder === 'asc' ? a.price - b.price : b.price - a.price));

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
                        {filter_categories.map((category) => (
                            <TabsTrigger
                                key={category.id}
                                value={category.id}
                                className='data-[state=active]:bg-primary data-[state=active]:text-primary-foreground'>
                                {category.name}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    <TabsContent value='todos'>
                        <ProductGrid products={getSorted(products)} onAddToCart={addToCart} />
                    </TabsContent>

                    {filter_categories.slice(1).map((category) => (
                        <TabsContent key={category.id} value={category.id}>
                            <ProductGrid
                                products={getSorted(products.filter((p) => p.category === category.id))}
                                onAddToCart={addToCart}
                            />
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </main>
    );
}
