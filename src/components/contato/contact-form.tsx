'use client';

import type React from 'react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

import { showToast } from '../common/toast/show-toast';
import { Send } from 'lucide-react';

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulando envio do formulário
        await new Promise((resolve) => setTimeout(resolve, 1500));

        showToast({
            message: 'Mensagem enviada com sucesso!',
            type: 'success',
            description: 'Obrigado por entrar em contato. Responderemos em breve.',
            action: {
                label: 'Fechar',
                onClick: () => {
                    // Ação ao clicar no botão "Fechar"
                    console.log('Toast fechado');
                }
            }
        });

        setIsSubmitting(false);
        e.currentTarget.reset();
    };

    return (
        <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='grid gap-6 md:grid-cols-2'>
                <div className='space-y-2'>
                    <Label htmlFor='name'>Nome completo</Label>
                    <Input id='name' placeholder='Seu nome' required />
                </div>
                <div className='space-y-2'>
                    <Label htmlFor='email'>Email</Label>
                    <Input id='email' type='email' placeholder='seu@email.com' required />
                </div>
            </div>

            <div className='grid gap-6 md:grid-cols-2'>
                <div className='space-y-2'>
                    <Label htmlFor='phone'>Telefone</Label>
                    <Input id='phone' placeholder='(00) 00000-0000' />
                </div>
                <div className='space-y-2'>
                    <Label htmlFor='subject'>Assunto</Label>
                    <Select defaultValue='support'>
                        <SelectTrigger id='subject'>
                            <SelectValue placeholder='Selecione um assunto' />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value='support'>Suporte</SelectItem>
                            <SelectItem value='sales'>Vendas</SelectItem>
                            <SelectItem value='billing'>Faturamento</SelectItem>
                            <SelectItem value='other'>Outro</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className='space-y-2'>
                <Label htmlFor='message'>Mensagem</Label>
                <Textarea id='message' placeholder='Digite sua mensagem aqui...' className='min-h-[150px]' required />
            </div>

            <Button type='submit' className='w-full' disabled={isSubmitting}>
                {isSubmitting ? (
                    'Enviando...'
                ) : (
                    <>
                        Enviar Mensagem
                        <Send className='ml-2 h-4 w-4' />
                    </>
                )}
            </Button>
        </form>
    );
}
