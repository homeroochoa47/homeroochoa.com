import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {
  Article,
  Browser,
  Browsers,
  House,
  User,
} from '@phosphor-icons/react'

export default defineConfig({
  name: 'default',
  title: 'homeroochoa.com',

  projectId: '1ze0uqtm',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S) => 
        S.list()
        .title("Site Management")
        .items([
          S.listItem()
          .title("Pages")
          .id("pages")
          .icon(Article)
          .child(
            S.list()
            .title("Pages")
            .items([
              S.listItem()
              .title("Home")
              .id("homepage")
              .icon(House)
              .child(
                S.document()
                .schemaType("homePage")
                .documentId("homePage")
                .title("Home")
              ),
              S.listItem()
              .title("Info")
              .id("infoPage")
              .icon(User)
              .child(
                S.document()
                .schemaType("infoPage")
                .documentId("infoPage")
                .title("Info Page")
              ),
              S.listItem()
              .title("Projects")
              .id("projectsPage")
              .icon(Browsers)
              .child(
                S.document()
                .schemaType("projectsPage")
                .documentId("projectsPage")
                .title("Projects Page")
              ),
            ])
          ),
        ]),
    }), 
    visionTool()],

  schema: {
    types: schemaTypes,
  },
})

