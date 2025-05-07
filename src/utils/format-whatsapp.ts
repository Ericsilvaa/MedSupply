import { agents } from '@/constants/agents';
import { CartItem } from '@/stores/cart-store';
import { AgentType } from '@/types/agents';

function selectAgent(agents: AgentType[]): AgentType {
    if (agents.length === 0) {
        throw new Error('Nenhum agente disponível');
    }

    const minSales = Math.min(...agents.map((a) => a.salesCount));
    const leastBusyAgents = agents.filter((a) => a.salesCount === minSales);

    // Em caso de empate, sorteia entre os menos ocupados
    const index = Math.floor(Math.random() * leastBusyAgents.length);
    return leastBusyAgents[index];
}

export function generateWhatsAppMessage(items: CartItem[]) {
    let texto = '*Resumo do Orçamento UNINTA:*\n\n';
    let total = 0;

    for (const item of items) {
        const subtotal = item.total * item.cartQuantity;
        total += subtotal;
        texto += `• ${item.description} (${item.cartQuantity}x) - R$ ${subtotal.toFixed(2)}\n`;
    }

    texto += `\n*Total:* R$ ${total.toFixed(2)}`;
    return encodeURIComponent(texto);
}

export function generateWhatsAppLink(items: CartItem[]) {
    const agent = selectAgent(agents);
    const msg = generateWhatsAppMessage(items);
    return `https://wa.me/${agent.phone}?text=${msg}`;
}
