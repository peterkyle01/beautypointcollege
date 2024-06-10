import type { CollectionConfig } from 'payload/types'

export const Hero: CollectionConfig = {
  slug: 'hero',
  fields: [
    {
      name: 'Hero Image',
      type: 'relationship',
      relationTo: 'media',
      required: true,
      hasMany: true,
    },
  ],
}
