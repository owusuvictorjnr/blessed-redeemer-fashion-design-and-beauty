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

const DiscountBanner = ({ sales }: { sales: SALE_QUERYResult }) => {
  return (
    <Carousel className="w-full max-w-screen-xl mx-auto my-10">
      <CarouselContent>
        {sales?.map((sale) => (
          <CarouselItem key={sale?._id} className="bg-gray-100">
            <Card>
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 p-6 md:px-12">
                    <Badge
                      variant={"secondary"}
                      className="mb-2 md:mb-4 text-darkBlue capitalize"
                    >
                      {sale?.badge} {sale?.discountAmount}% OFF
                    </Badge>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-2 md:mb-4">
                      {sale?.title}
                    </h2>
                  </div>

                  {
                    // This is a conditional rendering of the image
                    // If the image is not available, it will not be rendered
                    sale?.image && (
                      <div className="">
                        <Image
                          src={urlFor(sale?.image).url()}
                          alt="Sale Image"
                          width={500}
                          height={500}
                          layout="responsive"
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
