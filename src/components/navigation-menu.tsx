import Link from "next/link"

export function NavigationMenu() {
  return (
    <nav className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
      <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
        Início
      </Link>
      <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
        Produtos
      </Link>
      <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
        Categorias
      </Link>
      <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
        Promoções
      </Link>
      <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
        Sobre
      </Link>
      <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
        Contato
      </Link>
    </nav>
  )
}
