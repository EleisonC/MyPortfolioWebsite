import { urlFor } from '@/sanity'
import { Skill as Sk } from '@/typings'
import { motion } from 'framer-motion'
import React from 'react'


type Props = {
    directionLeft?: boolean
    skill: Sk
}

export default function Skill({ directionLeft, skill }: Props) {
    console.log(skill)
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
            initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={urlFor(skill?.image).url()}
            className='rounded-full border-non object-scale-down h-16 w-16 xl:w-24 xl:h-24 md:w-16 md:h-16
            filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
        ease-in-out group-hover:bg-white h-16 w-16 xl:w-24 xl:h-24 md:w-16 md:h-16 rounded-full z-0  '>
            <div className='flex items-center justify-center h-full '>
                <p className='text-xl font-bold text-black opacity-100'>
                    {skill.Progress}%
                </p>
            </div>
        </div>
    </div>
  )
}