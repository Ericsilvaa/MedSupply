import { notFound } from 'next/navigation';

import { Badge } from '@/components/ui/badge';

type ProductPageProps = {
    params: { id: string };
};

const products = [
    {
        codigo: '0001',
        descricao: 'Monitor Multiparamétrico',
        unidade: 'UN',
        quantidade: 1,
        precoUnitario: 12500,
        total: 12500
    },
    {
        codigo: '0002',
        descricao: 'Desfibrilador Cardíaco',
        unidade: 'UN',
        quantidade: 1,
        precoUnitario: 18750,
        total: 18750
    },
    {
        codigo: '0003',
        descricao: 'Bomba de Infusão',
        unidade: 'UN',
        quantidade: 1,
        precoUnitario: 5200,
        total: 5200
    },
    {
        codigo: '0004',
        descricao: 'Ventilador Pulmonar',
        unidade: 'UN',
        quantidade: 1,
        precoUnitario: 32000,
        total: 32000
    },
    {
        codigo: '0005',
        descricao: 'Cama Hospitalar Elétrica',
        unidade: 'UN',
        quantidade: 1,
        precoUnitario: 8900,
        total: 8900
    },
    {
        codigo: '0006',
        descricao: 'Eletrocardiógrafo Digital',
        unidade: 'UN',
        quantidade: 1,
        precoUnitario: 6750,
        total: 6750
    },
    {
        codigo: '0007',
        descricao: 'Foco Cirúrgico LED',
        unidade: 'UN',
        quantidade: 1,
        precoUnitario: 15300,
        total: 15300
    },
    {
        codigo: '0008',
        descricao: 'Autoclave Hospitalar',
        unidade: 'UN',
        quantidade: 1,
        precoUnitario: 22800,
        total: 22800
    },
    {
        codigo: '0009',
        descricao: 'Oxímetro de Pulso',
        unidade: 'UN',
        quantidade: 1,
        precoUnitario: 1200,
        total: 1200
    },
    {
        codigo: '0010',
        descricao: 'Mesa Cirúrgica Elétrica',
        unidade: 'UN',
        quantidade: 1,
        precoUnitario: 45000,
        total: 45000
    },
    {
        codigo: '0011',
        descricao: 'Carrinho de Emergência',
        unidade: 'UN',
        quantidade: 1,
        precoUnitario: 7800,
        total: 7800
    },
    {
        codigo: '0012',
        descricao: 'Negatoscópio LED',
        unidade: 'UN',
        quantidade: 1,
        precoUnitario: 2500,
        total: 2500
    }
] as const;

export default function ProductPage({ params }: ProductPageProps) {
    console.log('🚀 ~ ProductPage ~ params:', params.id);

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
