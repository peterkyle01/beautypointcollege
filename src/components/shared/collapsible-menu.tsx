'use client'

import { CaretSortIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'

import { useState } from 'react'
import { SheetClose } from '../ui/sheet'
import { Course } from '@/payload-types'

export default function CollapsibleMenu({ courses }: { courses: Course[] }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full space-y-2">
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-lg font-semibold text-primary">Courses</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="text-primary">
            <CaretSortIcon className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2">
        {courses.map((course) => (
          <SheetClose asChild key={course.id}>
            <Link href={`/${course.id}`}>{course['Course Name']}</Link>
          </SheetClose>
        ))}
      </CollapsibleContent>
    </Collapsible>
  )
}
