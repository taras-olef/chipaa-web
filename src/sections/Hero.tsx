import { Badge } from "@/components/ui/badge"
import { Phone, StoreBadges } from "@/sections/parts"
import { asset } from "@/site"

/** Portada: titular en dos niveles, tiendas, y dos móviles ladeados con etiquetas flotantes. */
export function Hero() {
  return (
    <section className="mx-auto grid max-w-[1200px] items-center gap-10 px-6 pt-8 pb-18 text-center lg:grid-cols-[1.05fr_1fr] lg:pt-14 lg:pb-30 lg:text-left [&>*]:min-w-0">
      <div className="flex flex-col items-center lg:items-start">
        <Badge
          variant="outline"
          className="mb-6 h-auto gap-2.5 rounded-full border-border bg-card py-1.5 pr-4 pl-1.5 text-sm font-semibold text-bark shadow-xs"
        >
          <img src={asset("img/icono.png")} alt="" className="size-7 rounded-lg" />
          Muy pronto en iPhone y Android
        </Badge>
        <h1 className="text-[clamp(40px,5.2vw,64px)] leading-[1.08] font-extrabold">
          <span className="mb-1.5 block text-[0.62em] font-bold text-bark">Conoce Chipaa</span>
          El mejor precio,
          <br />
          con el envío incluido
        </h1>
        <p className="mt-5 mb-7 max-w-[30em] text-lg text-bark">
          Escribe lo que quieres comprar. Chipaa lo busca en varias tiendas, comprueba que cada oferta es de verdad ese
          producto y te las ordena por lo que pagas al final.
        </p>
        <div id="descargar" className="scroll-mt-28">
          <StoreBadges className="justify-center lg:justify-start" />
        </div>
        <p className="mt-3.5 text-sm text-bark">Gratis. Sin cuenta. Disponible muy pronto.</p>
      </div>

      <div aria-hidden className="relative mx-auto h-[440px] w-full max-w-[520px] sm:h-[600px] lg:max-w-none">
        <Phone src="img/home.webp" className="absolute top-[70px] left-0 w-[200px] -rotate-[7deg] sm:left-[4%] sm:w-[270px]" />
        <Phone src="img/results.webp" className="absolute top-0 right-0 z-10 w-[200px] rotate-[5deg] sm:right-[4%] sm:w-[270px]" />

        <span className="absolute top-3 left-1 z-20 animate-float rounded-2xl bg-amber px-3.5 py-2.5 text-sm font-semibold shadow-[0_10px_30px_-10px_rgba(42,26,16,0.3)] [animation-delay:-1.5s] sm:top-10 sm:left-0">
          Envío incluido
        </span>
        <span className="absolute top-[70px] right-1 z-20 animate-float rounded-2xl bg-card px-3.5 py-2.5 text-sm font-semibold shadow-[0_10px_30px_-10px_rgba(42,26,16,0.3)] sm:top-[90px] sm:right-0">
          <b className="text-[17px]">89,99 €</b> mejor precio
        </span>
        <span className="absolute right-[22%] bottom-5 z-20 animate-float rounded-2xl bg-card px-3.5 py-2.5 text-sm font-semibold text-savings shadow-[0_10px_30px_-10px_rgba(42,26,16,0.3)] [animation-delay:-3s] sm:right-[34%] sm:bottom-10">
          ✓ Solo este producto
        </span>

        <svg viewBox="0 0 120 80" fill="none" className="absolute top-[330px] left-[34%] z-0 hidden w-[120px] opacity-85 sm:block">
          <path d="M6 18c18-14 44-12 52 4 7 14-10 26-20 16-9-9 6-24 26-20 22 4 34 22 44 44" stroke="#2A1A10" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M100 52l8 12 4-14" stroke="#2A1A10" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  )
}
