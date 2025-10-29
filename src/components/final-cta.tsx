import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram, Mail, Facebook } from "lucide-react";
import Image from "next/image";

export function FinalCTA() {
  const whatsappNumber = "5541988673290"; // Replace with actual number
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de fazer um orçamento para personalização."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#0C0C0C] to-[#0C0C0C]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F2C94C] rounded-full blur-[200px] opacity-10" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA */}
          <div className="bg-linear-to-br from-[#1A1A1A] to-[#0C0C0C] rounded-3xl p-12 md:p-16 border border-[#F2C94C]/20 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">
              Pronto para criar algo{" "}
              <span className="text-gradient-gold">único</span>?
            </h2>
            <p className="text-[#EAEAEA]/80 text-lg mb-8 max-w-2xl mx-auto text-pretty">
              Entre em contato agora e transforme sua ideia em realidade com
              qualidade premium
            </p>

            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#F2C94C] to-[#D4A017] hover:from-[#D4A017] hover:to-[#F2C94C] text-[#0C0C0C] font-semibold px-8 py-6 text-lg rounded-full gold-glow gold-glow-hover transition-all duration-300 shadow-2xl"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Fazer orçamento agora
              </Button>
            </a>
          </div>

          {/* Footer */}
          <div className="border-t border-[#2A2A2A] pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Brand */}
              <div className="text-center md:text-left">
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
              </div>

              {/* Social links */}
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/midaspersonalizados"
                  className="w-10 h-10 bg-[#1A1A1A] border border-[#2A2A2A] rounded-full flex items-center justify-center hover:border-[#F2C94C]/50 hover:bg-[#F2C94C]/10 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-[#F2C94C]" />
                </a>
                 <a
                  href="https://www.facebook.com/share/1GWMGqHB7p"
                  className="w-10 h-10 bg-[#1A1A1A] border border-[#2A2A2A] rounded-full flex items-center justify-center hover:border-[#F2C94C]/50 hover:bg-[#F2C94C]/10 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-[#F2C94C]" />
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#1A1A1A] border border-[#2A2A2A] rounded-full flex items-center justify-center hover:border-[#F2C94C]/50 hover:bg-[#F2C94C]/10 transition-all duration-300"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5 text-[#F2C94C]" />
                </a>
                <a
                  href="mailto:midaspersonalizadosoficial@gmail.com"
                  className="w-10 h-10 bg-[#1A1A1A] border border-[#2A2A2A] rounded-full flex items-center justify-center hover:border-[#F2C94C]/50 hover:bg-[#F2C94C]/10 transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 text-[#F2C94C]" />
                </a>
              </div>

              {/* Copyright */}
              <p className="text-[#EAEAEA]/40 text-sm">
                © 2025 Midas Personalizados - Desenvolvido by Raphael Silva Freitas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
