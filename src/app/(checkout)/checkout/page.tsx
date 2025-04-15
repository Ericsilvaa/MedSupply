import type { Metadata } from 'next';
import Link from 'next/link';

import { CheckoutForm } from '@/components/checkout/checkout-form';
import { OrderSummary } from '@/components/checkout/order-summary';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ROUTES } from '@/constants/routes';

import { ChevronLeft, CreditCard, Truck, User } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Checkout | WappCart',
    description: 'Finalize seu pedido e informe seus dados para contato.'
};
export default function CheckoutPage() {
    // Simulando dados do carrinho
    const cartItems = [
        {
            id: 1,
            name: 'Smartphone Premium XS',
            price: 1299.99,
            quantity: 1,
            image: '/placeholder.svg?height=100&width=100'
        },
        {
            id: 2,
            name: 'Fones de Ouvido Bluetooth',
            price: 149.99,
            quantity: 2,
            image: '/placeholder.svg?height=100&width=100'
        },
        {
            id: 3,
            name: 'Smartwatch Series 5',
            price: 299.99,
            quantity: 1,
            image: '/placeholder.svg?height=100&width=100'
        }
    ];
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = 9.99;
    const total = subtotal + shipping;
    return (
        <div className='container mx-auto max-w-7xl px-4 py-10'>
            <div className='mb-8'>
                <h1 className='mb-2 text-3xl font-bold tracking-tight'>Finalizar Pedido</h1>
                <p className='text-muted-foreground'>
                    Complete suas informações para que um atendente entre em contato.
                </p>
            </div>
            <div className='grid gap-8 md:grid-cols-3'>
                <div className='space-y-6 md:col-span-2'>
                    <Card className='border-none shadow-lg'>
                        <CardHeader className='flex flex-row items-center px-6'>
                            <User className='text-primary mr-2 h-5 w-5' />
                            <CardTitle>Informações Pessoais</CardTitle>
                        </CardHeader>
                        <CardContent className='px-6'>
                            <CheckoutForm />
                        </CardContent>
                    </Card>
                    <Card className='border-none shadow-lg'>
                        <CardHeader className='flex flex-row items-center px-6'>
                            <Truck className='text-primary mr-2 h-5 w-5' />
                            <CardTitle>Endereço de Entrega</CardTitle>
                        </CardHeader>
                        <CardContent className='px-6'>
                            <p className='text-muted-foreground mb-4 text-sm'>
                                Informe o endereço onde deseja receber seus produtos.
                            </p>
                            {/* Componente de endereço seria adicionado aqui */}
                            <div className='py-4 text-center'>
                                <p className='text-muted-foreground'>
                                    O endereço será coletado pelo atendente durante o contato.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className='border-none shadow-lg'>
                        <CardHeader className='flex flex-row items-center px-6'>
                            <CreditCard className='text-primary mr-2 h-5 w-5' />
                            <CardTitle>Método de Pagamento</CardTitle>
                        </CardHeader>
                        <CardContent className='px-6'>
                            <p className='text-muted-foreground mb-4 text-sm'>
                                Escolha como deseja pagar pelo seu pedido.
                            </p>
                            {/* Componente de pagamento seria adicionado aqui */}
                            <div className='py-4 text-center'>
                                <p className='text-muted-foreground'>
                                    As opções de pagamento serão apresentadas pelo atendente durante o contato.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                    <div className='flex justify-between'>
                        <Button variant='outline' asChild>
                            <Link href='/carrinho' className='flex items-center'>
                                <ChevronLeft className='mr-2 h-4 w-4' />
                                Voltar ao Carrinho
                            </Link>
                        </Button>
                    </div>
                </div>
                <div>
                    <Card className='sticky top-6 border-none shadow-lg'>
                        <CardHeader className='px-6'>
                            <CardTitle>Resumo do Pedido</CardTitle>
                        </CardHeader>
                        <CardContent className='px-6'>
                            <OrderSummary items={cartItems} shipping={shipping} total={total} />
                            <Separator className='my-6' />
                            <Link href={ROUTES.CHECKOUT.RESUME}>
                                <Button className='w-full' size='lg' type='submit' form='checkout-form'>
                                    Confirmar Pedido
                                </Button>
                            </Link>

                            <p className='text-muted-foreground mt-4 text-center text-xs'>
                                Ao confirmar, você concorda com nossos termos de serviço e política de privacidade.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
