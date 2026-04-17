"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { MugCustomizer } from "./mug-customizer";

export function Products() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-[#F2C94C] rounded-full blur-[200px] opacity-5" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Produtos de{" "}
            <span className="text-gradient-gold">Alta Qualidade</span>
          </h2>
          <p className="text-[#EAEAEA]/70 text-lg max-w-2xl mx-auto">
            Cada peça é cuidadosamente produzida com materiais premium e atenção
            aos detalhes.
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8 max-w-xl mx-auto cursor-pointer">
          {/* Mug mockup */}
          <Dialog>
            <DialogTrigger asChild>
              <div className="group relative bg-linear-to-br from-[#1A1A1A] to-[#0C0C0C] rounded-3xl p-8 border border-[#2A2A2A] hover:border-[#F2C94C]/30 transition-all duration-300">
                <div className="absolute inset-0 bg-linear-to-br from-[#F2C94C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />

                <div className="relative z-10">
                  <div className="aspect-square bg-[#0C0C0C] rounded-2xl mb-6 flex items-center justify-center overflow-hidden">
                    <img
                      src="/caneca/canecas.png"
                      alt="Caneca personalizada premium"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    Canecas Premium
                  </h3>
                  <p className="text-[#EAEAEA]/70">
                    Cerâmica de alta qualidade com impressão durável e cores
                    vibrantes
                  </p>
                </div>
              </div>
            </DialogTrigger>

            <DialogContent fullScreen>
              <div className="flex flex-col h-full">
                <DialogHeader className="p-6 pb-2">
                  <DialogTitle>Personalize sua caneca</DialogTitle>
                </DialogHeader>

                <div className="flex-1 overflow-hidden p-6 pt-0">
                  <MugCustomizer />
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
