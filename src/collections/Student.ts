import type { CollectionConfig } from 'payload/types'

export const Student: CollectionConfig = {
  slug: 'student',
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'First Name',
          type: 'text',
        },
        {
          name: 'Second Name',
          type: 'text',
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'Admission Number',
          type: 'number',
        },
        {
          name: 'Phone Number',
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
  ],
}
