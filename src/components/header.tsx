"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingCart, Menu, Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { NavigationMenu } from "@/components/navigation-menu"

interface HeaderProps {
  cartItemCount: number
}

export default function Header({ cartItemCount }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <NavigationMenu />
          </SheetContent>
        </Sheet>

        <div className="hidden md:flex md:flex-1 md:items-center md:justify-start md:gap-6">
          <NavigationMenu />
        </div>

        <div className="flex flex-1 items-center justify-center md:justify-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">MEDSUPPLY</span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end gap-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
            <span className="sr-only">Pesquisar</span>
          </Button>

          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
            <span className="sr-only">Conta</span>
          </Button>

          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Carrinho</span>
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                {cartItemCount}
              </span>
            )}
          </Button>
        </div>
      </div>
    </header>
  )
}
