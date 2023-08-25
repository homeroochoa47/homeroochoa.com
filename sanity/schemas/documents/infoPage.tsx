import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'infoPage',
  type: 'document',
  title: 'Info Page',
  fields: [
    defineField({
      name: 'infoImages',
      title: 'Info Images',
      type: 'array',
      of: [{
        name: 'showcaseImage',
        title: 'Showcase Image',
        type: 'image',
        fields: [
          {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          },
        ],
        options: {
          hotspot: true,
        },
      }],
    }),
  ]
});