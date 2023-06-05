import Button from "@/components/button";
import Image from "next/image";
import { FC } from "react";

interface CategoryProps {
  params: {
    category: string;
  };
}

const Category: FC<CategoryProps> = ({ params }) => {

    const containerStyles = "flex gap-[50px] mt-[50px] mb-[100px] odd:flex-row-reverse"
    const contentStyles = "flex-1 flex flex-col gap-5 justify-center"
    const imgContainerStyles = "flex-1 h-[500px] relative"

  return (
    <main className="">
      <h1 className="text-lightGreen text-[28px] font-bold">{params.category}</h1>
      <section className={containerStyles}>
        <div className={contentStyles}>
            <h3 className="text-[50px]">Test</h3>
            <p className="text-[21px]">Desc</p>
            <Button text="See More" url="#" />
        </div>
        <div className={imgContainerStyles}>
            <Image
            src='https://res.cloudinary.com/delaricch/image/upload/v1664978014/samples/ecommerce/analog-classic.jpg'
            fill={true}
            alt=""
            className="object-cover"
            />
        </div>
      </section>
      <section className={containerStyles}>
        <div className={contentStyles}>
            <h3 className="text-[50px]">Test</h3>
            <p className="text-[21px]">Desc</p>
            <Button text="See More" url="#" />
        </div>
        <div className={imgContainerStyles}>
            <Image
            src='https://res.cloudinary.com/delaricch/image/upload/v1664978014/samples/ecommerce/analog-classic.jpg'
            fill={true}
            alt=""
            className="object-cover"
            />
        </div>
      </section>
      <section className={containerStyles}>
        <div className={contentStyles}>
            <h3 className="text-[50px]">Test</h3>
            <p className="text-[21px]">Desc</p>
            <Button text="See More" url="#" />
        </div>
        <div className={imgContainerStyles}>
            <Image
            src='https://res.cloudinary.com/delaricch/image/upload/v1664978014/samples/ecommerce/analog-classic.jpg'
            fill={true}
            alt=""
            className="object-cover"
            />
        </div>
      </section>
      <section className={containerStyles}>
        <div className={contentStyles}>
            <h3 className="text-[50px]">Test</h3>
            <p className="text-[21px]">Desc</p>
            <Button text="See More" url="#" />
        </div>
        <div className={imgContainerStyles}>
            <Image
            src='https://res.cloudinary.com/delaricch/image/upload/v1664978014/samples/ecommerce/analog-classic.jpg'
            fill={true}
            alt=""
            className="object-cover"
            />
        </div>
      </section>
      <section className={containerStyles}>
        <div className={contentStyles}>
            <h3 className="text-[50px]">Test</h3>
            <p className="text-[21px]">Desc</p>
            <Button text="See More" url="#" />
        </div>
        <div className={imgContainerStyles}>
            <Image
            src='https://res.cloudinary.com/delaricch/image/upload/v1664978014/samples/ecommerce/analog-classic.jpg'
            fill={true}
            alt=""
            className="object-cover"
            />
        </div>
      </section>
      <section className={containerStyles}>
        <div className={contentStyles}>
            <h3 className="text-[50px]">Test</h3>
            <p className="text-[21px]">Desc</p>
            <Button text="See More" url="#" />
        </div>
        <div className={imgContainerStyles}>
            <Image
            src='https://res.cloudinary.com/delaricch/image/upload/v1664978014/samples/ecommerce/analog-classic.jpg'
            fill={true}
            alt=""
            className="object-cover"
            />
        </div>
      </section>
    </main>
  );
};

export default Category;
