"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import Image from "next/image";

type MugType = "branca" | "colorida" | "glitter";
type MugColor =
  | "vermelho"
  | "azul"
  | "laranja"
  | "lilas"
  | "preto"
  | "rosa"
  | "verde";

const mugPrices: Record<MugType, number | Record<MugColor, number>> = {
  branca: 30.0,
  colorida: {
    vermelho: 40.0,
    azul: 40.0,
    verde: 40.0,
    rosa: 40.0,
    preto: 40.0,
    laranja: 40.0,
    lilas: 40.0,
  },
  glitter: {
    vermelho: 50.0,
    azul: 50.0,
    verde: 50.0,
    rosa: 50.0,
    preto: 50.0,
    laranja: 50.0,
    lilas: 50.0,
  },
};

export function MugCustomizer() {
  const [mugType, setMugType] = useState<MugType>("branca");
  const [mugColor, setMugColor] = useState<MugColor>("azul");
  const [artDescription, setArtDescription] = useState("");

  const getMugImage = () => {
    if (mugType === "branca") return "/mugs/branca.jpg";
    if (mugType === "colorida") return `/mugs/colorida-${mugColor}.jpg`;
    return `/mugs/glitter-${mugColor}.jpg`;
  };

  const getCurrentPrice = () => {
    if (mugType === "branca") return mugPrices.branca as number;
    return (mugPrices[mugType] as Record<MugColor, number>)[mugColor];
  };

  const handleSendToWhatsApp = () => {
    const price = getCurrentPrice();

    const message = `
🎁 *Pedido de Personalização - Midas Personalizados*

☑️ *Tipo de Caneca:* ${
      mugType === "branca"
        ? "Caneca Branca"
        : mugType === "colorida"
          ? "Caneca Colorida"
          : "Caneca com Glitter"
    }
${
  mugType !== "branca"
    ? `🎨 *Cor:* ${mugColor.charAt(0).toUpperCase() + mugColor.slice(1)}\n`
    : ""
}💰 *Preço:* R$ ${price.toFixed(2)}

✨ *Descrição da Arte:*
${artDescription || "Nenhuma descrição fornecida"}

---
Aguardo retorno para finalizar meu pedido! 😊
    `.trim();

    const phoneNumber = "5541984602192";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    // Mobile: coluna com scroll | Desktop: linha sem scroll
    <div className="flex h-full w-full flex-col overflow-y-auto md:flex-row md:overflow-hidden md:gap-12">
      {/* 🔥 PREVIEW */}
      {/* Mobile: altura fixa para o preview não sumir | Desktop: flex-1 ocupa tudo */}
      <div
        className="relative flex items-center justify-center rounded-2xl border border-border bg-card p-6 gold-glow overflow-hidden
                      h-64 w-full shrink-0
                      md:h-auto md:flex-1 md:p-10"
      >
        <div className="relative w-full h-full">
          <Image
            src={getMugImage()}
            alt="Preview da caneca"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div
          className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-xl font-bold text-base shadow-lg
                        md:top-6 md:right-6 md:px-6 md:py-3 md:text-xl"
        >
          R$ {getCurrentPrice().toFixed(2)}
        </div>
      </div>

      {/* 🔥 SIDEBAR */}
      {/* Mobile: cresce e empurra botão para baixo | Desktop: largura fixa, scroll interno */}
      <div
        className="flex w-full flex-col justify-between gap-6 py-6
                      md:max-w-md md:overflow-y-auto md:py-0"
      >
        <div className="space-y-6">
          {/* Tipo */}
          <div className="space-y-2">
            <Label className="text-sm font-semibold">Tipo de Caneca</Label>
            <Select
              value={mugType}
              onValueChange={(value) => setMugType(value as MugType)}
            >
              <SelectTrigger className="h-12 bg-card border-yellow-500">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="branca">Caneca Branca</SelectItem>
                <SelectItem value="colorida">Caneca Colorida</SelectItem>
                <SelectItem value="glitter">Caneca com Glitter</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Cor */}
          {mugType !== "branca" && (
            <div className="space-y-2">
              <Label className="text-sm font-semibold">Cor</Label>
              <Select
                value={mugColor}
                onValueChange={(value) => setMugColor(value as MugColor)}
              >
                <SelectTrigger className="h-12 bg-card">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vermelho">Vermelho</SelectItem>
                  <SelectItem value="azul">Azul</SelectItem>
                  <SelectItem value="verde">Verde</SelectItem>
                  <SelectItem value="rosa">Rosa</SelectItem>
                  <SelectItem value="preto">Preto</SelectItem>
                  <SelectItem value="lilas">Lilás</SelectItem>
                  <SelectItem value="laranja">Laranja</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          {/* Descrição */}
          <div className="space-y-2">
            <Label className="text-sm font-semibold">Descrição da Arte</Label>
            <Textarea
              placeholder="Descreva sua arte..."
              value={artDescription}
              onChange={(e) => setArtDescription(e.target.value)}
              className="min-h-35 resize-none bg-card"
            />
          </div>
        </div>

        {/* BOTÃO */}
        <Button
          onClick={handleSendToWhatsApp}
          className="h-12 w-full text-base font-semibold bg-primary hover:bg-primary/90"
        >
          <Send className="mr-2 h-5 w-5" />
          Enviar para WhatsApp
        </Button>
      </div>
    </div>
  );
}
