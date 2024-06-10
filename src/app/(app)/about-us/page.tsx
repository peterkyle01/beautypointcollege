import Image from 'next/image'
import Link from 'next/link'
import SectionTitle from '@/components/others/section-title'
import { Button } from '@/components/ui/button'

export default function AboutUs() {
  return (
    <>
      <section className="w-full h-60 md:h-80 relative">
        <Image
          src={'/banner1.jpg'}
          fill
          alt={'Image of beauty point college students graduation'}
          className="object-cover object-top"
        />
        <div className="w-full h-full absolute top-0 bg-black/30 flex justify-center items-center">
          <h1 className="text-white text-3xl md:text-8xl font-bold ">About Us</h1>
        </div>
      </section>
      <SectionTitle title="" titleAnimated="About Us" />
      <section className="my-4 flex h-[40rem] w-full flex-col gap-4 px-2 md:h-[25rem] md:flex-row-reverse md:px-10">
        <div className="grid flex-1 place-items-start md:py-8">
          <h1 className="text-4xl font-medium text-primary md:text-5xl">Our History </h1>
          <h2 className="my-6 text-sm leading-6 text-neutral-500 md:pr-5 ">
            Beauty Point College is a universal credited institution committed to the development
            and delivery of innovative, high quality education systems for the Hair and Beauty
            Industry. The courses we offer have been carefully designed to give you the edge in the
            cosmetology industry and to be a successful professional. Education is a very important
            factor in our commitment to the hairdressing industry. Having realized the importance of
            quality education, we ensure that our courses are professional and of very high
            standard. We have modern equipment and our practical rooms are very spacious. Beauty
            Point College pledges to continually set the standards of educational excellence
            worldwide. Beauty Point College was established in 1997 in response to a serious need at
            the time for professional trained designers and therapists in the field of fashion, hair
            and beauty. We pride ourselves on the personal services we give to our clients and never
            hesitate to go that extra mile to meet each individual clients&apos; need efficiently as
            possible.
          </h2>
        </div>
        <div className="relative flex-1 md:py-8">
          <Image
            src={'/about-us.jpg'}
            fill
            className="object-cover rounded-md"
            alt="image of beauty point students"
          />
        </div>
      </section>
    </>
  )
}
