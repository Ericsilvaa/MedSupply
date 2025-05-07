export const ROUTES = {
    HOME: '/',
    PRODUCTS: {
        ROOT: '/produtos',
        DETAIL: (code: string | number) => `/product/${code}`
    },
    CART: {
        ROOT: '/carrinho',
        RESUME: '/carrinho/resumo'
    },
    CHECKOUT: {
        ROOT: '/checkout',
        SUCCESS: '/checkout/sucess'
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
