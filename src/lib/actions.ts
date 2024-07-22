'use server'

import config from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { TstudentFormSchema } from './utils'

export async function getCourses() {
  const payload = await getPayloadHMR({ config })
  const { docs: courses } = await payload.find({
    collection: 'course',
  })
  return courses
}

export async function getStudents() {
  const payload = await getPayloadHMR({ config })
  const { docs: students } = await payload.find({
    collection: 'student',
  })
  return students
}

export async function getCourse({ courseId }: { courseId: string }) {
  const payload = await getPayloadHMR({ config })
  const course = await payload.findByID({
    collection: 'course',
    id: courseId,
  })
  return course
}

export async function getTransaction({ adm }: { adm: string }) {
  const payload = await getPayloadHMR({ config })
  const transaction = await payload.find({
    collection: 'transaction',
    where: {
      Student: {
        equals: adm,
      },
    },
  })
  return transaction.docs
}

export async function getHeroImages() {
  const payload = await getPayloadHMR({ config })
  const { docs } = await payload.find({
    collection: 'hero',
  })
  return docs
}

export async function getAllImages() {
  const payload = await getPayloadHMR({ config })
  const { docs } = await payload.find({
    collection: 'media',
  })
  return docs
}

export async function createStudent({ student }: { student: TstudentFormSchema }) {
  const payload = await getPayloadHMR({ config })
  const res = await payload.create({
    collection: 'student',
    data: {
      'First Name': student.first_name,
      'Second Name': student.second_name,
      'National Identity Number': Number(student.national_id),
      Email: student.email_address,
      'Phone Number': student.phone_number,
    },
  })
  return res
}

export async function studentLogin({ email, password }: { email: string; password: string }) {
  const payload = await getPayloadHMR({ config })
  const res = await payload.find({
    collection: 'student',
    where: {
      Email: {
        equals: email,
      },
    },
  })
  return res.docs[0]
}

export async function getStudent({ adm }: { adm: string }) {
  const payload = await getPayloadHMR({ config })
  const { docs } = await payload.find({
    collection: 'student',
    where: {
      admission_number: {
        equals: adm,
      },
    },
  })

  return docs
}
