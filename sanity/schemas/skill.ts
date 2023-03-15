import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      title: "Title",
      name: "title",
      description: "Title of skill",
      type: "string"
    },
    {
      title: "progress",
      name: "Progress",
      type: "number",
      description: "Progress of the skll from  0 to 100%",
      validation: (Rule) => Rule.min(0).max(100)
    },
    {
      title: "Image",
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      }
    }
  ],

})
