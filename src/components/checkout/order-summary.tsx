import Image from 'next/image';

interface OrderItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

interface OrderSummaryProps {
    items: OrderItem[];
    shipping: number;
    total: number;
}

export function OrderSummary({ items, shipping, total }: OrderSummaryProps) {
    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className='space-y-4'>
            <div className='max-h-[300px] space-y-3 overflow-y-auto pr-2'>
                {items.map((item) => (
                    <div key={item.id} className='flex items-start space-x-3'>
                        <div className='relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md bg-gray-100'>
                            <Image
                                src={item.image || '/placeholder.svg'}
                                alt={item.name}
                                fill
                                className='object-cover'
                            />
                        </div>
                        <div className='min-w-0 flex-1'>
                            <h3 className='truncate text-sm font-medium'>{item.name}</h3>
                            <p className='text-muted-foreground text-xs'>
                                Quantidade: {item.quantity} x R$ {item.price.toFixed(2)}
                            </p>
                        </div>
                        <div className='text-sm font-medium'>R$ {(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                ))}
            </div>

            <div className='space-y-2 pt-4'>
                <div className='flex justify-between text-sm'>
                    <span className='text-muted-foreground'>Subtotal</span>
                    <span>R$ {subtotal.toFixed(2)}</span>
                </div>
                <div className='flex justify-between text-sm'>
                    <span className='text-muted-foreground'>Frete</span>
                    <span>R$ {shipping.toFixed(2)}</span>
                </div>
                <div className='flex justify-between border-t pt-2 font-medium'>
                    <span>Total</span>
                    <span>R$ {total.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
}
