"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  review: string;
  rating: number;
  date: string;
  verified: boolean;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Daiane",
    title: "Transformação completa no mercado",
    review:
      "Ficaram lindas, perfeitas! Eu amei o resultado e tenho certeza que elas vão adorar também. Atendimento excelente e muito atencioso, já combinamos a entrega e foi tudo super rápido. Recomendo demais!",
    rating: 5,
    date: "29 de outubro de 2025",
    verified: true,
    avatar: "D",
  },
  {
    id: 2,
    name: "Valdirene",
    title: "Processo estratégico e inspirador",
    review:
      "Amei demais, ficou perfeita e linda! A embalagem já veio pronta para presente e com um cuidado incrível nos detalhes. Gostei tanto que vou até compartilhar no Instagram e marcar vocês. Atendimento excelente e muito atencioso. Super recomendo!",
    rating: 5,
    date: "25 de outubro de 2025",
    verified: true,
    avatar: "V",
  },
  {
    id: 3,
    name: "Maria",
    title:
      "Peguei minhas canecas e ficaram lindas, eu amei! O capricho é visível em cada detalhe, e já vou presentear uma delas hoje. Fiquei encantada com o resultado!",
    review:
      "Senti que finalmente minha marca pessoal reflete quem eu realmente sou.",
    rating: 5,
    date: "19 de outubro de 2025",
    verified: true,
    avatar: "M",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="relative min-h-screen bg-background py-20 px-4">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-50" />

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            O que nossos clientes dizem
          </h2>
        </div>

        {/* Carousel container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 rounded-full bg-card shadow-lg hover:bg-primary hover:text-primary-foreground border-primary/30 transition-all duration-300"
            onClick={prevTestimonial}
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 rounded-full bg-card shadow-lg hover:bg-primary hover:text-primary-foreground border-primary/30 transition-all duration-300"
            onClick={nextTestimonial}
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          <div className="bg-card border-2 border-primary/30 rounded-lg p-6 md:p-8 shadow-2xl transition-all duration-300 hover:border-primary/50 hover:shadow-primary/20 animate-fade-in-up">
            {/* User Info */}
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center text-primary font-semibold flex-shrink-0 text-base">
                {currentTestimonial.avatar}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground text-lg">
                  {currentTestimonial.name}
                </h3>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < currentTestimonial.rating
                      ? "fill-primary text-primary"
                      : "fill-muted text-muted"
                  }`}
                />
              ))}
            </div>

            {/* Review Title */}
            <h4 className="font-bold text-foreground text-lg mb-2">
              {currentTestimonial.title}
            </h4>

            {/* Review Date */}
            <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
              <span>Avaliado no Brasil em {currentTestimonial.date}</span>
            </div>

            {/* Verified Badge */}
            {currentTestimonial.verified && (
              <div className="mb-4">
                <span className="text-sm font-semibold text-primary">
                  Compra verificada
                </span>
              </div>
            )}

            {/* Review Text */}
            <p className="text-foreground leading-relaxed mb-6 text-base">
              {currentTestimonial.review}
            </p>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8 shadow-lg shadow-primary/50"
                    : "bg-muted hover:bg-primary/50 w-2"
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 animate-gold-glow"
          >
            Deixe seu depoimento
          </Button>
        </div>
      </div>
    </section>
  );
}
