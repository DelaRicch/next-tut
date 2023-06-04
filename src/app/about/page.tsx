import Button from '@/components/button'
import Image from 'next/image'
import { FC } from 'react'

interface AboutProps {
  
}

const About: FC<AboutProps> = ({}) => {
  return <section className=''>
    <div className="w-full h-[300px] relative ">
      <Image
      src='https://res.cloudinary.com/delaricch/image/upload/v1664978026/samples/imagecon-group.jpg'
      alt='Random Image'
      fill={true}
      className='grayscale object-cover'
      />
      <div className="absolute bottom-5 left-5 bg-lightGreen text-white p-1">
        <h1>Digital Storytellers</h1>
        <h2>Handcrafting award winning digital experiences</h2>
      </div>
    </div>
    <div className="flex gap-[100px]">
      <div className=" flex-auto">
        <h3 className='text-[40px] font-bold'>Who Are we?</h3>
        <p className='text-lg font-[300] text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi officia ea eos ut. Praesentium iure quia odit excepturi eos culpa accusamus, suscipit voluptatibus eligendi assumenda. Corporis, aspernatur in. Quo sunt 
          <br /> <br /> 
          repellat tenetur culpa neque perspiciatis cumque ipsa doloribus est. Nostrum unde nam quod aspernatur iste adipisci deleniti facilis labore sapiente officiis enim, tempora libero nulla accusantium ducimus numquam explicabo minus.</p>
      </div>
      <div className=" flex-auto">
        <h3 className='text-[40px] font-bold'>What We Do?</h3>
        <p className='text-lg font-[300] text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, a. Ab, illo. Non quam soluta temporibus distinctio praesentium eaque saepe quisquam? Perspiciatis esse fuga laudantium in saepe asperiores quaerat facere. 
        <br />  <br />
        - Dynamic Websites
        <br /> 
         - Fast and Handy 
         <br />
         - Mobile Apps
        </p>
        <br />
        <Button url='contact' text='Contact' />
      </div>
    </div>
  </section>
}

export default About
 