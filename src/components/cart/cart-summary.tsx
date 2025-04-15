'use client';

import { useState } from 'react';

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';

import { ArrowRight } from 'lucide-react';

interface CartSummaryProps {
    cartItems: {
        id: number;
        name: string;
        price: number;
        quantity: number;
        image: string;
    }[];
}

export function CartSummary({ cartItems }: CartSummaryProps) {
    const [shippingMethod, setShippingMethod] = useState('standard');

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = shippingMethod === 'express' ? 29.99 : 9.99;
    const total = subtotal + shipping;

    return (
        <Card className='border-none shadow-lg'>
            <CardHeader className='px-6'>
                <CardTitle>Resumo do Pedido</CardTitle>
            </CardHeader>
            <CardContent className='px-6'>
                <div className='space-y-4'>
                    <div className='flex justify-between'>
                        <span className='text-muted-foreground'>Subtotal</span>
                        <span>R$ {subtotal.toFixed(2)}</span>
                    </div>

                    <div className='space-y-2'>
                        <span className='text-muted-foreground'>Frete</span>
                        <RadioGroup
                            defaultValue={shippingMethod}
                            onValueChange={setShippingMethod}
                            className='mt-2 space-y-2'>
                            <div className='flex items-center justify-between space-x-2'>
                                <div className='flex items-center space-x-2'>
                                    <RadioGroupItem value='standard' id='standard' />
                                    <Label htmlFor='standard' className='font-normal'>
                                        Padrão (3-5 dias)
                                    </Label>
                                </div>
                                <span>R$ 9,99</span>
                            </div>
                            <div className='flex items-center justify-between space-x-2'>
                                <div className='flex items-center space-x-2'>
                                    <RadioGroupItem value='express' id='express' />
                                    <Label htmlFor='express' className='font-normal'>
                                        Expresso (1-2 dias)
                                    </Label>
                                </div>
                                <span>R$ 29,99</span>
                            </div>
                        </RadioGroup>
                    </div>

                    <Separator />

                    <div className='flex justify-between font-medium'>
                        <span>Total</span>
                        <span className='text-lg'>R$ {total.toFixed(2)}</span>
                    </div>
                </div>
            </CardContent>
            <CardFooter className='px-6'>
                <Button className='w-full' size='lg' asChild>
                    <Link href='/checkout' className='flex items-center justify-center'>
                        Finalizar Compra
                        <ArrowRight className='ml-2 h-4 w-4' />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
