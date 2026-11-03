import * as React from "react"
import { cn } from "cn"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, type CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Phone } from "@/sections/parts"

const features = [
  {
    title: "Busca cualquier producto",
    text: "Escribe como hablas: «air force blancas 43». Chipaa entiende la marca, el modelo, la talla y el color.",
    shot: "img/home.webp",
    alt: "Pantalla de inicio de Chipaa",
  },
  {
    title: "Varias tiendas a la vez",
    text: "Mira precios en las tiendas conectadas en segundos, mientras Chita corre. Tú solo esperas un momento.",
    shot: "img/hunting.webp",
    alt: "Chita buscando en las tiendas",
  },
  {
    title: "Precio total, envío incluido",
    text: "El orden es siempre por lo que pagas al final. Y cada oferta se revisa una a una: fuera fundas, réplicas y modelos parecidos.",
    shot: "img/results.webp",
    alt: "Resultados ordenados por precio total",
  },
  {
    title: "Alertas de precio",
    text: "Elige tu precio objetivo y te avisamos cuando lo toque. Una vez por bajada, sin spam.",
    shot: "img/alerts.webp",
    alt: "Alertas de precio",
  },
]

/** Tiempo que se queda cada captura antes de pasar a la siguiente. */
const interval = 5000

/**
 * «¿Qué hace Chipaa?»: un carrusel de capturas sincronizado con las tarjetas. Pasa solo hasta que el
 * usuario toca una tarjeta o desliza; con «reducir movimiento», no pasa solo.
 */
export function Features() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [paused, setPaused] = React.useState(false)

  React.useEffect(() => {
    if (!api) return
    const onSelect = () => setCurrent(api.selectedScrollSnap())
    const onDrag = () => setPaused(true)
    api.on("select", onSelect)
    api.on("pointerDown", onDrag)
    return () => {
      api.off("select", onSelect)
      api.off("pointerDown", onDrag)
    }
  }, [api])

  React.useEffect(() => {
    if (!api || paused || matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const timer = setInterval(() => api.scrollTo((api.selectedScrollSnap() + 1) % features.length), interval)
    return () => clearInterval(timer)
  }, [api, paused])

  const select = (index: number) => {
    setPaused(true)
    api?.scrollTo(index)
  }

  return (
    <section id="como-funciona" className="mx-auto max-w-[1200px] scroll-mt-20 px-6 pt-10 pb-22 lg:pb-30">
      <h2 className="text-center text-[clamp(32px,3.8vw,48px)] font-bold">¿Qué hace Chipaa?</h2>

      <div className="mt-16 grid items-center gap-16 lg:grid-cols-2 [&>*]:min-w-0">
        <div className="flex flex-col items-center gap-1">
          <Carousel setApi={setApi} opts={{ loop: true }} className="w-[300px] sm:w-[380px]">
            <CarouselContent className="-ml-0">
              {features.map((feature) => (
                <CarouselItem key={feature.shot} className="px-10 pt-4 pb-16">
                  <Phone src={feature.shot} alt={feature.alt} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="flex gap-2" role="tablist" aria-label="Capturas">
            {features.map((feature, index) => (
              <button
                key={feature.shot}
                role="tab"
                aria-selected={current === index}
                aria-label={feature.title}
                onClick={() => select(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  current === index ? "w-[22px] bg-amber" : "w-2 bg-[#d9cbb6]",
                )}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3.5">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              role="button"
              tabIndex={0}
              onClick={() => select(index)}
              onKeyDown={(event) => (event.key === "Enter" || event.key === " ") && select(index)}
              className={cn(
                "cursor-pointer gap-0 rounded-[20px] py-0 text-left ring-0 transition-all duration-200",
                current === index
                  ? "border border-ink bg-card shadow-[0_10px_30px_-18px_rgba(42,26,16,0.35)]"
                  : "border border-border bg-transparent shadow-none hover:bg-card/60",
              )}
            >
              <CardHeader className="gap-2 px-6 py-5.5">
                <CardTitle className="text-[19px] font-bold">{feature.title}</CardTitle>
                <CardDescription className="text-[15.5px] leading-relaxed text-bark">{feature.text}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
