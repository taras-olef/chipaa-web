import { ChartNoAxesColumnIcon, SmartphoneIcon, TagIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"

const benefits = [
  {
    icon: SmartphoneIcon,
    title: "Sin cuenta",
    text: "Tu historial y tus alertas se guardan en tu móvil. Si quieres, entra con Apple o Google para verlos en tus otros dispositivos.",
  },
  {
    icon: TagIcon,
    title: "Nuevo y segunda mano",
    text: "Cada uno por separado, para que compares lo comparable. Tú decides si te vale uno usado.",
  },
  {
    icon: ChartNoAxesColumnIcon,
    title: "Siempre por precio",
    text: "Algunos enlaces pueden ser de afiliación, pero el orden nunca depende de eso. El primero es el más barato.",
  },
]

export function Benefits() {
  return (
    <section className="mx-auto grid max-w-[1080px] gap-6 px-6 pb-34 md:grid-cols-3 [&>*]:min-w-0">
      {benefits.map(({ icon: Icon, title, text }) => (
        <Card key={title} className="rounded-3xl py-0 shadow-xs ring-0">
          <CardContent className="p-7">
            <div className="mb-5.5 grid size-13 place-items-center rounded-[14px] bg-cream text-cinnamon">
              <Icon className="size-6.5" strokeWidth={2} />
            </div>
            <CardTitle className="text-[19px] font-bold">{title}</CardTitle>
            <CardDescription className="mt-2.5 text-[15px] leading-relaxed text-bark">{text}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </section>
  )
}
