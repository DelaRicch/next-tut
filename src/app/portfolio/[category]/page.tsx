import Button from "@/components/button";
import Image from "next/image";
import { FC, Key, ReactNode } from "react";
import { items } from "./data";
import { notFound } from "next/navigation";
interface CategoryProps {
  params: {
    category: "applications" | "illustrations" | "websites";
  };
}

const getData = (cat: keyof typeof items) => {
  const data = items[cat];

  if (data) {
    return data;
  }
  return notFound();
};

const Category: FC<CategoryProps> = ({ params }) => {
  const containerStyles =
    "flex gap-[50px] mt-[50px] mb-[100px] odd:flex-row-reverse";
  const contentStyles = "flex-1 flex flex-col gap-5 justify-center";
  const imgContainerStyles = "flex-1 h-[500px] relative";

  const data = getData(params.category);

  return (
    <main className="">
      <h1 className="text-lightGreen text-[28px] font-bold">
        {params.category}
      </h1>

      {data.map(
        (item: {
          desc: ReactNode;
          title: ReactNode;
          image: string;
          id: Key | null | undefined;
        }) => (
          <section className={containerStyles} key={item.id}>
            <div className={contentStyles}>
              <h3 className="text-[50px]">{item.title}</h3>
              <p className="text-[21px]">{item.desc}</p>
              <Button text="See More" url="#" />
            </div>
            <div className={imgContainerStyles}>
              <Image
                src={item.image}
                fill={true}
                alt=""
                className="object-cover"
              />
            </div>
          </section>
        )
      )}
    </main>
  );
};

export default Category;
