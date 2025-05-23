import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Monte seu orçamento de forma rápida e fácil
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Selecione os produtos hospitalares que você precisa e receba um orçamento personalizado em instantes.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg">Explorar Produtos</Button>
              <Button size="lg" variant="outline">
                Solicitar Demonstração
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full opacity-20 blur-3xl"></div>
              <div className="relative h-full w-full bg-muted/80 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-medium text-muted-foreground">Equipamentos Médicos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
