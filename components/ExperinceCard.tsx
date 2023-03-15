import { urlFor } from '@/sanity'
import { Experince } from '@/typings'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'



type Props = {
    experience: Experince
}

export default function ExperinceCard({ experience }: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[400px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100
    opacity-40 cursor-pointer transition-opacity duration-200'>
        <motion.img
        initial={{ opacity:0, y:-100 }}
        whileInView={{opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once:true }}
        className='w-24 h-24 rounded-full object-size-down'
        src={urlFor(experience?.companyImage).url()}
        />
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>{experience.jobTitle}</h4>
            <p className='font-bold text-2xl mt-1'>{experience.company}</p>
            <div className='flex space-x-2 my-2 overflow-y-scroll scrollbar-none'>
                {experience?.technologies?.map((tech) => (
                    <Image
                    alt=''
                    key={tech?._id}
                    width={100}
                    height={100}
                    className='w-10 h-10 rounded-full object-size-down'
                    src={urlFor(tech?.image).url()}
                />
                ))}
            </div>
            <p className='uppercase py-5 text-gray-300'>
                { new Date(experience.startDate).toDateString()} -{" "}
                {experience.isCurrentlyWorkingHere
                ? "Present"
                : new Date(experience.endDate).toDateString()}
            </p>

            <ul className='list-disc space-y-4 ml-5 text-lg max-h-48 md:h- overflow-y-scroll pr-5'>
                {experience.points.map((point, i) => (
                    <li
                    key={i}
                    >{point}</li>
                ))}
            </ul>
        </div>
    </article>
  )
}