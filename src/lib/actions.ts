'use server'

import config from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'

export async function getCourses() {
  const payload = await getPayloadHMR({ config })
  const { docs: courses } = await payload.find({
    collection: 'course',
  })
  return courses
}

export async function getCourse({ courseId }: { courseId: string }) {
  const payload = await getPayloadHMR({ config })
  const course = await payload.findByID({
    collection: 'course',
    id: courseId,
  })
  return course
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
