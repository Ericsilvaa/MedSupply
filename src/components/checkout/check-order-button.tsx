'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { useCartStore } from '@/stores/cart-store';
import { generateWhatsAppLink } from '@/utils/format-whatsapp';

import { ArrowRight } from 'lucide-react';

export function CheckOrderButton() {
    const router = useRouter();
    const items = useCartStore((state) => state.items);

    const handleClick = () => {
        const link = generateWhatsAppLink(items);

        // Abre WhatsApp em nova aba
        window.open(link, '_blank');

        // Redireciona para a página de sucesso
        router.push('/checkout/sucesso');
    };

    return (
        <Button className='w-full' size='lg' onClick={handleClick}>
            <span className='flex items-center justify-center'>
                Finalizar Pedido
                <ArrowRight className='ml-2 h-4 w-4' />
            </span>
        </Button>
    );
}
