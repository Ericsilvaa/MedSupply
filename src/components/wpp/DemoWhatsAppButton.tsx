import { Button } from '@/components/ui/button';

export function DemoWhatsAppButton() {
    const phone = '5511999999999'; // Coloque aqui o número do vendedor (com DDI e DDD)
    const message = `
Olá! Sou profissional da área da saúde e gostaria de conhecer melhor o sistema de orçamentos para materiais hospitalares e odontológicos.
`;

    const handleClick = () => {
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message.trim())}`;
        window.open(url, '_blank');
    };

    return (
        <Button size='lg' variant='outline' onClick={handleClick}>
            Solicitar Demonstração
        </Button>
    );
}
