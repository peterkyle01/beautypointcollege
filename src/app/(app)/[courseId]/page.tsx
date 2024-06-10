import Image from 'next/image'
import { getCourse } from '@/lib/actions'
import SectionTitle from '@/components/others/section-title'
import { FaBook, FaCheck } from 'react-icons/fa6'
import { unstable_noStore } from 'next/cache'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export default async function CourseDetails({ params }: { params: { courseId: string } }) {
  unstable_noStore()
  const { courseId } = params
  const course = await getCourse({ courseId })
  if (
    typeof course['Course Image'] === 'number' ||
    typeof course['Course Image'].alt === 'undefined'
  )
    return null
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
          <h1 className="text-white text-3xl md:text-8xl font-bold ">{course['Course Name']}</h1>
        </div>
      </section>
      <SectionTitle
        title={course.Type == 'diploma' ? 'Diploma In' : 'Certificate In'}
        titleAnimated={course['Course Name']!}
      />
      <section className="w-full h-auto flex flex-col md:flex-row px-2 md:px-10 gap-2">
        <div className="w-full md:w-2/3 h-full">
          <div className="w-full h-[30rem] relative">
            <Image
              src={`https://beautypointcollege.vercel.app${course['Course Image'].url!}`}
              fill
              alt={course['Course Image'].alt!}
              className="object-cover"
            />
          </div>
          <h1 className="text-3xl text-sky-500 italic my-6 font-bold">Course Information</h1>
          <p className="text-neutral-500 leading-10">{course['Course Infomation']}</p>
          <h1 className="text-3xl text-sky-500 italic my-6 font-bold">Course Syllabus</h1>
          <ul className="gap-2 grid">
            {course['Course Syllabus']?.Topics?.map((topic) => (
              <li key={topic.id} className="flex gap-2 items-center">
                <FaBook className="text-primary" /> {topic.Topic}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/3 h-full">
          <Table className="border border-neutral-500 rounded-3xl h-[30rem]">
            <TableCaption>Fee Structure.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/2"></TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Admission Fees</TableCell>
                <TableCell className="text-right">
                  Ksh:
                  <span className="text-sky-500 font-bold text-lg">
                    {course['Fees Structure']?.['Admission Fee']?.toLocaleString()}
                  </span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">First Installment</TableCell>
                <TableCell className="text-right">
                  Ksh:
                  <span className="text-sky-500 font-bold text-lg">
                    {course['Fees Structure']?.['First Installment']?.toLocaleString()}
                  </span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Monthly Installment</TableCell>
                <TableCell className="text-right">
                  Ksh:
                  <span className="text-sky-500 font-bold text-lg">
                    {course['Fees Structure']?.['Second Installment']?.toLocaleString()}
                  </span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Internal Exams</TableCell>
                <TableCell className="text-right">
                  Ksh:
                  <span className="text-sky-500 font-bold text-lg">
                    {course['Fees Structure']?.['Internal exams']?.toLocaleString()}
                  </span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Starter Kit</TableCell>
                <TableCell className="text-right">
                  Ksh:
                  <span className="text-sky-500 font-bold text-lg">
                    {course['Fees Structure']?.['Starter Kit']?.toLocaleString()}
                  </span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Uniform/ID Card</TableCell>
                <TableCell className="text-right">
                  Ksh:
                  <span className="text-sky-500 font-bold text-lg">
                    {course['Fees Structure']?.['Uniform and ID Card']?.toLocaleString()}
                  </span>
                </TableCell>
              </TableRow>
            </TableBody>
            <TableFooter>
              <TableRow className="bg-primary/5">
                <TableCell colSpan={1} className="font-black tracking-wide">
                  Total
                </TableCell>
                <TableCell className="text-right">
                  Ksh:
                  <span className="text-sky-500 font-bold text-lg">
                    {(
                      course['Fees Structure']?.['Admission Fee']! +
                      course['Fees Structure']?.['First Installment']! +
                      course['Fees Structure']?.['Starter Kit']! +
                      course['Fees Structure']?.['Second Installment']! *
                        course['Duration In Months']! +
                      course['Fees Structure']?.['Uniform and ID Card']!
                    ).toLocaleString()}
                  </span>
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
          <h1 className="text-3xl text-sky-500 italic my-6 font-bold">Course Requirements</h1>
          <ul className="gap-2 grid grid-cols-2">
            {course['Course Requirements']?.Items?.map((item) => (
              <li key={item.id} className="flex gap-2 items-center">
                <FaCheck className="text-primary" /> {item.Quantity}&nbsp;{item.Item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
