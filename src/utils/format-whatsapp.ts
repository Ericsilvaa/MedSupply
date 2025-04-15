import { CartItem } from '@/stores/cart-store';

export function generateWhatsAppMessage(items: CartItem[]) {
    let texto = '*Resumo do Orçamento UNINTA:*\n\n';
    let total = 0;

    for (const item of items) {
        const subtotal = item.total * item.quantidadeCarrinho;
        total += subtotal;
        texto += `• ${item.descricao} (${item.quantidadeCarrinho}x) - R$ ${subtotal.toFixed(2)}\n`;
    }

    texto += `\n*Total:* R$ ${total.toFixed(2)}`;
    return encodeURIComponent(texto);
}

export function generateWhatsAppLink(items: CartItem[]) {
    const msg = generateWhatsAppMessage(items);
    return `https://wa.me/558534551200?text=${msg}`;
}
