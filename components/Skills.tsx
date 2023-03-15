import { Skill as sk } from '@/typings'
import { motion } from 'framer-motion'
import React from 'react'
import Skill from './Skill'


type Props = {
    skills: sk[]
}

export default function Skills({ skills }: Props) {
  return (
    <motion.div 
    initial={{
        opacity:0
    }}
    whileInView={{ opacity:1 }}
    transition={{ duration:1.5 }}
    className='flex relative flex-col text-center md:text-left xl:flex-row pt-20 md:pt-40
    max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 text-2xl uppercase text-gray-500 tracking-[20px] md:top-[2rem]'>
            Skills
        </h3>
        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm md:top-[8rem]'>
            Hover over a skill for currency proficiency 
        </h3>
        <div className='grid grid-cols-5 gap-5'>
            {skills?.slice(0, skills.length / 2).map(skill => (
                <Skill key={skill._id} skill={skill}/>
            ))}

            {skills?.slice(skills.length / 2, skills.length).map(skill => (
                <Skill key={skill._id} skill={skill} directionLeft/>
            ))}
        </div>
    </motion.div>
  )
}