import Link from "next/link"
import { FC } from "react"

interface ButtonProps {
  text: string
  url: string
}

const Button: FC<ButtonProps> = ({ text, url}) => {
  return (

      <Link href={url}>
      <button className="py-2 px-3 cursor-pointer border-none bg-lightGreen rounded-[5px] w-max text-white">{text}</button>
      </Link>
      )
}

export default Button

