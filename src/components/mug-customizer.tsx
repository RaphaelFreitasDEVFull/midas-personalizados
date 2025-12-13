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
type MugColor = "vermelho" | "azul" | "verde" | "rosa" | "preto" | "amarelo";

const mugPrices: Record<MugType, number | Record<MugColor, number>> = {
  branca: 25.0,
  colorida: {
    vermelho: 35.0,
    azul: 35.0,
    verde: 35.0,
    rosa: 35.0,
    preto: 35.0,
    amarelo: 35.0,
  },
  glitter: {
    vermelho: 45.0,
    azul: 45.0,
    verde: 45.0,
    rosa: 45.0,
    preto: 45.0,
    amarelo: 45.0,
  },
};

export function MugCustomizer() {
  const [mugType, setMugType] = useState<MugType>("branca");
  const [mugColor, setMugColor] = useState<MugColor>("vermelho");
  const [artDescription, setArtDescription] = useState("");

  const getMugImage = () => {
    if (mugType === "branca") {
      return "/mugs/branca.jpg";
    }
    if (mugType === "colorida") {
      return `/mugs/colorida-${mugColor}.jpg`;
    }
    return `/mugs/glitter-${mugColor}.jpg`;
  };

  const getCurrentPrice = () => {
    if (mugType === "branca") {
      return mugPrices.branca as number;
    }
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

    const phoneNumber = "5541988673290";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
      {/* Image Preview */}
      <div className="relative aspect-square rounded-xl bg-card p-8 flex items-center justify-center border border-border gold-glow">
        <div className="relative w-full h-full">
          <Image
            src={getMugImage() || "/placeholder.svg"}
            alt="Preview da caneca"
            fill
            className="object-contain rounded-3xl"
            priority
          />
        </div>
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold text-xl gold-glow">
          R$ {getCurrentPrice().toFixed(2)}
        </div>
      </div>

      {/* Configuration Form */}
      <div className="space-y-6">
        <div className="space-y-3">
          <Label
            htmlFor="mug-type"
            className="text-base font-semibold text-foreground"
          >
            Tipo de Caneca
          </Label>
          <Select
            value={mugType}
            onValueChange={(value) => setMugType(value as MugType)}
          >
            <SelectTrigger
              id="mug-type"
              className="h-12 bg-card border-yellow-500 text-card-foreground"
            >
              <SelectValue placeholder="Selecione o tipo" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border">
              <SelectItem value="branca" className="text-popover-foreground">
                Caneca Branca
              </SelectItem>
              <SelectItem value="colorida" className="text-popover-foreground">
                Caneca Colorida
              </SelectItem>
              <SelectItem value="glitter" className="text-popover-foreground">
                Caneca com Glitter
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {mugType !== "branca" && (
          <div className="space-y-3">
            <Label
              htmlFor="mug-color"
              className="text-base font-semibold text-foreground"
            >
              Cor da Caneca
            </Label>
            <Select
              value={mugColor}
              onValueChange={(value) => setMugColor(value as MugColor)}
            >
              <SelectTrigger
                id="mug-color"
                className="h-12 bg-card border-border text-card-foreground"
              >
                <SelectValue placeholder="Selecione a cor" />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border">
                <SelectItem
                  value="vermelho"
                  className="text-popover-foreground"
                >
                  Vermelho
                </SelectItem>
                <SelectItem value="azul" className="text-popover-foreground">
                  Azul
                </SelectItem>
                <SelectItem value="verde" className="text-popover-foreground">
                  Verde
                </SelectItem>
                <SelectItem value="rosa" className="text-popover-foreground">
                  Rosa
                </SelectItem>
                <SelectItem value="preto" className="text-popover-foreground">
                  Preto
                </SelectItem>
                <SelectItem value="amarelo" className="text-popover-foreground">
                  Amarelo
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}

        <div className="space-y-3">
          <Label
            htmlFor="art-description"
            className="text-base font-semibold text-foreground"
          >
            Descrição da Arte
          </Label>
          <Textarea
            id="art-description"
            placeholder="Descreva como você gostaria que fosse a arte da sua caneca..."
            value={artDescription}
            onChange={(e) => setArtDescription(e.target.value)}
            className="min-h-[150px] resize-none bg-card border-border text-card-foreground placeholder:text-muted-foreground"
          />
        </div>

        <Button
          onClick={handleSendToWhatsApp}
          className="w-full h-12 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 gold-glow-hover"
          size="lg"
        >
          <Send className="mr-2 h-5 w-5" />
          Enviar para WhatsApp
        </Button>
      </div>
    </div>
  );
}
