import type { Metadata } from 'next';
import Link from 'next/link';

import { OrderSummary } from '@/components/checkout/order-summary';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

import { ArrowLeft, CheckCircle, Mail, Phone } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Pedido Confirmado | WappCart',
    description: 'Seu pedido foi recebido com sucesso. Um atendente entrará em contato em breve.'
};

export default function CheckoutSuccessPage() {
    // Simulando dados do pedido
    const orderItems = [
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

    const orderTotal = orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = 9.99;
    const total = orderTotal + shipping;
    const orderNumber = `WC${Math.floor(100000 + Math.random() * 900000)}`;

    return (
        <div className='container mx-auto max-w-5xl px-4 py-10'>
            <div className='mb-10 text-center'>
                <div className='mb-6 flex justify-center'>
                    <CheckCircle className='h-16 w-16 text-green-500' />
                </div>
                <h1 className='mb-2 text-3xl font-bold tracking-tight'>Pedido Confirmado!</h1>
                <p className='text-muted-foreground mx-auto max-w-2xl text-xl'>
                    Obrigado pela sua compra. Um de nossos atendentes entrará em contato em breve para finalizar seu
                    pedido.
                </p>
            </div>

            <div className='grid h-[550px] gap-8 md:grid-cols-7'>
                <div className='max-h-[500px] md:col-span-4'>
                    <Card className='border-none shadow-lg'>
                        <CardHeader className='px-6'>
                            <CardTitle>Resumo do Pedido</CardTitle>
                        </CardHeader>
                        <CardContent className='px-6'>
                            <div className='mb-4'>
                                <div className='mb-2 flex items-center justify-between'>
                                    <span className='font-medium'>Número do Pedido:</span>
                                    <span className='font-mono'>{orderNumber}</span>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <span className='font-medium'>Data:</span>
                                    <span>{new Date().toLocaleDateString()}</span>
                                </div>
                            </div>

                            <Separator className='my-4' />

                            <OrderSummary items={orderItems} shipping={shipping} total={total} />
                        </CardContent>
                    </Card>
                </div>

                <div className='max-h-[500px] md:col-span-3'>
                    <Card className='h-full border-none shadow-lg'>
                        <CardHeader className='px-6'>
                            <CardTitle>Próximos Passos</CardTitle>
                        </CardHeader>
                        <CardContent className='px-6'>
                            <div className='space-y-4'>
                                <p className='text-muted-foreground text-lg'>
                                    Um de nossos atendentes entrará em contato em até <strong>2 horas</strong> para
                                    confirmar os detalhes do seu pedido e finalizar o processo de pagamento.
                                </p>

                                <div className='rounded-lg bg-slate-50 p-4'>
                                    <h3 className='mb-2 font-medium'>Precisa de ajuda?</h3>
                                    <div className='space-y-2'>
                                        <div className='flex items-center'>
                                            <Phone className='text-primary mr-2 h-4 w-4' />
                                            <span className='text-sm'>(11) 9999-8888</span>
                                        </div>
                                        <div className='flex items-center'>
                                            <Mail className='text-primary mr-2 h-4 w-4' />
                                            <span className='text-sm'>pedidos@wappcart.com</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='border-primary border-l-4 py-2 pl-4'>
                                    <p className='text-sm italic'>
                                        "Agradecemos sua preferência! Estamos trabalhando para proporcionar a melhor
                                        experiência possível."
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div className='mt-6 w-full justify-center'>
                <Button variant='default' className='w-full' size='lg'>
                    <Link href='/' className='flex items-center'>
                        <ArrowLeft className='mr-2 h-4 w-4' />
                        Voltar para a Loja
                    </Link>
                </Button>
            </div>
        </div>
    );
}
