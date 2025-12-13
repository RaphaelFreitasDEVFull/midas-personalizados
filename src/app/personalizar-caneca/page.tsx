"use client";

import { MugCustomizer } from "@/components/mug-customizer";
import { MugGallery } from "@/components/mug-gallery";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { redirect } from "next/navigation";

export default function PersonalizarPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center">
            <Button onClick={() => redirect("/")}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Voltar
            </Button>
            <div className="flex-1 flex items-center justify-center flex-col">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient-gold">
                Personalize Sua Caneca
              </h1>
              <p className="text-center text-muted-foreground mb-12 text-lg">
                Crie a caneca dos seus sonhos com nosso configurador
              </p>
            </div>
          </div>

          <MugCustomizer />

          <div className="mt-24">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gradient-gold">
              Canecas Já Produzidas
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Veja alguns exemplos do nosso trabalho
            </p>
            <MugGallery />
          </div>
        </div>
      </div>
    </main>
  );
}
