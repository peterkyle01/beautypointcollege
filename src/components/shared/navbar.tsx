import Image from 'next/image'
import { Button } from '../ui/button'
import { Menu as NavMenu } from './nav-menu'
import Menu from './menu'
import Link from 'next/link'
import { getCourses } from '@/lib/actions'

export default async function Navbar() {
  const courses = await getCourses()

  return (
    <header className="px- fixed top-0 z-50 flex h-16 w-full border-b border-b-primary bg-white px-2 md:px-10">
      <div className="flex flex-1 items-center">
        <Link href={'/'}>
          <h1 className="md:hidden text-2xl md:text-4xl font-black text-primary">BPC</h1>
          <h1 className="hidden md:block text-2xl md:text-4xl font-black text-primary">
            Beauty Point College
          </h1>
        </Link>
      </div>
      <div className="hidden md:flex md:flex-1">
        <NavMenu courses={courses} />
      </div>
      <div className="flex flex-1 items-center justify-center">
        <Link href={'https://app.zangupay.com/login'} target="_blank">
          <Link href={'https://students.beautypoint.ac.ke/'}>
            <Button>Apply Now!</Button>
          </Link>
        </Link>
      </div>
      <div className="flex h-full w-20 items-center justify-center text-primary md:hidden">
        <Menu />
      </div>
    </header>
  )
}
