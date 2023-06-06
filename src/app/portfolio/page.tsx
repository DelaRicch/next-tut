import Link from 'next/link'
import { FC } from 'react'

interface PortfolioProps {
  
}


const Portfolio: FC<PortfolioProps> = ({}) => {
  
  const linkStyles = 'border-[3px] border-[#bbb] rounded-[5px] relative h-[300px] w-[300px] group bg-cover bg-no-repeat bg-center'
  const titleStyles = "absolute right-[10px] bottom-[10px] text-2xl font-bold  group-hover:text-lightGreen"

  return <main>
    <h2 className="my-5 text-[2.5rem] font-bold">Choose a gallery</h2>
    <div className="flex items-center gap-10 ">
      <Link href='/portfolio/illustrations' className={`${linkStyles} bg-illustration  `}>
        <span className={titleStyles}>Illustrations</span>
      </Link>
      <Link href='/portfolio/websites' className={`${linkStyles} bg-website`}>
        <span className={titleStyles}>Websites</span>
      </Link>
      <Link href='/portfolio/applications' className={`${linkStyles} bg-application`}>
        <span className={titleStyles}>Applications</span>
      </Link>
      
    </div>
  </main>
}

export default Portfolio