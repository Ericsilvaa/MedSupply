"use client"

import Image from "next/image"
import { Plus } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/types/product"

interface ProductCardProps {
  product: Product
  onAddToCart: () => void
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  // Função para formatar o preço em reais
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price)
  }

  // Mapeamento de categorias para cores de badge
  const categoryColors: Record<string, string> = {
    monitoramento: "bg-blue-100 text-blue-800",
    emergencia: "bg-red-100 text-red-800",
    medicacao: "bg-green-100 text-green-800",
    respiratorio: "bg-purple-100 text-purple-800",
    mobiliario: "bg-yellow-100 text-yellow-800",
    cirurgia: "bg-pink-100 text-pink-800",
    esterilizacao: "bg-indigo-100 text-indigo-800",
    diagnostico: "bg-orange-100 text-orange-800",
  }

  // Mapeamento de categorias para nomes em português
  const categoryNames: Record<string, string> = {
    monitoramento: "Monitoramento",
    emergencia: "Emergência",
    medicacao: "Medicação",
    respiratorio: "Respiratório",
    mobiliario: "Mobiliário",
    cirurgia: "Cirurgia",
    esterilizacao: "Esterilização",
    diagnostico: "Diagnóstico",
  }

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md group">
      <div className="relative aspect-square overflow-hidden bg-muted/10">
        <div className="absolute inset-0 z-10 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center">
          <Button
            onClick={onAddToCart}
            variant="secondary"
            className="opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
          >
            Adicionar ao Carrinho
          </Button>
        </div>
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-2 left-2 z-20">
          <Badge variant="outline" className={`${categoryColors[product.category]} border-0`}>
            {categoryNames[product.category]}
          </Badge>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground">Cód. {product.code}</p>
          <h3 className="font-medium line-clamp-1">{product.name}</h3>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <p className="font-bold">{formatPrice(product.price)}</p>
        <Button
          size="icon"
          variant="ghost"
          onClick={onAddToCart}
          className="rounded-full h-8 w-8 bg-primary/10 hover:bg-primary/20"
        >
          <Plus className="h-4 w-4" />
          <span className="sr-only">Adicionar ao carrinho</span>
        </Button>
      </CardFooter>
    </Card>
  )
}
