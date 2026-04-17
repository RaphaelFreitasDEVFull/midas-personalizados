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
    url: "/galerias/01.jifif",
    alt: "Caneca",
  },
  {
    id: 2,
    url: "/galerias/02.jifif",
    alt: "Caneca",
  },
  {
    id: 3,
    url: "/galerias/03.jifif",
    alt: "Caneca",
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
