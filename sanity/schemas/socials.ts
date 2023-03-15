import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
    {
      title: "Title",
      name: "title",
      description: "platform for social media",
      type: "string",
    },
    {
      title: "Url",
      name: "url",
      type: "url",
    }
  ],

})
