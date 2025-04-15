// Simulando dados do pedido
const orderItems = [
    {
        id: 1,
        name: 'Smartphone Premium XS',
        price: 1299.99,
        quantity: 1,
        image: '/placeholder.svg?height=100&width=100'
    },
    {
        id: 2,
        name: 'Fones de Ouvido Bluetooth',
        price: 149.99,
        quantity: 2,
        image: '/placeholder.svg?height=100&width=100'
    },
    {
        id: 3,
        name: 'Smartwatch Series 5',
        price: 299.99,
        quantity: 1,
        image: '/placeholder.svg?height=100&width=100'
    }
];

// Simulando dados do cliente
const customerInfo = {
    name: 'João Silva',
    email: 'joao.silva@email.com',
    phone: '(11) 98765-4321',
    cpf: '123.456.789-00',
    notes: 'Prefiro entrega no período da tarde.'
};

export { orderItems, customerInfo };
