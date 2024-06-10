import SectionTitle from '@/components/others/section-title'
import Image from 'next/image'

export default function ContactUs() {
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
          <h1 className="text-white text-3xl md:text-8xl font-bold ">Contact Us</h1>
        </div>
      </section>
      <SectionTitle title="" titleAnimated="Contact Us" />
    </>
  )
}
