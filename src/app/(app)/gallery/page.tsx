import SectionTitle from '@/components/others/section-title'
import { getAllImages } from '@/lib/actions'
import { unstable_noStore } from 'next/cache'
import Image from 'next/image'

export default async function Gallery() {
  unstable_noStore()
  const images = await getAllImages()
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
          <h1 className="text-white text-3xl md:text-8xl font-bold ">Gallery</h1>
        </div>
      </section>
      <SectionTitle title="" titleAnimated="Gallery" />
      <section className="w-full h-[35rem] grid grid-cols-2 gap-2 px-2 md:px-10 md:grid-cols-4 overflow-y-scroll">
        {images.map((image) => (
          <div className="w-full h-full relative" key={image.id}>
            <Image src={image.url!} fill alt={image.alt!} className="object-cover rounded-md" />
          </div>
        ))}
      </section>
    </>
  )
}
