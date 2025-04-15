import produtosJson from '@/mocks/product.json';
import { ProductSchema } from '@/schemas/produto';
import { useCartStore } from '@/stores/cart-store';

export const dynamic = 'force-dynamic';

async function getProdutos() {
    const data = produtosJson;
    return data.produtos.map((p) => ProductSchema.parse(p));
}

export default async function ProdutosPage() {
    const produtos = await getProdutos();

    return (
        <div className='grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3'>
            {produtos.map((produto) => (
                <div key={produto.code} className='rounded border p-4 shadow'>
                    <h2 className='font-semibold'>{produto.description}</h2>
                    <p className='text-sm text-gray-500'>{produto.code}</p>
                    <p className='text-lg font-bold'>R$ {produto.total.toFixed(2)}</p>
                    <button
                        onClick={() => useCartStore.getState().addItem(produto)}
                        className='mt-2 rounded bg-blue-600 px-3 py-1 text-white'>
                        Adicionar
                    </button>
                </div>
            ))}
        </div>
    );
}
