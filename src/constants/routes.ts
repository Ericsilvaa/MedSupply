export const ROUTES = {
    HOME: '/',
    PRODUCTS: {
        ROOT: '/produtos',
        DETAIL: (code: string | number) => `/products/${code}`
    },
    CHECKOUT: {
        CART: '/carrinho',
        ROOT: '/checkout',
        RESUME: '/carrinho/resumo',
        SUCCESS: '/carrinho/resumo/sucesso'
    },
    CATEGORIES: '/categorias',
    PROMOTIONS: '/promocoes',

    COMPANY: {
        ABOUT: '/sobre',
        CONTACT: '/contato',
        FAQ: '/faq',
        TERMS: '/terms',
        PRIVACY: '/privacy'
    }
} as const;
