import type { CollectionConfig } from 'payload/types'
import { Student } from './Student'

export const Transaction: CollectionConfig = {
  slug: 'transaction',
  admin: {
    useAsTitle: 'Code',
  },
  fields: [
    {
      name: 'Student',
      type: 'relationship',
      relationTo: Student.slug,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'Code',
          type: 'text',
        },
        {
          name: 'Amount',
          type: 'number',
        },
      ],
    },
  ],
}
