'use client';

import { useState } from 'react';

import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import ProductGrid from '@/components/product-grid';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { Product } from '@/types/product';

// Dados de exemplo para produtos hospitalares
const products: Product[] = [
    {
        id: 1,
        code: '0001',
        name: 'Monitor Multiparamétrico',
        image: '/placeholder.svg?height=200&width=200',
        price: 12500.0,
        category: 'monitoramento'
    },
    {
        id: 2,
        code: '0002',
        name: 'Desfibrilador Cardíaco',
        image: '/placeholder.svg?height=200&width=200',
        price: 18750.0,
        category: 'emergencia'
    },
    {
        id: 3,
        code: '0003',
        name: 'Bomba de Infusão',
        image: '/placeholder.svg?height=200&width=200',
        price: 5200.0,
        category: 'medicacao'
    },
    {
        id: 4,
        code: '0004',
        name: 'Ventilador Pulmonar',
        image: '/placeholder.svg?height=200&width=200',
        price: 32000.0,
        category: 'respiratorio'
    },
    {
        id: 5,
        code: '0005',
        name: 'Cama Hospitalar Elétrica',
        image: '/placeholder.svg?height=200&width=200',
        price: 8900.0,
        category: 'mobiliario'
    },
    {
        id: 6,
        code: '0006',
        name: 'Eletrocardiógrafo Digital',
        image: '/placeholder.svg?height=200&width=200',
        price: 6750.0,
        category: 'monitoramento'
    },
    {
        id: 7,
        code: '0007',
        name: 'Foco Cirúrgico LED',
        image: '/placeholder.svg?height=200&width=200',
        price: 15300.0,
        category: 'cirurgia'
    },
    {
        id: 8,
        code: '0008',
        name: 'Autoclave Hospitalar',
        image: '/placeholder.svg?height=200&width=200',
        price: 22800.0,
        category: 'esterilizacao'
    },
    {
        id: 9,
        code: '0009',
        name: 'Oxímetro de Pulso',
        image: '/placeholder.svg?height=200&width=200',
        price: 1200.0,
        category: 'monitoramento'
    },
    {
        id: 10,
        code: '0010',
        name: 'Mesa Cirúrgica Elétrica',
        image: '/placeholder.svg?height=200&width=200',
        price: 45000.0,
        category: 'cirurgia'
    },
    {
        id: 11,
        code: '0011',
        name: 'Carrinho de Emergência',
        image: '/placeholder.svg?height=200&width=200',
        price: 7800.0,
        category: 'emergencia'
    },
    {
        id: 12,
        code: '0012',
        name: 'Negatoscópio LED',
        image: '/placeholder.svg?height=200&width=200',
        price: 2500.0,
        category: 'diagnostico'
    }
];

// Categorias de produtos
const categories = [
    { id: 'todos', name: 'Todos os Produtos' },
    { id: 'monitoramento', name: 'Monitoramento' },
    { id: 'emergencia', name: 'Emergência' },
    { id: 'medicacao', name: 'Medicação' },
    { id: 'respiratorio', name: 'Respiratório' },
    { id: 'mobiliario', name: 'Mobiliário' },
    { id: 'cirurgia', name: 'Cirurgia' },
    { id: 'esterilizacao', name: 'Esterilização' },
    { id: 'diagnostico', name: 'Diagnóstico' }
];

export default function Home() {
    const [cartItems, setCartItems] = useState<Product[]>([]);

    const addToCart = (product: Product) => {
        setCartItems([...cartItems, product]);
    };

    return (
        <main className='bg-background min-h-screen'>
            <Header cartItemCount={cartItems.length} />
            <HeroSection />

            <div className='container mx-auto px-4 py-12'>
                <div className='mb-8 flex items-center justify-between'>
                    <h2 className='text-2xl font-medium'>Produtos Hospitalares</h2>
                    <div className='flex items-center gap-2'>
                        <span className='text-muted-foreground text-sm'>{products.length} produtos</span>
                    </div>
                </div>

                <Tabs defaultValue='todos' className='w-full'>
                    <TabsList className='mb-8 flex h-auto flex-wrap gap-2 bg-transparent'>
                        {categories.map((category) => (
                            <TabsTrigger
                                key={category.id}
                                value={category.id}
                                className='data-[state=active]:bg-primary data-[state=active]:text-primary-foreground'>
                                {category.name}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    <TabsContent value='todos'>
                        <ProductGrid products={products} onAddToCart={addToCart} />
                    </TabsContent>

                    {categories.slice(1).map((category) => (
                        <TabsContent key={category.id} value={category.id}>
                            <ProductGrid
                                products={products.filter((p) => p.category === category.id)}
                                onAddToCart={addToCart}
                            />
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </main>
    );
}
