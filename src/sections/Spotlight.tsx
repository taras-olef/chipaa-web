import { Badge } from "@/components/ui/badge"
import { Phone } from "@/sections/parts"

/** Alertas: bloque oscuro con el móvil grande, como la función destacada de la referencia. */
export function Spotlight() {
  return (
    <section
      id="alertas"
      className="grid scroll-mt-16 items-center gap-10 overflow-hidden bg-ink px-6 pt-22 text-cream lg:grid-cols-2 lg:px-[max(24px,calc((100vw-1200px)/2+24px))] lg:py-30 [&>*]:min-w-0"
    >
      <div className="text-center lg:text-left">
        <Badge className="mb-4 h-auto rounded-full bg-amber/15 px-3 py-1 text-[13px] font-bold tracking-[0.12em] text-amber uppercase">
          Alertas de precio
        </Badge>
        <h2 className="text-[clamp(36px,4.6vw,58px)] leading-[1.08] font-extrabold">
          Pon tu precio.
          <br />
          Chita vigila.
        </h2>
        <p className="mx-auto mt-5.5 max-w-[28em] text-lg text-[#e8d9c3] lg:mx-0">
          Dinos cuánto quieres pagar y nosotros miramos las tiendas por ti. Cuando el precio total llegue a tu objetivo,
          te llega un aviso con la tienda y el enlace.
        </p>
      </div>
      <div aria-hidden className="relative h-[470px] lg:h-[560px]">
        <Phone
          src="img/alerts.webp"
          className="absolute top-2.5 left-1/2 w-[230px] -translate-x-1/2 -rotate-6 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] sm:w-[290px]"
        />
      </div>
    </section>
  )
}
