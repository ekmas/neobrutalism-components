import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function CarouselDemo() {
  return (
    <div className="w-full flex-col items-center gap-4 flex">
      <Carousel className="w-full max-w-[200px]">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-[10px]">
                <Card className="shadow-none p-0 bg-main text-main-foreground">
                  <CardContent className="flex aspect-square items-center justify-center p-4">
                    <span className="text-3xl font-base">{index + 1}</span>
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
  )
}
