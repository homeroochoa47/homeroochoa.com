import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projectsPage',
  title: 'Projects Page',
  type: 'document',
  fields: [
    defineField({
      name: 'projectList',
      title: 'Project List',
      type: 'array',
      of: [{type: 'project'}],
    }),
  ]
});