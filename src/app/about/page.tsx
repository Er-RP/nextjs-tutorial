import { Metadata } from 'next';
import Image from 'next/image'
import React from 'react'

export const metadata: Metadata = {
  title: "About Page",
  description: "About Page in Next JS 14 app to learn",
};

const About = () => {
  return (
    <div className='flex justify-center items-center gap-4 p-4'>
      {/* Images with specifc width and height */}
      <Image src="/about.jpg" alt='about' width={500} height={500}/> 

      {/* Images with fill logic - parent container shoul be relative and contain any one of the width/height + aspect or contain width + height */}
      <div className='relative w-full aspect-video'>
      <Image src="https://img.freepik.com/free-vector/business-team-discussing-ideas-startup_74855-4380.jpg?w=900&t=st=1712276286~exp=1712276886~hmac=8d8feef08f4f24e0d629d6c9c8a9f5f0d9b2d0181c40ef5ff927bbba2b02affa" alt='about' fill/>
      </div>
    </div>
  )
}

export default About