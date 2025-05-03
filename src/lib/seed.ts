import { faker } from '@faker-js/faker';

export type Product = {
    id: number;
    code: string;
    name: string;
    image: string;
    price: number;
    category: string;
};

const categories = [
    'monitoramento',
    'emergencia',
    'medicacao',
    'respiratorio',
    'mobiliario',
    'cirurgia',
    'esterilizacao',
    'diagnostico'
];

const hospitalImages = [
    // Monitor Multiparamétrico
    'https://images.pexels.com/photos/13697729/pexels-photo-13697729.jpeg',

    // Desfibrilador Cardíaco
    'https://images.pexels.com/photos/13697732/pexels-photo-13697732.jpeg',

    // Bomba de Infusão
    'https://images.pexels.com/photos/16571733/pexels-photo-16571733.jpeg',

    // Ventilador Pulmonar
    'https://images.pexels.com/photos/13697729/pexels-photo-13697729.jpeg',

    // Cama Hospitalar Elétrica
    'https://images.pexels.com/photos/13697732/pexels-photo-13697732.jpeg',

    // Eletrocardiógrafo Digital
    'https://images.pexels.com/photos/13697729/pexels-photo-13697729.jpeg',

    // Foco Cirúrgico LED
    'https://images.pexels.com/photos/13697732/pexels-photo-13697732.jpeg',

    // Autoclave Hospitalar
    'https://images.pexels.com/photos/16571733/pexels-photo-16571733.jpeg',

    // Oxímetro de Pulso
    'https://images.pexels.com/photos/13697729/pexels-photo-13697729.jpeg',

    // Mesa Cirúrgica Elétrica
    'https://images.pexels.com/photos/13697732/pexels-photo-13697732.jpeg',

    // Carrinho de Emergência
    'https://images.pexels.com/photos/16571733/pexels-photo-16571733.jpeg',

    // Negatoscópio LED
    'https://images.pexels.com/photos/13697729/pexels-photo-13697729.jpeg'
];

export function generateSeedProducts(count = 12) {
    return Array.from({ length: count }, (_, i) => ({
        id: i + 1,
        code: faker.string.numeric(4),
        name: faker.commerce.productName(),
        image: hospitalImages[i % hospitalImages.length],
        price: Number(faker.commerce.price({ min: 1000, max: 50000 })),
        category: faker.helpers.arrayElement(categories),
        quantity: faker.number.int({ min: 1, max: 10 })
    }));
}
