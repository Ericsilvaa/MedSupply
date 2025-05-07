import { notFound } from 'next/navigation';

import { Badge } from '@/components/ui/badge';

type ProductPageProps = {
    params: { id: string };
};

export default function ProductPage({ params }: ProductPageProps) {
    const products: any[] = [];
    const product = products.find((p) => p.codigo === params.id);

    if (!product) return notFound();

    return (
        <div className='mx-auto mt-10 max-w-4xl p-6'>
            <h1 className='mb-4 text-2xl font-semibold'>{product.descricao}</h1>

            <div className='rounded-2xl border bg-white p-6 shadow-sm dark:bg-neutral-900'>
                <div className='flex flex-col gap-3'>
                    <div className='text-sm text-neutral-500'>
                        <Badge variant='outline'>Código: {product.codigo}</Badge>
                    </div>

                    <div className='flex items-baseline justify-between'>
                        <p className='text-xl font-medium'>Preço Unitário:</p>
                        <span className='text-2xl font-bold text-green-600 dark:text-green-400'>
                            R${' '}
                            {product.precoUnitario.toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: 'BRL',
                                minimumFractionDigits: 2
                            })}
                        </span>
                    </div>

                    <div className='mt-4 flex items-baseline justify-between border-t pt-4'>
                        <p className='text-lg text-neutral-600 dark:text-neutral-300'>Unidade:</p>
                        <span className='font-semibold'>{product.unidade}</span>
                    </div>

                    <div className='flex items-baseline justify-between'>
                        <p className='text-lg text-neutral-600 dark:text-neutral-300'>Quantidade:</p>
                        <span>{product.quantidade}</span>
                    </div>

                    <div className='mt-4 flex items-baseline justify-between border-t pt-4 font-semibold'>
                        <p>Total:</p>
                        <span>
                            R${' '}
                            {product.total.toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: 'BRL',
                                minimumFractionDigits: 2
                            })}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
