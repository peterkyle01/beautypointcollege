import type { CollectionConfig } from 'payload/types'
import { Course } from './Course'
import { getCourse, getTransaction } from '@/lib/actions'
import PDF from '@/components/others/pdf'

export const Student: CollectionConfig = {
  slug: 'student',
  fields: [
    {
      type: 'row',
      fields: [
        {
          label: 'First Name',
          name: 'first_name',
          type: 'text',
        },
        {
          label: 'Second Name',
          name: 'second_name',
          type: 'text',
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          label: 'Admission Number',
          name: 'id',
          type: 'number',
          admin: {
            readOnly: true,
          },
          hooks: {
            beforeChange: [
              ({ value }) => {
                if (value) {
                  return value
                } else {
                  return Math.floor(Math.random() * (2400000 - 2100000 + 1)) + 2100000
                }
              },
            ],
          },
        },
        {
          label: 'Phone Number',
          name: 'phone_number',
          type: 'number',
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'Email',
          type: 'email',
        },
        {
          name: 'Gender',
          type: 'radio',
          defaultValue: 'male',
          options: [
            {
              label: 'Male',
              value: 'male',
            },
            {
              label: 'Female',
              value: 'female',
            },
          ],
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          label: 'National Identity Number',
          name: 'national_id',
          type: 'number',
        },
        {
          name: 'Gurdian Phone Number',
          type: 'number',
        },
      ],
    },
    {
      type: 'group',
      label: 'Couse Details',
      name: 'couse_details',
      fields: [
        {
          type: 'row',
          fields: [
            {
              label: 'Course Name',
              name: 'course_name',
              type: 'relationship',
              relationTo: Course.slug,
            },
          ],
        },
      ],
    },
    {
      type: 'array',
      name: 'Exams',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'Marks',
              type: 'number',
            },
            {
              name: 'Remarks',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      type: 'group',
      name: 'Finance',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'Total Paid',
              type: 'text',
              admin: {
                readOnly: true,
              },
              hooks: {
                beforeChange: [
                  async ({ data }) => {
                    try {
                      const res = await getTransaction({ adm: data?.id.toString() })
                      return res.reduce((acc, curr) => acc + curr.Amount, 0)
                    } catch (error) {
                      return 'No Course'
                    }
                  },
                ],
              },
            },
            {
              name: 'Total Billed',
              type: 'text',
              admin: {
                readOnly: true,
              },
              hooks: {
                beforeChange: [
                  async ({ data }) => {
                    try {
                      const {
                        fees_structure: {
                          admission_fee,
                          starter_kit,
                          first_installment,
                          second_installment,
                          internal_exams,
                          uniform_and_id_card,
                        },
                      } = await getCourse({ courseId: data?.couse_details.course_name })
                      return (
                        admission_fee +
                        starter_kit +
                        first_installment +
                        second_installment +
                        internal_exams +
                        uniform_and_id_card
                      ).toString()
                    } catch (error) {
                      return 'No Course'
                    }
                  },
                ],
              },
            },
          ],
        },
      ],
    },
  ],
}
