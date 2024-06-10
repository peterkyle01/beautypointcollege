import { FaSquareXTwitter, FaSquareWhatsapp, FaSquareFacebook } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdOutlineMailOutline } from 'react-icons/md'
import { Separator } from '../ui/separator'
import Link from 'next/link'
import Counters from '../others/counters'
import { getCourses } from '@/lib/actions'
import { unstable_noStore } from 'next/cache'

export default async function Footer() {
  unstable_noStore()
  const courses = await getCourses()
  return (
    <footer className="h-auto w-full">
      <div className="w-full h-40 md:h-80 text-primary">
        <Counters />
      </div>
      <div className="grid h-auto w-full grid-cols-1 gap-2 md:grid-cols-3 bg-sky-900 px-2 md:px-10 pt-6">
        <div className="h-72 w-full">
          <h1 className="text-3xl md:text-4xl font-black text-white my-6">Beauty Point College</h1>
          <div className="flex gap-2 py-2">
            <Link
              href={'/'}
              className="text-sm flex items-center gap-1 font-bold tracking-wider text-rose-400"
            >
              <FaPhoneAlt />
              0726856999
            </Link>
            <Link
              href={'/'}
              className="text-sm flex items-center gap-1 font-bold tracking-wider text-rose-400"
            >
              <MdOutlineMailOutline size={20} />
              info@beautypointcollege.net
            </Link>
          </div>

          <div className="h-20 w-full md:pr-6">
            <p className="text-white text-sm md:text-base">
              We don&apos;t compromise on quality,we have well trained tutors,our prices are very
              affordable and high graduation rate Travel opportunities for students Placement of a
              job is highly guaranteed
            </p>
          </div>
          <div className="flex h-20 w-full items-center gap-6">
            <Link
              href={'#'}
              target="__blank"
              className="cursor-pointer text-white duration-500 hover:scale-110"
            >
              <FaLinkedin size={30} />
            </Link>
            <Link href={'#'} className="cursor-pointer text-white duration-500 hover:scale-110">
              <FaSquareXTwitter size={30} />
            </Link>
            <Link
              href={'https://wa.me/254708255679'}
              className="cursor-pointer text-white duration-500 hover:scale-110"
            >
              <FaSquareWhatsapp size={30} />
            </Link>
            <Link href={'#'} className="cursor-pointer text-white duration-500 hover:scale-110">
              <FaSquareFacebook size={30} />
            </Link>
          </div>
        </div>
        <div className="h-72 w-full grid text-white md:pl-20 ">
          <p className="text-xl font-bold">Courses</p>
          {courses.map((course) => (
            <Link href={`/${course.id}`} key={course.id} className="hover:text-rose-400">
              <p className="text-sm">{course['Course Name']!}</p>
            </Link>
          ))}
        </div>
        <div className="h-72 w-full overflow-hidden rounded-md">
          <iframe
            className="rounded-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.813946291611!2d36.82418997381007!3d-1.2856356987021416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11284ceeb935%3A0x8f08b6f12d1b74c9!2sBeauty%20Point%20College!5e0!3m2!1sen!2ske!4v1717839168912!5m2!1sen!2ske"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="grid h-20 w-full px-2 md:px-10 bg-sky-900">
        <Separator className="my-2 w-1/2 place-self-center bg-rose-400" />
        <p className="text-center font-bold text-white">
          Copyright &copy; 2024 | Beauty Point College
        </p>
      </div>
    </footer>
  )
}
