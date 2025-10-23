import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const whatsappNumber = "5511999999999"; // Replace with actual number
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de fazer um orçamento para personalização."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-linear-to-br from-[#0C0C0C] via-[#1A1A1A] to-[#0C0C0C]" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#F2C94C 1px, transparent 1px), linear-gradient(90deg, #F2C94C 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Gold accent glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#F2C94C] rounded-full blur-[150px] opacity-10" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#D4A017] rounded-full blur-[150px] opacity-10" />

      <div className="relative z-10 container mx-auto px-4 flex items-center justify-center flex-col text-center">
        {/* Logo/Brand */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-[#F2C94C] blur-2xl opacity-30 animate-pulse" />
          <Image
            src={"/logo.png"}
            alt="Midas Personalizados"
            width={200}
            height={100}
            className="relative z-10"
          />
        </div>

        {/* Main headline */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-balance">
          Personalização com
          <br />
          <span className="text-gradient-gold">padrão premium</span>
        </h2>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-[#EAEAEA]/80 mb-12 max-w-2xl mx-auto text-pretty">
          Transforme sua ideia em um produto único com acabamento profissional e
          qualidade incomparável
        </p>

        {/* CTA Button */}
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#F2C94C] to-[#D4A017] hover:from-[#D4A017] hover:to-[#F2C94C] text-[#0C0C0C] font-semibold px-8 py-6 text-lg rounded-full gold-glow gold-glow-hover transition-all duration-300 shadow-2xl"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Fazer orçamento no WhatsApp
          </Button>
        </a>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#F2C94C]/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-[#F2C94C] rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
