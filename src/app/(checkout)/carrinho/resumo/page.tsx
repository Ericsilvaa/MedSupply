'use client';

import type { Metadata } from 'next';
import Link from 'next/link';

import { CheckOrderButton } from '@/components/checkout/check-order-button';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { customerInfo } from '@/mocks/checkout-order';
import { useCartStore } from '@/stores/cart-store';

import { ArrowRight, ChevronLeft, ClipboardList, CreditCard, MapPin, User } from 'lucide-react';

export default function CheckoutReviewPage() {
    const items = useCartStore((state) => state.items);
    if (items.length === 0) return <p className='p-4'>Carrinho vazio.</p>;

    const subtotal = items.reduce((acc, item) => acc + item.total * item.cartQuantity, 0);

    const shipping = 9.99;
    const total = subtotal + shipping;

    return (
        <div className='container mx-auto max-w-7xl px-4 py-10'>
            <div className='mb-8'>
                <h1 className='mb-2 text-3xl font-bold tracking-tight'>Resumo do Pedido</h1>
                <p className='text-muted-foreground'>Revise os detalhes do seu pedido antes de confirmar.</p>
            </div>

            <div className='grid gap-8 md:grid-cols-3'>
                <div className='space-y-6 md:col-span-2'>
                    <Card className='border-none shadow-lg'>
                        <CardHeader className='flex flex-row items-center px-6'>
                            <ClipboardList className='text-primary mr-2 h-5 w-5' />
                            <CardTitle>Itens do Pedido</CardTitle>
                        </CardHeader>
                        <CardContent className='px-6'>
                            <div className='space-y-4'>
                                {items.map((item) => (
                                    <div
                                        key={item.code}
                                        className='flex items-center justify-between border-b py-2 last:border-0'>
                                        <div className='flex-1'>
                                            <p className='font-medium'>{item.name}</p>
                                            <p className='text-muted-foreground text-sm'>
                                                Quantidade: {item.quantity} x R$ {item.unitPrice.toFixed(2)}
                                            </p>
                                        </div>
                                        <p className='font-medium'>R$ {(item.unitPrice * item.quantity).toFixed(2)}</p>
                                    </div>
                                ))}
                            </div>

                            <div className='mt-4 space-y-2 border-t pt-4'>
                                <div className='flex justify-between text-sm'>
                                    <span className='text-muted-foreground'>Subtotal</span>
                                    <span>R$ {subtotal.toFixed(2)}</span>
                                </div>
                                <div className='flex justify-between text-sm'>
                                    <span className='text-muted-foreground'>Frete</span>
                                    <span>R$ {shipping.toFixed(2)}</span>
                                </div>
                                <div className='flex justify-between border-t pt-2 font-medium'>
                                    <span>Total</span>
                                    <span className='text-lg'>R$ {total.toFixed(2)}</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className='border-none shadow-lg'>
                        <CardHeader className='flex flex-row items-center px-6'>
                            <User className='text-primary mr-2 h-5 w-5' />
                            <CardTitle>Informações Pessoais</CardTitle>
                        </CardHeader>
                        <CardContent className='px-6'>
                            <div className='grid grid-cols-2 gap-4'>
                                <div>
                                    <p className='text-muted-foreground text-sm'>Nome completo</p>
                                    <p className='font-medium'>{customerInfo.name}</p>
                                </div>
                                <div>
                                    <p className='text-muted-foreground text-sm'>Email</p>
                                    <p className='font-medium'>{customerInfo.email}</p>
                                </div>
                                <div>
                                    <p className='text-muted-foreground text-sm'>Telefone</p>
                                    <p className='font-medium'>{customerInfo.phone}</p>
                                </div>
                                <div>
                                    <p className='text-muted-foreground text-sm'>CPF</p>
                                    <p className='font-medium'>{customerInfo.cpf}</p>
                                </div>
                            </div>

                            {customerInfo.notes && (
                                <div className='mt-4 border-t pt-4'>
                                    <p className='text-muted-foreground text-sm'>Observações</p>
                                    <p>{customerInfo.notes}</p>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    {/* <Card className='border-none shadow-lg'>
                        <CardHeader className='flex flex-row items-center px-6'>
                            <MapPin className='text-primary mr-2 h-5 w-5' />
                            <CardTitle>Endereço de Entrega</CardTitle>
                        </CardHeader>
                        <CardContent className='px-6'>
                            <p className='text-muted-foreground'>
                                O endereço de entrega será coletado pelo atendente durante o contato.
                            </p>
                        </CardContent>
                    </Card> */}

                    {/* <Card className='border-none shadow-lg'>
                        <CardHeader className='flex flex-row items-center px-6'>
                            <CreditCard className='text-primary mr-2 h-5 w-5' />
                            <CardTitle>Método de Pagamento</CardTitle>
                        </CardHeader>
                        <CardContent className='px-6'>
                            <p className='text-muted-foreground'>
                                As opções de pagamento serão apresentadas pelo atendente durante o contato.
                            </p>
                        </CardContent>
                    </Card> */}

                    <div className='flex justify-between'>
                        <Button variant='outline' asChild>
                            <Link href='/checkout' className='flex items-center'>
                                <ChevronLeft className='mr-2 h-4 w-4' />
                                Voltar ao Checkout
                            </Link>
                        </Button>
                    </div>
                </div>

                <div>
                    <Card className='sticky top-6 border-none shadow-lg'>
                        <CardHeader className='px-6'>
                            <CardTitle>Confirmar Pedido</CardTitle>
                        </CardHeader>
                        <CardContent className='px-6'>
                            <div className='space-y-4'>
                                <p className='text-muted-foreground text-sm'>
                                    Ao confirmar seu pedido, um atendente entrará em contato para finalizar os detalhes
                                    e o pagamento.
                                </p>

                                <div className='rounded-lg bg-slate-50 p-4'>
                                    <h3 className='mb-2 font-medium'>Resumo</h3>
                                    <div className='space-y-2'>
                                        <div className='flex justify-between text-sm'>
                                            <span className='text-muted-foreground'>Itens</span>
                                            <span>{items.length}</span>
                                        </div>
                                        <div className='flex justify-between text-sm'>
                                            <span className='text-muted-foreground'>Subtotal</span>
                                            <span>R$ {subtotal.toFixed(2)}</span>
                                        </div>
                                        <div className='flex justify-between text-sm'>
                                            <span className='text-muted-foreground'>Frete</span>
                                            <span>R$ {shipping.toFixed(2)}</span>
                                        </div>
                                        <Separator className='my-2' />
                                        <div className='flex justify-between font-medium'>
                                            <span>Total</span>
                                            <span>R$ {total.toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* <Button className='w-full' size='lg' onClick={handleClick}>
                                    <span className='flex items-center justify-center'>
                                        Finalizar Pedido
                                        <ArrowRight className='ml-2 h-4 w-4' />
                                    </span>
                                </Button> */}

                                <CheckOrderButton />

                                <p className='text-muted-foreground text-center text-xs'>
                                    Ao confirmar, você concorda com nossos termos de serviço e política de privacidade.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
