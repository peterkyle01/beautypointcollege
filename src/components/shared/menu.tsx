import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import Link from 'next/link'
import { HiMenuAlt4 } from 'react-icons/hi'
import CollapsibleMenu from './collapsible-menu'
import { getCourses } from '@/lib/actions'
import { unstable_noStore } from 'next/cache'

export default async function Menu() {
  unstable_noStore()
  const courses = await getCourses()
  return (
    <Sheet>
      <SheetTrigger asChild>
        <HiMenuAlt4 size={30} />
      </SheetTrigger>
      <SheetContent className="w-3/4 bg-gray-50">
        <SheetHeader>
          <SheetTitle>
            <div className="relative flex h-1/2 w-full items-center justify-center">
              <h1 className="text-2xl md:text-4xl font-black text-primary">BPC</h1>
            </div>
          </SheetTitle>
          <SheetClose asChild>
            <Link
              href={'/'}
              className="space-x-4 space-y-8 px-4 text-start text-lg font-semibold text-primary"
            >
              Home
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href={'/about-us'}
              className="space-x-4 space-y-8 px-4 text-start text-lg font-semibold text-primary"
            >
              About Us
            </Link>
          </SheetClose>
          <CollapsibleMenu courses={courses} />
          <SheetClose asChild>
            <Link
              href={'/gallery'}
              className="space-x-4 space-y-8 px-4 text-start text-lg font-semibold text-primary"
            >
              Gallery
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href={'/contact-us'}
              className="space-x-4 space-y-8 px-4 text-start text-lg font-semibold text-primary"
            >
              Contact Us
            </Link>
          </SheetClose>
          <SheetDescription className="absolute bottom-0 w-full text-sm text-neutral-500">
            Copyright &copy; 2024 | Beauty Point College
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
