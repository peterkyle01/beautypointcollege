import HeroCarousel from '@/components/others/hero-carousel'
import { HeroTypewriter } from '@/components/others/hero-typewriter'
import SectionTitle from '@/components/others/section-title'
import { Button } from '@/components/ui/button'
import { getCourses, getHeroImages } from '@/lib/actions'
import { unstable_noStore } from 'next/cache'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  unstable_noStore()
  const courses = await getCourses()
  const images = await getHeroImages()
  return (
    <>
      <section className="w-full h-[35rem] relative">
        <HeroCarousel images={images} />
        <div className="absolute top-0 w-full h-full z-10 flex items-center justify-center">
          <HeroTypewriter />
        </div>
      </section>
      <SectionTitle title="Welcome To" titleAnimated="Beauty Point College" />
      <section className="my-4 flex h-[40rem] w-full flex-col gap-4 px-2 md:h-[25rem] md:flex-row-reverse md:px-10">
        <div className="grid flex-1 place-items-start md:py-8">
          <h1 className="text-4xl font-medium text-primary md:text-5xl">
            Friendly Learning At Beauty Point
          </h1>
          <h2 className="my-6 text-base text-neutral-500 md:pr-5 md:text-lg">
            Beauty Point College is a universally accredited institution committed to the
            development and delivery of innovative, high quality education systems for the Hair and
            Beauty Industry. The courses we offer have been carefully designed to give you the edge
            in the Cosmetology Industry and to be a successful professional.
          </h2>
          <Link href="/about-us">
            <Button variant={'outline'} className="rounded-md border-primary text-primary">
              Read more..
            </Button>
          </Link>
        </div>
        <div className="relative flex-1 md:py-8">
          <Image
            src={'/image1.jpg'}
            fill
            
            className="object-cover rounded-md"
            alt="image of beauty point students"
          />
        </div>
      </section>
      <SectionTitle title="Choose Your" titleAnimated="Course" />
      <section className="w-full h-[30rem] grid grid-cols-2 md:grid-cols-4 gap-2 px-2 md:px-10">
        {courses.map((course) => {
          if (
            typeof course['Course Image'] === 'number' ||
            typeof course['Course Image'].alt === 'undefined'
          )
            return null
          console.log(course['Course Image'].url)
          return (
            <Link href={`/${course.id}`} key={course.id}>
              <div className="w-full h-full rounded-md relative group overflow-hidden">
                <Image
                  src={`https://beautypointcollege.vercel.app${course['Course Image'].url!}`}
                  unoptimized
                  fill
                  alt={course['Course Image'].alt!}
                  className="object-cover rounded-md group-hover:scale-110 duration-700"
                />
                <div className="w-full h-full z-10 absolute top-0 flex rounded-md flex-col justify-end items-center group bg-gradient-to-b from-transparent via-transparent to-primary">
                  <h1 className="font-bold text-white md:text-2xl tracking-widest">
                    {course['Course Name']}
                  </h1>
                  <h2 className=" text-white my-1 tracking-tighter text-sm md:text-xl ">
                    {course['Duration In Months']} months
                  </h2>
                </div>
              </div>
            </Link>
          )
        })}
      </section>
      <SectionTitle title="Our" titleAnimated="Video" />
      <section className="w-full h-[30rem] px-2">
        <iframe
          src="https://player.vimeo.com/video/690529910?h=ea295c9526"
          width="100%"
          height="100%"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
    </>
  )
}
