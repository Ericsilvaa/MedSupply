import ProductCard from "./product-card"
import type { Product } from "@/types/product"

interface ProductGridProps {
  products: Product[]
  onAddToCart: (product: Product) => void
}

export default function ProductGrid({ products, onAddToCart }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={() => onAddToCart(product)} />
      ))}
    </div>
  )
}
