// constants/routes.ts
export const ROUTES = {
    HOME: '/',
    PRODUCTS: {
        ROOT: '/produtos',
        DETAIL: (id: string | number) => `/produtos/${id}`
    },
    CATEGORIES: '/categorias',
    PROMOTIONS: '/promocoes',
    ABOUT: '/sobre',
    CONTACT: '/contato',
    FAQ: '/faq',
    TERMS: '/termos',
    PRIVACY: '/privacidade'
} as const;
