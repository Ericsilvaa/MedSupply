// app/(institutional)/contato/page.tsx
import type { Metadata } from 'next';

import { ContactForm } from '@/components/contato/contact-form';
import { ContactMap } from '@/components/contato/contact-map';
import { SocialLinks } from '@/components/contato/social-links';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { Clock, Mail, MapPin, Phone } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Contato | WappCart',
    description: 'Entre em contato conosco para dúvidas, sugestões ou suporte.'
};

// 🔁 Dados de contato (manutenção fácil)
const CONTACT_INFO = [
    {
        icon: Mail,
        title: 'Email',
        content: 'contato@wappcart.com'
    },
    {
        icon: Phone,
        title: 'Telefone',
        content: '(11) 9999-8888'
    },
    {
        icon: MapPin,
        title: 'Endereço',
        content: (
            <>
                Av. Paulista, 1000 - Bela Vista <br />
                São Paulo - SP, 01310-100
            </>
        )
    },
    {
        icon: Clock,
        title: 'Horário de Atendimento',
        content: (
            <>
                Segunda a Sexta: 9h às 18h <br />
                Sábado: 9h às 13h
            </>
        )
    }
];

export default function ContactPage() {
    return (
        <div className='container mx-auto max-w-screen-xl space-y-12 px-4 py-12'>
            {/* Cabeçalho da página */}
            <div className='space-y-4 text-center'>
                <h1 className='text-3xl font-bold tracking-tight md:text-4xl'>Entre em Contato</h1>
                <p className='text-muted-foreground mx-auto max-w-2xl text-lg'>
                    Estamos aqui para ajudar. Preencha o formulário ou fale conosco por outros canais.
                </p>
            </div>

            {/* Grid principal */}
            <div className='grid gap-10 lg:grid-cols-3'>
                {/* Formulário */}
                <div className='lg:col-span-2'>
                    <Card className='border-none shadow-lg'>
                        <CardHeader>
                            <CardTitle>Envie-nos uma mensagem</CardTitle>
                            <CardDescription>
                                Responderemos assim que possível. Geralmente dentro de 1 dia útil.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ContactForm />
                        </CardContent>
                    </Card>
                </div>

                {/* Informações de contato */}
                <div className='space-y-6'>
                    <Card className='border-none shadow-lg'>
                        <CardHeader>
                            <CardTitle>Informações</CardTitle>
                            <CardDescription>Canais disponíveis para atendimento</CardDescription>
                        </CardHeader>
                        <CardContent className='space-y-5'>
                            {CONTACT_INFO.map(({ icon: Icon, title, content }) => (
                                <div key={title} className='flex items-start gap-3'>
                                    <Icon className='text-primary mt-1 h-5 w-5' />
                                    <div>
                                        <h3 className='text-sm font-semibold'>{title}</h3>
                                        <p className='text-muted-foreground text-sm'>{content}</p>
                                    </div>
                                </div>
                            ))}

                            <div className='mt-6 space-y-2'>
                                <h3 className='text-sm font-semibold'>Redes Sociais</h3>
                                <SocialLinks />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Mapa */}
                    <Card className='overflow-hidden border-none shadow-lg'>
                        <CardHeader>
                            <CardTitle>Nossa Localização</CardTitle>
                        </CardHeader>
                        <CardContent className='p-0'>
                            <ContactMap />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
