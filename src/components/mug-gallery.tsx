"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import Image from "next/image";

const galleryImages = [
  { id: 1, url: "/galerias/01.png", alt: "Caneca" },
  { id: 2, url: "/galerias/02.png", alt: "Caneca" },
  { id: 3, url: "/galerias/03.png", alt: "Caneca" },
  { id: 4, url: "/galerias/04.png", alt: "Caneca" },
  { id: 5, url: "/galerias/05.png", alt: "Caneca" },
  { id: 6, url: "/galerias/06.png", alt: "Caneca" },
  { id: 7, url: "/galerias/07.png", alt: "Caneca" },
  { id: 8, url: "/galerias/08.png", alt: "Caneca" },
];

export function MugGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
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
              <Card className="overflow-hidden bg-card border-border hover:shadow-xl transition-shadow duration-300 gold-glow-hover">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <Image
                      onClick={() => setSelectedImage(image.url)}
                      src={image.url}
                      alt={image.alt}
                      fill
                      className="object-cover cursor-pointer"
                    />
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-0 bg-card border-border hover:bg-muted" />
        <CarouselNext className="right-0 bg-card border-border hover:bg-muted" />
      </Carousel>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <Image
            src={selectedImage}
            alt="Large view"
            width={800}
            height={800}
            className="object-contain"
          />
        </div>
      )}
    </>
  );
}
