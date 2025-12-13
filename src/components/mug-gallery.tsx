"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const galleryImages = [
  {
    id: 1,
    url: "/custom-printed-mug-with-floral-design.jpg",
    alt: "Caneca com design floral",
  },
  {
    id: 2,
    url: "/custom-printed-mug-with-geometric-pattern.jpg",
    alt: "Caneca com padrão geométrico",
  },
  {
    id: 3,
    url: "/custom-printed-mug-with-pet-photo.jpg",
    alt: "Caneca com foto de pet",
  },
  {
    id: 4,
    url: "/custom-printed-mug-with-quote.jpg",
    alt: "Caneca com frase inspiradora",
  },
  {
    id: 5,
    url: "/custom-printed-red-glitter-mug.jpg",
    alt: "Caneca vermelha com glitter",
  },
  {
    id: 6,
    url: "/custom-printed-blue-mug-with-name.jpg",
    alt: "Caneca azul com nome personalizado",
  },
];

export function MugGallery() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-4">
        {galleryImages.map((image) => (
          <CarouselItem
            key={image.id}
            className="pl-4 md:basis-1/2 lg:basis-1/3"
          >
            <Card className="overflow-hidden bg-card border-border hover:shadow-xl transition-shadow duration-300 gold-glow-hover dark:bg-card dark:border-border dark:hover:bg-muted dark:text-card-foreground">
              <CardContent className="p-0">
                <div className="relative aspect-square">
                  <Image
                    src={image.url || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0 bg-card border-border hover:bg-muted text-card-foreground dark:bg-card dark:border-border dark:hover:bg-muted dark:text-card-foreground" />
      <CarouselNext className="right-0 bg-card border-border hover:bg-muted text-card-foreground dark:bg-card dark:border-border dark:hover:bg-muted dark:text-card-foreground" />
    </Carousel>
  );
}
