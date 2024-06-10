import type { CollectionConfig } from 'payload/types'

export const Course: CollectionConfig = {
  slug: 'course',
  admin: {
    useAsTitle: 'Course Name',
  },
  fields: [
    {
      name: 'Course Image',
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
          name: 'Course Name',
          type: 'text',
        },
      ],
    },
    {
      name: 'Course Infomation',
      type: 'textarea',
    },
    {
      type: 'row',
      fields: [
        {
          name: 'Duration In Months',
          type: 'number',
        },
        {
          name: 'Total External Examinations',
          type: 'number',
        },
      ],
    },
    {
      name: 'Fees Structure',
      type: 'group',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'Admission Fee',
              type: 'number',
            },
            {
              name: 'Starter Kit',
              type: 'number',
            },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'First Installment',
              type: 'number',
            },
            {
              name: 'Second Installment',
              type: 'number',
            },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'Internal exams',
              type: 'number',
            },
            {
              name: 'Uniform and ID Card',
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
