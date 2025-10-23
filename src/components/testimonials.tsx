import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Ana Silva",
    role: "Empresária",
    content: "A qualidade das canecas superou minhas expectativas. Perfeitas para presentear meus clientes!",
    rating: 5,
  },
  {
    name: "Carlos Mendes",
    role: "Designer",
    content: "Atendimento impecável e produto final incrível. As camisetas ficaram exatamente como eu imaginei.",
    rating: 5,
  },
  {
    name: "Juliana Costa",
    role: "Organizadora de Eventos",
    content: "Trabalho com a Midas há meses e nunca me decepcionei. Qualidade premium de verdade!",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D4A017] rounded-full blur-[200px] opacity-5" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            O Que Dizem Nossos <span className="text-gradient-gold">Clientes</span>
          </h2>
          <p className="text-[#EAEAEA]/70 text-lg max-w-2xl mx-auto">
            Centenas de clientes satisfeitos com nossos produtos premium
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#1A1A1A] to-[#0C0C0C] rounded-2xl p-8 border border-[#2A2A2A] hover:border-[#F2C94C]/30 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#F2C94C] text-[#F2C94C]" />
                ))}
              </div>

              {/* Content */}
              <p className="text-[#EAEAEA] mb-6 leading-relaxed">"{testimonial.content}"</p>

              {/* Author */}
              <div className="border-t border-[#2A2A2A] pt-4">
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-[#F2C94C] text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
