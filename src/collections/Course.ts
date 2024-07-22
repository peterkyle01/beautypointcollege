import type { CollectionConfig } from 'payload/types'

export const Course: CollectionConfig = {
  slug: 'course',
  admin: {
    useAsTitle: 'Course Name',
  },
  fields: [
    {
      label: 'Course Image',
      name: 'course_image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'Type',
          type: 'select',
          options: [
            {
              label: 'Diploma',
              value: 'diploma',
            },
            {
              label: 'Certificate',
              value: 'certificate',
            },
          ],
        },
        {
          label: 'Course Name',
          name: 'course_name',
          type: 'text',
        },
      ],
    },
    {
      label: 'Course Infomation',
      name: 'course_information',
      type: 'textarea',
    },
    {
      type: 'row',
      fields: [
        {
          label: 'Duration In Months',
          name: 'duration_in_months',
          type: 'number',
        },
        {
          label: 'Total External Examinations',
          name: 'total_external_examinations',
          type: 'number',
        },
      ],
    },
    {
      label: 'Fees Structure',
      name: 'fees_structure',
      type: 'group',
      fields: [
        {
          type: 'row',
          fields: [
            {
              label: 'Admission Fee',
              name: 'admission_fee',
              type: 'number',
            },
            {
              label: 'Starter Kit',
              name: 'starter_kit',
              type: 'number',
            },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              label: 'First Installment',
              name: 'first_installment',
              type: 'number',
            },
            {
              label: 'Second Installment',
              name: 'second_installment',
              type: 'number',
            },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              label: 'Internal exams',
              name: 'internal_exams',
              type: 'number',
            },
            {
              label: 'Uniform and ID Card',
              name: 'uniform_and_id_card',
              type: 'number',
            },
          ],
        },
      ],
    },
    {
      name: 'Course Syllabus',
      type: 'group',
      fields: [
        {
          name: 'Topics',
          type: 'array',
          fields: [
            {
              name: 'Topic',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      name: 'Course Requirements',
      type: 'group',
      fields: [
        {
          name: 'Items',
          type: 'array',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'Item',
                  type: 'text',
                },
                {
                  name: 'Quantity',
                  type: 'number',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
