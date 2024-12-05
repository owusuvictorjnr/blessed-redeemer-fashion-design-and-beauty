import { SALE_QUERYResult } from "@/sanity.types";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Button } from "./ui/button";

const DiscountBanner = ({ sales }: { sales: SALE_QUERYResult }) => {
  return (
    <Carousel className="w-full max-w-screen-xl mx-auto my-10">
      <CarouselContent>
        {sales?.map((sale) => (
          <CarouselItem key={sale?._id} className="bg-gray-100">
            <Card>
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 p-6 md:px-12 flex flex-col gap-2 md:gap-4">
                    <Badge
                      variant={"secondary"}
                      className="text-darkBlue capitalize w-32"
                    >
                      {sale?.badge} {sale?.discountAmount}% OFF
                    </Badge>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
                      {sale?.title}
                    </h2>

                    <p className="text-muted-foreground">{sale?.description}</p>

                    <p className="mb-4">
                      use code:{" "}
                      <span className="font-semibold text-primary">
                        {sale?.couponCode} for{" "}
                        <span className="font-semibold">
                          {sale?.discountAmount}%
                        </span>{" "}
                        OFF
                      </span>
                    </p>

                    <Button className="w-32">Shop Now</Button>
                  </div>

                  {
                    // This is a conditional rendering of the image
                    // If the image is not available, it will not be rendered
                    sale?.image && (
                      <div className="w-full md:w-1/2 h-auto flex items-center justify-center py-2">
                        <Image
                          src={urlFor(sale?.image).url()}
                          alt="Sale Image"
                          width={500}
                          height={500}
                          objectFit="cover"
                          className="h-full transition-transform hover:scale-105 duration-500 ease-in-out"
                        />
                      </div>
                    )
                  }
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="absolute left-2" />
      <CarouselNext className="absolute right-2" />
    </Carousel>
  );
};

export default DiscountBanner;
