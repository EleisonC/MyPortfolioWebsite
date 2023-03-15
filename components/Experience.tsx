import { Experince } from '@/typings'
import React from 'react'
import ExperinceCard from './ExperinceCard'


type Props = {
  experiences: Experince[];
}

export default function Experience({ experiences }: Props) {
  return (
    <div className='h-screen flex  relative overflow-hidden flex-col text-left
    max-w-full p-8 justify-evenly mx-auto items-center'>
      <h3 
        className='top-24 text-2xl uppercase text-gray-500 tracking-[20px]'
      >
        Experience
      </h3>
      <div className='w-full flex space-x-5 overflow-x-scroll p-10 pt-5 snap-x snap-mandatory  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]'>
        {experiences?.map((experience) => (
              <ExperinceCard
              key={experience?._id}
              experience={experience}
              />
        ))
        }
        
      </div>
    </div>
  )
}