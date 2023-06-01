import Link from "next/link";

interface NavbarProps {}

interface LinksProps {
  id: number;
  title: string;
  url: string;
}

const links: LinksProps[] = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Portfolio", url: "/portfolio" },
  { id: 3, title: "Blog", url: "/blog" },
  { id: 4, title: "About", url: "/about" },
  { id: 5, title: "Contact", url: "/contact" },
  { id: 6, title: "Dashboard", url: "/dashboard" },
];

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <nav className="h-[100px] flex items-center justify-between ">
      <Link className="font-bold text-[22px]" href="/">
        DevRicch
      </Link>
      <div className="flex items-center gap-5">
        {links.map((link) => (
          <Link className="" href={link.url} key={link.id}>
            {link.title}
          </Link>
        ))}
        <button className="flex items-center p-[5px] text-white cursor-pointer rounded-[3px] border-none bg-lightGreen">
          Logout
        </button>
      </div>
    </nav>
  );
};
