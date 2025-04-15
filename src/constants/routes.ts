// constants/routes.ts
export const ROUTES = {
    HOME: '/',
    PRODUCTS: {
        ROOT: '/produtos',
        DETAIL: (id: string | number) => `/produtos/${id}`
    },
    CART: '/carrinho',
    CHECKOUT: {
        ROOT: '/checkout',
        CONFIRMATION: '/checkout/resumo',
        SUCCESS: '/checkout/sucesso'
    },
    CATEGORIES: '/categorias',
    PROMOTIONS: '/promocoes',
    ABOUT: '/sobre',
    CONTACT: '/contato',
    FAQ: '/faq',
    TERMS: '/termos',
    PRIVACY: '/privacidade'
} as const;
