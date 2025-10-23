import { MessageSquare, Palette, Package, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    title: "Entre em contato",
    description: "Envie sua ideia pelo WhatsApp e conte o que você precisa",
  },
  {
    icon: Palette,
    title: "Criamos o design",
    description: "Nossa equipe desenvolve um mockup exclusivo para sua aprovação",
  },
  {
    icon: Package,
    title: "Produzimos com qualidade",
    description: "Fabricamos seu produto com materiais premium e acabamento impecável",
  },
  {
    icon: CheckCircle,
    title: "Entregamos com cuidado",
    description: "Seu produto chega pronto para impressionar",
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Como <span className="text-gradient-gold">Funciona</span>
          </h2>
          <p className="text-[#EAEAEA]/70 text-lg max-w-2xl mx-auto">
            Um processo simples e transparente do início ao fim
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-[2px] bg-gradient-to-r from-[#F2C94C]/30 to-transparent" />
              )}

              <div className="relative bg-gradient-to-br from-[#1A1A1A] to-[#0C0C0C] rounded-2xl p-6 border border-[#2A2A2A] hover:border-[#F2C94C]/30 transition-all duration-300 h-full">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-[#F2C94C] to-[#D4A017] rounded-full flex items-center justify-center text-[#0C0C0C] font-bold text-sm gold-glow">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-[#0C0C0C] rounded-xl flex items-center justify-center mb-4 border border-[#F2C94C]/20">
                  <step.icon className="w-8 h-8 text-[#F2C94C]" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-[#EAEAEA]/70 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
