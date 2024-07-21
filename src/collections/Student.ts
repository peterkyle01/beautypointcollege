import type { CollectionConfig } from 'payload/types'
import { Course } from './Course'

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
          name: 'admission_number',
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
      name: 'Couse Details',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'Course Name',
              type: 'relationship',
              relationTo: Course.slug,
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
              name: 'Total Billed',
              type: 'relationship',
              admin: {
                readOnly: true,
              },
              relationTo: Course.slug,
              filterOptions: ({ data }) => {
                return {}
              },
            },
            {
              name: 'Total Paid',
              type: 'number',
              admin: {
                readOnly: true,
              },
            },
          ],
        },
      ],
    },
  ],
}
