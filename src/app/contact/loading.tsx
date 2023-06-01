import { FC } from 'react'

interface LoadingProps {
  
}

const Loading: FC<LoadingProps> = ({}) => {
  return <div className='w-full h-full flex items-center justify-center bg-red-300'>
    <div className="w-10 h-10 rounded-full border-[10px] border-slate-800 animate-spin"></div>
  </div>
}

export default Loading