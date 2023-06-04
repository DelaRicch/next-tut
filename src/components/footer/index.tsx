import Image from "next/image"

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {

    const currentYear = new Date().getFullYear()
    const iconStyle = `opacity-60 cursor-pointer`
    return (
        <footer className="flex items-center h-[50px] justify-between">
            <div className="">&copy;{currentYear} Dela Ricch&trade; || All rights reserved</div>
            <div className="flex items-center gap-[10px] text-sm ">
                <Image 
                    src='/1.png'
                    alt="Dela Ricch Social"
                    width={15}
                    height={15}
                    className={iconStyle}
                />
                <Image 
                    src='/2.png'
                    alt="Dela Ricch Social"
                    width={15}
                    height={15}
                    className={iconStyle}
                />
                <Image 
                    src='/3.png'
                    alt="Dela Ricch Social"
                    width={15}
                    height={15}
                    className={iconStyle}
                />
                <Image 
                    src='/4.png'
                    alt="Dela Ricch Social"
                    width={15}
                    height={15}
                    className={iconStyle}
                />
            </div>
        </footer>
    )
}
