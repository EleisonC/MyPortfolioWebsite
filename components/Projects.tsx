/* eslint-disable react/no-unescaped-entities */
import { urlFor } from '@/sanity';
import { Project } from '@/typings';
import { motion } from 'framer-motion';
import React from 'react'
import Image from 'next/image'
import { SocialIcon } from 'react-social-icons';

type Props = {
    projects: Project[]
}

export default function Projects({ projects }: Props) {
    console.log('Yes boss', projects)
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row
    max-w-ful justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-12 text-2xl uppercase text-gray-500 tracking-[20px]'>
            Projects
        </h3>
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]'>
            {projects.map((project, i) => (
                <div key={i} className='relative w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center
                p-10 md:p-44 h-screen'>
                    
                    <motion.img 
                    initial={{
                        opacity: 0
                    }}
                    transition={{ duration: 1.2 }}
                    whileInView={{ opacity: 1, y : 0 }}
                    viewport={{ once : true }}
                    className='h-40'
                    src={urlFor(project?.image).url()} alt="" />
                    <div className='space-y-10 px-10 md:10px max-w-6xl flex flex-col justify-center items-center '>
                        <div className='flex justify-center items-center'>
                            <h4 className='text-2xl text-semibold text-center'>
                                <span
                                className='underline decoration-[#F7AB0A]/50'
                                >Project {i + 1}:</span>{" "} {project?.title}
                            </h4>
                            <SocialIcon 
                                url={project?.linkToBuild} 
                                fgColor='gray'
                                bgColor='transparent'/>
                        </div>

                        <div className='flex space-x-2 my-2 overflow-y-scroll scrollbar-none'>
                        {project?.technologies.map((tech) => (
                            <Image
                            alt=''
                            key={tech?._id}
                            width={100}
                            height={100}
                            className='w-10 h-10 rounded-full object-size-down'
                            src={urlFor(tech?.image).url()} />
                        ))}
                        </div>
                        <p className='text-lg text-center md:text-left'>
                            {project?.summary}
                        </p>
                    </div>
                </div>
            ))}
            
        </div>
        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />
    </div>
  )
}