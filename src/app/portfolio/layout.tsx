import { FC, ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({children}) => {
  return <div>
    <h1 className="text-[5rem] font-bold">Our Works</h1>
    {children}
  </div>
}

export default Layout