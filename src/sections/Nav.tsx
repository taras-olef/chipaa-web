import { MenuIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Logo, StoreBadges } from "@/sections/parts"
import { nav } from "@/site"

/** Menú fijo translúcido: logo, secciones y tiendas. En móvil, las secciones van en un panel lateral. */
export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/5 bg-paper/75 backdrop-blur-md backdrop-saturate-150">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-6 py-3.5">
        <Logo />
        <nav aria-label="Secciones" className="hidden gap-8 text-[15px] font-medium lg:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="opacity-85 transition-opacity hover:opacity-100">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <StoreBadges height={40} className="hidden sm:flex" />
          <StoreBadges height={36} only="ios" className="sm:hidden" />
          <Sheet>
            <SheetTrigger render={<Button variant="ghost" size="icon-lg" className="lg:hidden" aria-label="Abrir menú" />}>
              <MenuIcon className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-paper p-6">
              <SheetTitle className="sr-only">Menú</SheetTitle>
              <Logo size={30} />
              <nav aria-label="Secciones" className="mt-6 flex flex-col gap-1 text-lg font-semibold">
                {nav.map((item) => (
                  <SheetClose key={item.href} render={<a href={item.href} className="rounded-lg px-2 py-3 hover:bg-muted" />}>
                    {item.label}
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
