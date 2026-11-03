import { cn } from "cn"
import { asset, storeLinks } from "@/site"

/** Logotipo: Chita y «Chipaa» en Fredoka. */
export function Logo({ size = 34 }: { size?: number }) {
  return (
    <a href="#inicio" className="inline-flex items-center gap-2 no-underline" aria-label="Chipaa, inicio">
      <img src={asset("img/chita.svg")} alt="" width={size} height={size} />
      <span className="font-brand text-[26px] leading-none font-semibold">Chipaa</span>
    </a>
  )
}

/** Botones oficiales de App Store y Google Play. Sin ficha publicada, llevan a «Muy pronto». */
export function StoreBadges({ height = 52, className, only }: { height?: number; className?: string; only?: "ios" }) {
  const badges = [
    { store: "ios" as const, src: "img/app-store.svg", alt: "Descargar en el App Store" },
    { store: "android" as const, src: "img/google-play.png", alt: "Disponible en Google Play" },
  ].filter((badge) => !only || badge.store === only)

  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {badges.map(({ store, src, alt }) => {
        const url = storeLinks[store]
        return (
          <a
            key={store}
            href={url || "#descargar"}
            target={url ? "_blank" : undefined}
            rel={url ? "noopener" : undefined}
            className="transition-transform hover:-translate-y-px active:scale-[0.97]"
          >
            <img src={asset(src)} alt={alt} style={{ height }} className="w-auto" />
          </a>
        )
      })}
    </div>
  )
}

/** Marco de móvil para las capturas de la app. */
export function Phone({ src, alt = "", className }: { src: string; alt?: string; className?: string }) {
  return (
    <div
      className={cn(
        "aspect-[540/1158] rounded-[40px] bg-[#1d140d] p-[9px] shadow-[0_30px_60px_-20px_rgba(42,26,16,0.35),0_12px_24px_-12px_rgba(42,26,16,0.25)]",
        className,
      )}
    >
      <img src={asset(src)} alt={alt} className="size-full rounded-[32px] object-cover object-top" />
    </div>
  )
}
