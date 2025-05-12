import React, { useEffect, useState } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import "./Carouselitem.css";
import { Loader2 } from "lucide-react";


type CarouselitemProps = {
    id?:string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
    categories: any[];
    value:string;
};

const Carouselitem:React.FC<CarouselitemProps>=({id,categories,value}) => {

    const [Loading,setLoading]=useState(false);

    const plugin1 = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    );

    useEffect(()=>{
        if(categories && categories.length>0)
        {
            setLoading(true);
        }
        else{
            setLoading(false);
        }
    },[categories])
    
  return (
        <section id={id} className="categories max-w-7xl mx-auto py-12 px-4 relative">
          <h2 className="text-3xl font-semibold mb-8 text-center text-foreground">
            {value}
          </h2>
        {Loading ? (
            <div className="relative">
            <Carousel
                plugins={[plugin1.current]}
                onMouseEnter={plugin1.current.stop}
                onMouseLeave={plugin1.current.reset}
                opts={{ align: "start" }}
                className="w-full"
            >
                <CarouselContent>
                {categories.map((x, index) => (
                    <CarouselItem
                    key={index}
                    className="basis-[45%] sm:basis-[30%] md:basis-[22%] p-2"
                    >
                    <Card className="hover:shadow-xl transition duration-300 bg-card border border-border">
                        <CardContent className="flex aspect-square items-center justify-center p-4 rounded-lg">
                        <span className="text-xl md:text-2xl font-semibold text-foreground items-center justify-center text-center">
                            {typeof x === 'object' && x?.title ? x.title : x}
                        </span>
                        </CardContent>
                    </Card>
                    </CarouselItem>
                ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10" />
                <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10" />
            </Carousel>
            </div>
        ) : (
            <div className="flex justify-center items-center py-8">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
        )}
        </section>
  )
}

export default Carouselitem