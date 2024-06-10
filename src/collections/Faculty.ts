import type { CollectionConfig } from 'payload/types'

export const Faculty: CollectionConfig = {
  slug: 'faculty',
  admin: {
    useAsTitle: 'First Name',
  },
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
          name: 'Staff Number',
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
