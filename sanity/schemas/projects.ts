import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      title: "Title",
      name: "title",
      description: "Title of the project",
      type: "string",
    },
    {
      title: "Image",
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      title: "Summary",
      name: "summary",
      type: "text",
    },
    {
      title: "Technologies",
      name: "technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
    },
    {
      title: "LinkToBuild",
      name: "linkToBuild",
      type: "url"
    }

  ],

})
