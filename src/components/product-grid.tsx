import type { Product, ProductWitCategory } from '@/types/product';

import ProductCard from './product-card';

interface ProductGridProps {
    products: ProductWitCategory[];
    onAddToCart: (product: Product) => void;
}

export default function ProductGrid({ products, onAddToCart }: ProductGridProps) {
    return (
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {products.map((product, i) => (
                <ProductCard key={product.codigo + i} product={product} onAddToCart={() => onAddToCart(product)} />
            ))}
        </div>
    );
}
