import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { StatCard } from '@/components/sobre/stat-card';
import { TeamMember } from '@/components/sobre/team-member';
import { ValueCard } from '@/components/sobre/value-card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Sobre | WappCart',
    description: 'Conheça nossa história, missão e os valores que nos guiam.'
};

export default function AboutPage() {
    return (
        <div className='container mx-auto max-w-5xl px-4 py-16'>
            {/* Hero Section */}
            <section className='mb-20 text-center'>
                <h1 className='text-4xl font-bold tracking-tight md:text-5xl'>Nossa História</h1>
                <p className='text-muted-foreground mx-auto mt-6 max-w-3xl text-xl'>
                    Transformando o comércio digital desde 2018.
                </p>
            </section>

            {/* Story Section */}
            <section className='mb-20 grid items-center gap-12 md:grid-cols-2'>
                <div>
                    <h2 className='mb-4 text-2xl font-semibold'>Quem Somos</h2>
                    <p className='text-muted-foreground mb-4'>
                        A WappCart nasceu da visão de simplificar o comércio digital para todos. Fundada em 2018 por um
                        grupo de empreendedores apaixonados por tecnologia, nossa plataforma evoluiu de uma simples
                        ideia para uma solução completa que atende milhares de clientes.
                    </p>
                    <p className='text-muted-foreground'>
                        Hoje, continuamos com o mesmo propósito: criar ferramentas intuitivas que permitem que qualquer
                        pessoa possa vender online, sem barreiras técnicas ou financeiras.
                    </p>
                </div>
                <div className='relative h-[300px] overflow-hidden rounded-lg'>
                    <Image
                        src='/placeholder.svg?height=600&width=800'
                        alt='Equipe WappCart'
                        fill
                        className='object-cover'
                    />
                </div>
            </section>

            {/* Values Section */}
            <section className='mb-20'>
                <h2 className='mb-8 text-center text-2xl font-semibold'>Nossos Valores</h2>
                <div className='grid gap-6 md:grid-cols-3'>
                    <ValueCard
                        title='Simplicidade'
                        description='Acreditamos que a tecnologia deve ser acessível. Criamos soluções intuitivas que qualquer pessoa pode usar.'
                    />
                    <ValueCard
                        title='Inovação'
                        description='Estamos sempre à frente, incorporando as mais recentes tecnologias para oferecer a melhor experiência.'
                    />
                    <ValueCard
                        title='Confiança'
                        description='Construímos relacionamentos duradouros baseados em transparência e resultados consistentes.'
                    />
                </div>
            </section>

            {/* Stats Section */}
            <section className='mb-20 rounded-lg bg-slate-50 py-12'>
                <div className='mb-10 text-center'>
                    <h2 className='mb-2 text-2xl font-semibold'>WappCart em Números</h2>
                    <p className='text-muted-foreground'>O impacto que estamos criando juntos</p>
                </div>
                <div className='grid grid-cols-2 gap-6 md:grid-cols-4'>
                    <StatCard value='5+' label='Anos no mercado' />
                    <StatCard value='10k+' label='Clientes ativos' />
                    <StatCard value='99.9%' label='Uptime' />
                    <StatCard value='24/7' label='Suporte' />
                </div>
            </section>

            {/* Team Section */}
            <section className='mb-20'>
                <h2 className='mb-8 text-center text-2xl font-semibold'>Equipe Principal</h2>
                <div className='grid gap-8 md:grid-cols-3'>
                    <TeamMember name='Ana Silva' role='CEO & Fundadora' image='/placeholder.svg?height=400&width=400' />
                    <TeamMember name='Carlos Mendes' role='CTO' image='/placeholder.svg?height=400&width=400' />
                    <TeamMember
                        name='Juliana Costa'
                        role='Head de Design'
                        image='/placeholder.svg?height=400&width=400'
                    />
                </div>
            </section>

            {/* CTA Section */}
            <section className='text-center'>
                <Separator className='mb-12' />
                <h2 className='mb-4 text-2xl font-semibold'>Pronto para começar?</h2>
                <p className='text-muted-foreground mx-auto mb-6 max-w-xl'>
                    Junte-se a milhares de empresas que confiam na WappCart para impulsionar seus negócios online.
                </p>
                <Button asChild size='lg'>
                    <Link href='/contato' className='flex items-center'>
                        Fale Conosco
                        <ArrowRight className='ml-2 h-4 w-4' />
                    </Link>
                </Button>
            </section>
        </div>
    );
}
