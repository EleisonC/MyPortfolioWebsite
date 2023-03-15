import React from 'react'
import { PhoneIcon, BeakerIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form';

type Props = {}

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData: any) => {
    console.log('We get here bro');
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(`Hello, my name is ${formData.name}. ${formData.message} (${formData.email})`);
    window.location.href = `mailto:christopher.kalule21@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:fle-row max-w-7xl 
     px-10 justify-evenly mx-auto items-center'>
      <h3 
        className='absolute top-24 text-2xl uppercase text-gray-500 tracking-[20px]'>
        Contact
      </h3>
      <div className='flex flex-col space-y-10 items-center'>
        <h4 className='text-4xl font-semibold '>
          I have got just what you need.{" "}
          <span className='decoration-[#F7AB0A]/50 underline '>Lets Talk</span>
        </h4>
        <div className='space-y-10'>
          {/* <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>+250785088882</p>
          </div> */}
          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>christopher.kalule21@gmail.com</p>
          </div>
        </div>
        {/* <form className='flex flex-col space-y-2 w-fit max-auto' onSubmit={handleSubmit(onSubmit)}>
          <div className='flex space-x-2'>
            <input {...register('name')} placeholder='Name' className='contactInput' type="text"/>
            <input {...register('email')} placeholder='Email' className='contactInput' type="email"/>
          </div>
          <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
          <textarea {...register('message')} placeholder='Message' className='contactInput'/>
          <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>
            Submit
          </button>
        </form> */}
      </div>
    </div>
  )
}
