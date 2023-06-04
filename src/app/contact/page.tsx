import Button from '@/components/button'
import Image from 'next/image'
import { FC } from 'react'

interface ContactProps {
  
}

const Contact: FC<ContactProps> = ({}) => {

  const formInputStyles = 'p-3 bg-transparent text-[#bbb] border border-[#bbb] rounded-lg'

  return <main>
    <h1 className="text-[50px] text-center mb-[50px]">Let&apos;s Keep in Touch </h1>
    <section className="flex item-center gap-[100px]">
      <div className="flex-1 h-[450px] relative">
        <Image 
        src='/contact.png'
        fill={true}
        alt='contact iamge'
        className='object-contain animate-move' />  
            </div>
      <form action="" className="flex-1 flex flex-col gap-5 ">
        <input type="text" placeholder='Name' className={formInputStyles} />
        <input type="email" placeholder='Email' className={formInputStyles} />
<textarea cols={30} rows={10} placeholder='Message' className={formInputStyles} ></textarea>
<Button url='#' text='Send' />
      </form>
    </section>
  </main>
}

export default Contact