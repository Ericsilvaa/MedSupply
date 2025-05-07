import { ProductFormType } from '@/schemas/produto';
import { Product } from '@/types/product';

import { create } from 'zustand';

export type CartItem = ProductFormType & {
    cartQuantity: number;
};

type CartState = {
    items: CartItem[];
};

type CartActions = {
    addItem: (product: ProductFormType) => void;
    removeItem: (code: string) => void;
    clear: () => void;
};

type CartStore = CartState & CartActions;

export const useCartStore = create<CartStore>((set) => ({
    items: [
        {
            code: 'CD-001',
            name: 'Cadeira Odontológica Elétrica',
            unit: 'unidade',
            description: 'Cadeira reclinável com apoio de cabeça, acionamento elétrico e base estável.',
            quantity: 1,
            unitPrice: 9500.0,
            total: 9500.0,
            cartQuantity: 1
        },
        {
            code: 'CD-002',
            name: 'Compressor Odontológico Isento de Óleo',
            unit: 'unidade',
            description: 'Compressor silencioso, ideal para consultórios odontológicos.',
            quantity: 1,
            unitPrice: 4500.0,
            total: 4500.0,
            cartQuantity: 2
        },
        {
            code: 'CD-003',
            name: 'Autoclave 21 Litros',
            unit: 'unidade',
            description: 'Esterilizador de instrumentos com capacidade para 21 litros.',
            quantity: 1,
            unitPrice: 3800.0,
            total: 3800.0,
            cartQuantity: 1
        },
        {
            code: 'CD-004',
            name: 'Kit de Canetas Odontológicas (Alta e Baixa Rotação)',
            unit: 'kit',
            description: 'Kit com caneta de alta e baixa rotação com acoplamento padrão.',
            quantity: 1,
            unitPrice: 1500.0,
            total: 1500.0,
            cartQuantity: 3
        },
        {
            code: 'CD-005',
            name: 'Sensor Radiográfico Intraoral Digital',
            unit: 'unidade',
            description: 'Sensor digital para radiografias intraorais de alta precisão.',
            quantity: 1,
            unitPrice: 5200.0,
            total: 5200.0,
            cartQuantity: 1
        }
    ],

    addItem: (product) =>
        set((state) => {
            const exists = state.items.find((item) => item.code === product.code);

            if (exists) {
                return {
                    items: state.items.map((item) =>
                        item.code === product.code ? { ...item, cartQuantity: item.cartQuantity + 1 } : item
                    )
                };
            }

            return {
                items: [...state.items, { ...product, cartQuantity: 1 }]
            };
        }),

    removeItem: (code) =>
        set((state) => ({
            items: state.items.filter((item) => item.code !== code)
        })),

    clear: () => set({ items: [] })
}));
