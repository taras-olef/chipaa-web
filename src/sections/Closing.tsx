import { Separator } from "@/components/ui/separator"
import { Logo, StoreBadges } from "@/sections/parts"
import { asset, links } from "@/site"

/** Llamada final con Chita y las tiendas. */
export function Cta() {
  return (
    <section className="bg-[radial-gradient(60%_80%_at_50%_100%,var(--color-cream)_0%,var(--color-paper)_70%)] px-6 pt-28 pb-30 text-center">
      <img src={asset("img/chita.svg")} alt="" width={88} height={88} className="mx-auto mb-5.5" />
      <h2 className="text-[clamp(36px,4.6vw,56px)] leading-[1.08] font-extrabold">
        Empieza a cazar
        <br />
        el mejor precio
      </h2>
      <p className="mt-4 mb-7.5 text-lg text-bark">Muy pronto en iPhone y Android.</p>
      <StoreBadges className="justify-center" />
    </section>
  )
}

export function Footer() {
  const columns = [
    {
      title: "Legal",
      items: [
        { href: links.privacy, label: "Política de privacidad" },
        { href: links.terms, label: "Términos de uso" },
        { href: links.deleteAccount, label: "Eliminar cuenta" },
      ],
    },
    {
      title: "Ayuda",
      items: [
        { href: "#preguntas", label: "Preguntas frecuentes" },
        { href: links.support, label: "Soporte" },
        { href: links.contact, label: "Contacto" },
      ],
    },
  ]

  return (
    <footer className="bg-paper">
      <Separator />
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-8 px-6 pt-12 pb-6 md:grid-cols-[2fr_1fr_1fr] [&>*]:min-w-0">
        <div className="col-span-2 md:col-span-1">
          <Logo size={30} />
          <p className="mt-3 text-[15px] text-bark">El mejor precio, con el envío incluido.</p>
        </div>
        {columns.map((column) => (
          <div key={column.title} className="flex flex-col gap-2.5 text-[15px]">
            <h4 className="mb-1 text-sm font-semibold tracking-[0.08em] text-bark uppercase">{column.title}</h4>
            {column.items.map((item) => (
              <a key={item.label} href={item.href} className="hover:underline">
                {item.label}
              </a>
            ))}
          </div>
        ))}
      </div>
      <p className="mx-auto max-w-[1200px] px-6 pt-4 pb-9 text-[13px] text-bark">
        © 2026 Chipaa. Apple y el logotipo de Apple son marcas de Apple Inc. Google Play y su logotipo son marcas de Google LLC.
      </p>
    </footer>
  )
}
