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
    items: [],

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
