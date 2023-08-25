import {defineField, defineType} from 'sanity'

export default {
    name: 'project',
    title: 'Project',
    type: 'object',
    fields: [
      defineField({
        name: 'coverImage',
        title: 'Cover Image',
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
      }),
      defineField({
        name: 'ProjectImages',
        title: 'Project Images',
        type: 'array',
        of: [{
          name: 'projectImage',
          title: 'Project Image',
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
      defineField({
        name: 'projectName',
        title: 'Project Name',
        type: 'string',
      }),
      defineField({
        name: 'projectYear',
        title: 'Project Year',
        type: 'string',
      }),
      defineField({
        name: 'projectDescription',
        title: 'Project Description',
        type: 'text',
      }),
      defineField({
        name: 'projectURL',
        title: 'Project URL',
        type: 'string',
      }),
    ],
  };
  