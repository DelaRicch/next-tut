import Button from "@/components/button";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface BlogProps {}

const Blog: FC<BlogProps> = ({}) => {
  const containerStyles = "flex gap-[50px] mt-[50px] mb-[100px]";
  const contentStyles = "flex-1 flex flex-col gap-5 justify-center";
  const imgContainerStyles = "flex-1 h-[500px] relative";

  return (
    <main className="">
      <Link href="/blog/testId" className={containerStyles}>
        <div className={imgContainerStyles}>
          <Image
            src="https://res.cloudinary.com/delaricch/image/upload/v1664978014/samples/ecommerce/analog-classic.jpg"
            fill={true}
            alt=""
            className="object-cover"
          />
        </div>
        <div className={contentStyles}>
          <h3 className="text-[50px]">Test</h3>
          <p className="text-[21px]">Desc</p>
        </div>
      </Link>
      <Link href="/blog/testId" className={containerStyles}>
        <div className={imgContainerStyles}>
          <Image
            src="https://res.cloudinary.com/delaricch/image/upload/v1664978014/samples/ecommerce/analog-classic.jpg"
            fill={true}
            alt=""
            className="object-cover"
          />
        </div>
        <div className={contentStyles}>
          <h3 className="text-[50px]">Test</h3>
          <p className="text-[21px]">Desc</p>
        </div>
      </Link>
      <Link href="/blog/testId" className={containerStyles}>
        <div className={imgContainerStyles}>
          <Image
            src="https://res.cloudinary.com/delaricch/image/upload/v1664978014/samples/ecommerce/analog-classic.jpg"
            fill={true}
            alt=""
            className="object-cover"
          />
        </div>
        <div className={contentStyles}>
          <h3 className="text-[50px]">Test</h3>
          <p className="text-[21px]">Desc</p>
        </div>
      </Link>
      <Link href="/blog/testId" className={containerStyles}>
        <div className={imgContainerStyles}>
          <Image
            src="https://res.cloudinary.com/delaricch/image/upload/v1664978014/samples/ecommerce/analog-classic.jpg"
            fill={true}
            alt=""
            className="object-cover"
          />
        </div>
        <div className={contentStyles}>
          <h3 className="text-[50px]">Test</h3>
          <p className="text-[21px]">Desc</p>
        </div>
      </Link>
    </main>
  );
};

export default Blog;
