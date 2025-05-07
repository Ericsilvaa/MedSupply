'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';

import Header from '@/components/header';
import RelatedProducts from '@/components/products/related-products';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { categoryNames } from '@/constants/product/categories';
import { products_data } from '@/db/product-data';
import type { Product, ProductById } from '@/types/product';
import { formatPrice } from '@/utils/format_price';

import { ArrowLeft, Check, Heart, Minus, Plus, Share2, ShoppingCart, Star } from 'lucide-react';

export default function ProductPage() {
    const params = useParams();
    const router = useRouter();
    const [product, setProduct] = useState<ProductById | null>(null);
    const [quantity, setQuantity] = useState(1);
    const [cartItems, setCartItems] = useState<Product[]>([]);

    useEffect(() => {
        const productId = Number(params.id);
        const foundProduct = products_data.find((p) => p.id === productId) || null;
        setProduct(foundProduct);
    }, [params.id]);

    const addToCart = () => {
        if (product) {
            // Adicionar o produto ao carrinho a quantidade de vezes selecionada
            const items = Array(quantity).fill(product);
            setCartItems((prev) => [...prev, ...items]);
        }
    };

    const incrementQuantity = () => {
        if (quantity < (product?.stock || 10)) {
            setQuantity((prev) => prev + 1);
        }
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    };

    if (!product) {
        return (
            <div className='bg-background min-h-screen'>
                <Header cartItemCount={cartItems.length} />
                <div className='container mx-auto flex items-center justify-center px-4 py-12'>
                    <p>Carregando produto...</p>
                </div>
            </div>
        );
    }

    return (
        <div className='bg-background min-h-screen'>
            <Header cartItemCount={cartItems.length} />

            <div className='container mx-auto px-4 py-8'>
                <Button variant='ghost' className='mb-6 flex items-center gap-2' onClick={() => router.push('/')}>
                    <ArrowLeft className='h-4 w-4' />
                    Voltar para produtos
                </Button>

                <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
                    {/* Imagem do produto */}
                    <div className='bg-muted/10 relative aspect-square overflow-hidden rounded-lg'>
                        <Image
                            src={product.image || '/placeholder.svg'}
                            alt={product.name}
                            fill
                            className='object-contain p-8'
                        />
                    </div>

                    {/* Informações do produto */}
                    <div className='flex flex-col'>
                        <div className='mb-6'>
                            <div className='mb-2 flex items-center gap-2'>
                                <Badge variant='outline' className='border-0 bg-blue-100 text-blue-800'>
                                    {categoryNames[product.category]}
                                </Badge>
                                <span className='text-muted-foreground text-sm'>Cód. {product.code}</span>
                            </div>

                            <h1 className='mb-2 text-3xl font-bold'>{product.name}</h1>

                            <div className='mb-4 flex items-center gap-2'>
                                <div className='flex'>
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star
                                            key={star}
                                            className={`h-4 w-4 ${star <= 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                                        />
                                    ))}
                                </div>
                                <span className='text-muted-foreground text-sm'>(12 avaliações)</span>
                            </div>

                            <p className='mb-4 text-3xl font-bold'>{formatPrice(product.price)}</p>

                            <p className='text-muted-foreground mb-6'>
                                {product.description ||
                                    `O ${product.name} é um equipamento médico de alta qualidade, projetado para oferecer desempenho excepcional em ambientes hospitalares. Fabricado com materiais duráveis e tecnologia avançada, este produto atende aos mais rigorosos padrões de qualidade e segurança.`}
                            </p>
                        </div>

                        <Separator className='mb-6' />

                        {/* Quantidade e botões de ação */}
                        <div className='space-y-4'>
                            <div className='flex items-center gap-4'>
                                <span className='font-medium'>Quantidade:</span>
                                <div className='flex items-center'>
                                    <Button
                                        variant='outline'
                                        size='icon'
                                        onClick={decrementQuantity}
                                        disabled={quantity <= 1}>
                                        <Minus className='h-4 w-4' />
                                    </Button>
                                    <span className='w-12 text-center'>{quantity}</span>
                                    <Button
                                        variant='outline'
                                        size='icon'
                                        onClick={incrementQuantity}
                                        disabled={quantity >= (product.stock || 10)}>
                                        <Plus className='h-4 w-4' />
                                    </Button>
                                </div>
                            </div>

                            <div className='flex flex-col gap-3 sm:flex-row'>
                                <Button className='flex-1 gap-2' size='lg' onClick={addToCart}>
                                    <ShoppingCart className='h-5 w-5' />
                                    Adicionar ao Carrinho
                                </Button>
                                <Button variant='outline' size='lg'>
                                    <Heart className='h-5 w-5' />
                                    <span className='sr-only'>Adicionar aos favoritos</span>
                                </Button>
                                <Button variant='outline' size='lg'>
                                    <Share2 className='h-5 w-5' />
                                    <span className='sr-only'>Compartilhar</span>
                                </Button>
                            </div>

                            <div className='text-muted-foreground flex items-center gap-2 text-sm'>
                                <Check className='h-4 w-4 text-green-500' />
                                <span>{product.stock || 10} em estoque</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tabs de informações adicionais */}
                <div className='mt-12'>
                    <Tabs defaultValue='specifications'>
                        <TabsList className='w-full justify-start'>
                            <TabsTrigger value='specifications'>Especificações</TabsTrigger>
                            <TabsTrigger value='features'>Características</TabsTrigger>
                            <TabsTrigger value='warranty'>Garantia</TabsTrigger>
                        </TabsList>
                        <TabsContent value='specifications' className='pt-4'>
                            <Card>
                                <CardContent className='pt-6'>
                                    <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                                        {product.specifications ? (
                                            Object.entries(product.specifications).map(([key, value]) => (
                                                <div key={key} className='flex justify-between border-b pb-2'>
                                                    <span className='font-medium'>{key}</span>
                                                    <span>{value}</span>
                                                </div>
                                            ))
                                        ) : (
                                            <>
                                                <div className='flex justify-between border-b pb-2'>
                                                    <span className='font-medium'>Fabricante</span>
                                                    <span>{product.manufacturer || 'MedTech'}</span>
                                                </div>
                                                <div className='flex justify-between border-b pb-2'>
                                                    <span className='font-medium'>Modelo</span>
                                                    <span>PRO-{product.code}</span>
                                                </div>
                                                <div className='flex justify-between border-b pb-2'>
                                                    <span className='font-medium'>Dimensões</span>
                                                    <span>40 x 30 x 15 cm</span>
                                                </div>
                                                <div className='flex justify-between border-b pb-2'>
                                                    <span className='font-medium'>Peso</span>
                                                    <span>2.5 kg</span>
                                                </div>
                                                <div className='flex justify-between border-b pb-2'>
                                                    <span className='font-medium'>Alimentação</span>
                                                    <span>110-220V</span>
                                                </div>
                                                <div className='flex justify-between border-b pb-2'>
                                                    <span className='font-medium'>Certificações</span>
                                                    <span>ANVISA, CE, ISO 13485</span>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value='features' className='pt-4'>
                            <Card>
                                <CardContent className='pt-6'>
                                    <ul className='space-y-2'>
                                        {product.features ? (
                                            product.features.map((feature, index) => (
                                                <li key={index} className='flex items-start gap-2'>
                                                    <Check className='mt-0.5 h-5 w-5 flex-shrink-0 text-green-500' />
                                                    <span>{feature}</span>
                                                </li>
                                            ))
                                        ) : (
                                            <>
                                                <li className='flex items-start gap-2'>
                                                    <Check className='mt-0.5 h-5 w-5 flex-shrink-0 text-green-500' />
                                                    <span>
                                                        Design ergonômico para facilitar o uso em ambientes hospitalares
                                                    </span>
                                                </li>
                                                <li className='flex items-start gap-2'>
                                                    <Check className='mt-0.5 h-5 w-5 flex-shrink-0 text-green-500' />
                                                    <span>Interface intuitiva que minimiza a curva de aprendizado</span>
                                                </li>
                                                <li className='flex items-start gap-2'>
                                                    <Check className='mt-0.5 h-5 w-5 flex-shrink-0 text-green-500' />
                                                    <span>Construção robusta para suportar o uso intensivo</span>
                                                </li>
                                                <li className='flex items-start gap-2'>
                                                    <Check className='mt-0.5 h-5 w-5 flex-shrink-0 text-green-500' />
                                                    <span>
                                                        Tecnologia avançada que garante precisão e confiabilidade
                                                    </span>
                                                </li>
                                                <li className='flex items-start gap-2'>
                                                    <Check className='mt-0.5 h-5 w-5 flex-shrink-0 text-green-500' />
                                                    <span>Compatível com os principais sistemas hospitalares</span>
                                                </li>
                                            </>
                                        )}
                                    </ul>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value='warranty' className='pt-4'>
                            <Card>
                                <CardContent className='pt-6'>
                                    <p className='mb-4'>
                                        {product.warranty ||
                                            'Este produto possui garantia de 24 meses (sendo 3 meses de garantia legal e 21 meses de garantia especial oferecida pelo fabricante) contra defeitos de fabricação.'}
                                    </p>
                                    <p>
                                        A garantia não cobre danos causados por uso inadequado, quedas, impactos,
                                        exposição a condições adversas (umidade excessiva, calor, etc.) ou tentativas de
                                        reparo por pessoal não autorizado.
                                    </p>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>

                {/* Produtos relacionados */}
                <div className='mt-16'>
                    <h2 className='mb-6 text-2xl font-bold'>Produtos Relacionados</h2>
                    <RelatedProducts
                        currentProductId={product.id}
                        category={product.category}
                        onAddToCart={(product) => setCartItems((prev) => [...prev, product])}
                    />
                </div>
            </div>
        </div>
    );
}
