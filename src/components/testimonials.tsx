"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: number;
  name: string;
  message: string;
  avatar: string;
  isClient: boolean;
  delay: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Daiane",
    message: "Ficaram Lindas, perfeitas",
    avatar: "D",
    isClient: false,
    delay: 0,
  },
  {
    id: 2,
    name: "Midas Personalizados",
    message: "Que bom que gostou, amanhã ja entrego para você! ✨",
    avatar: "MP",
    isClient: true,
    delay: 600,
  },
  {
    id: 3,
    name: "Daiane",
    message: "Okay, elas vão adorar",
    avatar: "D",
    isClient: false,
    delay: 1200,
  },
];

export default function Testimonials() {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    testimonials.forEach((testimonial, index) => {
      setTimeout(() => {
        if (index < testimonials.length - 1) {
          setShowTyping(true);
          setTimeout(() => {
            setShowTyping(false);
            setVisibleMessages((prev) => [...prev, testimonial.id]);
          }, 800);
        } else {
          setVisibleMessages((prev) => [...prev, testimonial.id]);
        }
      }, testimonial.delay);
    });
  }, []);

  return (
    <section className="relative min-h-screen bg-background py-20 px-4 overflow-hidden">
      {/* Efeito de brilho dourado no fundo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[120px] animate-gold-glow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-[120px] animate-gold-glow"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-primary" />
            <MessageCircle className="w-8 h-8 text-primary" />
            <Sparkles className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            O que nossos clientes dizem
          </h2>
          <p className="text-muted-foreground text-lg">
            Conversas reais, transformações verdadeiras
          </p>
        </div>

        {/* Chat Container */}
        <div className="bg-card/50 backdrop-blur-sm rounded-3xl border border-border/50 p-6 md:p-10 shadow-2xl">
          <div className="space-y-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className={`flex gap-3 ${
                  testimonial.isClient ? "justify-end" : "justify-start"
                } ${
                  visibleMessages.includes(testimonial.id)
                    ? "animate-fade-in-up opacity-100"
                    : "opacity-0"
                }`}
                style={{
                  animationDelay: `${testimonial.delay}ms`,
                }}
              >
                {/* Avatar (empresa à esquerda) */}
                {!testimonial.isClient && (
                  <div className="shrink-0">
                    <div className="w-10 h-10 rounded-full bg-secondary border-2 border-primary flex items-center justify-center text-primary font-semibold text-sm">
                      {testimonial.avatar}
                    </div>
                  </div>
                )}

                {/* Mensagem */}
                <div
                  className={`max-w-[80%] md:max-w-[70%] ${
                    testimonial.isClient
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary border-2 border-primary/50 text-secondary-foreground"
                  } rounded-2xl px-5 py-4 shadow-lg`}
                >
                  <p className="text-sm md:text-base leading-relaxed mb-2">
                    {testimonial.message}
                  </p>
                  <p
                    className={`text-xs font-medium ${
                      testimonial.isClient
                        ? "text-primary-foreground/80"
                        : "text-primary"
                    }`}
                  >
                    {testimonial.name}
                  </p>
                </div>

                {/* Avatar (cliente à direita) */}
                {testimonial.isClient && (
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm shadow-lg">
                      {testimonial.avatar}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Indicador de digitação */}
            {showTyping && (
              <div className="flex gap-3 justify-start animate-fade-in-up">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-secondary border-2 border-primary flex items-center justify-center text-primary font-semibold text-sm">
                    MP
                  </div>
                </div>
                <div className="bg-secondary border-2 border-primary/50 rounded-2xl px-5 py-4 flex items-center gap-1">
                  <span className="w-2 h-2 bg-primary rounded-full animate-typing" />
                  <span
                    className="w-2 h-2 bg-primary rounded-full animate-typing"
                    style={{ animationDelay: "0.2s" }}
                  />
                  <span
                    className="w-2 h-2 bg-primary rounded-full animate-typing"
                    style={{ animationDelay: "0.4s" }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Botão CTA */}
          <div
            className="mt-12 text-center animate-fade-in-up"
            style={{ animationDelay: "3500ms" }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Deixe seu depoimento
            </Button>
          </div>
        </div>

        {/* Decoração inferior */}
        <div
          className="mt-8 text-center text-muted-foreground text-sm animate-fade-in-up"
          style={{ animationDelay: "4000ms" }}
        >
          <p className="flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            Transformando personalidades em marcas de ouro
            <Sparkles className="w-4 h-4 text-primary" />
          </p>
        </div>
      </div>
    </section>
  );
}
