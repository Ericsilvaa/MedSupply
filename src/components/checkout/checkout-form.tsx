'use client';

import type React from 'react';
import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export function CheckoutForm() {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulando envio do formulário
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Redirecionar para a página de sucesso
        router.push('/checkout/sucesso');
    };

    return (
        <form id='checkout-form' onSubmit={handleSubmit} className='space-y-4'>
            <div className='grid gap-4 md:grid-cols-2'>
                <div className='space-y-2'>
                    <Label htmlFor='name'>Nome completo</Label>
                    <Input id='name' placeholder='Seu nome completo' required />
                </div>
                <div className='space-y-2'>
                    <Label htmlFor='email'>Email</Label>
                    <Input id='email' type='email' placeholder='seu@email.com' required />
                </div>
            </div>

            <div className='grid gap-4 md:grid-cols-2'>
                <div className='space-y-2'>
                    <Label htmlFor='phone'>Telefone</Label>
                    <Input id='phone' placeholder='(00) 00000-0000' required />
                </div>
                <div className='space-y-2'>
                    <Label htmlFor='cpf'>CPF</Label>
                    <Input id='cpf' placeholder='000.000.000-00' />
                </div>
            </div>

            <div className='space-y-2'>
                <Label htmlFor='notes'>Observações (opcional)</Label>
                <Textarea id='notes' placeholder='Informações adicionais sobre seu pedido' className='min-h-[100px]' />
            </div>
        </form>
    );
}
