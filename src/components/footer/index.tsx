interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {

    const currentYear = new Date().getFullYear()

    return (
        <footer>
            <div className="">&copy;{currentYear} Dela Ricch&trade; || All rights reserved</div>
            <div className=""></div>
        </footer>
    )
}
