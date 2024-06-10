'use client'
import Autoplay from 'embla-carousel-autoplay'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import { Hero } from '@/payload-types'

export default function HeroCarousel({ images }: { images: Hero[] }) {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent>
        {images.map((image) =>
          image['Hero Image'].map((img) => {
            if (typeof img === 'number') return null
            return (
              <CarouselItem key={img.id} className="w-full h-[35rem] relative">
                <Image src={img.url!} fill alt={img.alt!} unoptimized className='object-cover'/>
              </CarouselItem>
            )
          }),
        )}
      </CarouselContent>
    </Carousel>
  )
}
