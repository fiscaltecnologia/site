import * as React from "react";
import logoImage1 from "@/public/_static/img-1.jpg";
import logoImage2 from "@/public/_static/img-2.jpg";
import logoImage3 from "@/public/_static/img-3.jpg";
import logoImage4 from "@/public/_static/img-4.jpg";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import BlurImage from "../shared/blur-image";
import MaxWidthWrapper from "../shared/max-width-wrapper";

export function CarouselDemo() {
  const images = [logoImage1, logoImage2, logoImage3, logoImage4]; // Array of images

  return (
    <MaxWidthWrapper>
      <div className="h-auto rounded-xl md:bg-muted/30 md:p-3.5 md:ring-1 md:ring-inset md:ring-border">
        {/* <div className="relative overflow-hidden rounded-xl border md:rounded-lg"> */}
          <Carousel className="">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square h-[300px] md:h-[500px] items-center justify-center w-full p-0">
                        <BlurImage
                          src={image}
                          alt="ligth preview landing"
                          className="object-cover w-full h-full"
                        //   width={1500}
                        //   height={750}
                          priority
                          placeholder="blur"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      {/* </div> */}
    </MaxWidthWrapper>
  );
}
