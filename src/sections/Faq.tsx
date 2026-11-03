import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { links } from "@/site"

const questions = [
  {
    q: "¿Cuánto cuesta Chipaa?",
    a: "Nada. Chipaa es gratis y no tiene compras dentro de la app. Algunas tiendas nos pagan una pequeña comisión cuando compras desde nuestro enlace, sin que a ti te cueste más.",
  },
  {
    q: "¿De dónde salen los precios?",
    a: "De las APIs oficiales de las tiendas. Una IA comprueba que cada anuncio es exactamente el producto que buscas antes de enseñártelo, y luego se ordenan por precio total con el envío incluido.",
  },
  {
    q: "¿Dónde compro?",
    a: "Siempre en la web de la tienda. Chipaa no vende nada: te lleva a la oferta y la compra la haces allí, con sus condiciones y su garantía.",
  },
  {
    q: "¿Necesito crear una cuenta?",
    a: "No. Todo funciona sin cuenta y se guarda en tu móvil. La cuenta, con Apple o Google, solo sirve para sincronizar el historial y las alertas entre dispositivos.",
  },
  {
    q: "¿Cómo elimino mi cuenta?",
    a: (
      <>
        En la app, Perfil → Eliminar cuenta. También puedes pedirlo{" "}
        <a href={links.deleteAccount} className="text-cinnamon underline underline-offset-2">
          desde la web
        </a>
        .
      </>
    ),
  },
  {
    q: "¿Cuándo sale la app?",
    a: "Muy pronto, en el App Store y en Google Play. Estamos terminando de conectar las tiendas.",
  },
]

export function Faq() {
  return (
    <section id="preguntas" className="mx-auto max-w-[820px] scroll-mt-16 px-5 py-22 sm:px-6 lg:py-30">
      <h2 className="text-center text-[clamp(32px,3.8vw,48px)] font-bold">Preguntas frecuentes</h2>
      <p className="mt-2.5 mb-11 text-center text-bark">Lo que más nos preguntan.</p>
      <Accordion className="gap-3">
        {questions.map(({ q, a }) => (
          <AccordionItem key={q} value={q} className="rounded-[18px] border border-border bg-card px-6 not-last:border-b">
            <AccordionTrigger className="py-5 text-[16.5px] font-semibold hover:no-underline">{q}</AccordionTrigger>
            <AccordionContent className="pb-5.5 text-[15.5px] leading-relaxed text-bark">{a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
