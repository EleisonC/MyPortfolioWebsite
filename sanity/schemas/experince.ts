import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experince',
  title: 'Experince',
  type: 'document',
  fields: [
    {
      title: 'JobTitle',
      name: "jobTitle",
      type: "string",
    },
    {
      title: "CompanyImage",
      name: "companyImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      title: "Company",
      name: "company",
      type: "string",
    },
    {
      title: "StartDate",
      name: "startDate",
      type: "date"
    },
    {
      title: "EndDate",
      name: "endDate",
      type: "date",
    },
    {
      title: "isCurrentlyWorkingHere",
      name: "isCurrentlyWorkingHere",
      type: "boolean"
    },
    {
      title: "Technologies",
      name: "technologies",
      type: "array",
      of: [{ type: 'reference', to: { type: "skill" } }]
    },
    {
      title: "Points",
      name: "points",
      type: "array",
      of: [{ type: "string" }]
    }
  ],

})
