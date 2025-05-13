import { products_data } from '@/db/product-data';

import ProductCard from '../product-card';

interface RelatedProductsProps {
    currentProductId: number;
    category: string;
    onAddToCart: (product: any) => void;
}

export default function RelatedProducts({ currentProductId, category, onAddToCart }: RelatedProductsProps) {
    // Filtrar produtos da mesma categoria, excluindo o produto atual
    const relatedProducts = products_data
        .filter((product) => product.category === category && product.id !== currentProductId)
        .slice(0, 4); // Limitar a 4 produtos relacionados

    if (relatedProducts.length === 0) {
        return null;
    }

    return (
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={() => onAddToCart(product)} />
            ))}
        </div>
    );
}
