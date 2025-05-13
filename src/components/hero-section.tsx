import { Button } from '@/components/ui/button';

export default function HeroSection() {
    const sendMessage = () => {
        const phone = '5585981553507';
        const message = `
  Olá! Sou profissional da área da saúde e gostaria de conhecer melhor o sistema de orçamentos para materiais hospitalares e odontológicos.
    `;

        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message.trim())}`;
        window.open(url, '_blank');
    };

    return (
        <section className='bg-muted/40 w-full py-12 md:py-24 lg:py-32'>
            <div className='container px-4 md:px-6'>
                <div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
                    <div className='flex flex-col justify-center space-y-4'>
                        <div className='space-y-2'>
                            <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                                Monte seu orçamento de forma rápida e fácil
                            </h1>
                            <p className='text-muted-foreground max-w-[600px] md:text-xl'>
                                Selecione os produtos hospitalares que você precisa e receba um orçamento personalizado
                                em instantes.
                            </p>
                        </div>
                        <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                            {/* <Button size="lg">Explorar Produtos</Button> */}
                            <Button size='lg' variant='outline' onClick={sendMessage}>
                                Solicitar Demonstração
                            </Button>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]'>
                            <div className='absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 opacity-20 blur-3xl'></div>
                            <div className='bg-muted/80 relative flex h-full w-full items-center justify-center rounded-lg'>
                                <span className='text-muted-foreground text-2xl font-medium'>Equipamentos Médicos</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
