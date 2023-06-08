import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface BlogProps {}

const getData = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/posts', { cache: 'no-store' });
    
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    
    // throw new Error("Failed to fetch data");
  }
}

const Blog: FC<BlogProps> = async ({}) => {

  const data = await getData();

  const containerStyles = "flex gap-[50px] mt-[50px] mb-[100px] odd:flex-row-reverse";
  const contentStyles = "flex-1 flex flex-col gap-5 justify-center";
  const imgContainerStyles = "flex-1 h-[500px] relative";

  return (
    <main className="flex flex-col">
      {
        data?.map((item: any) => (
          <Link href={`/blog/${item._id}`} className={containerStyles} key={item._id}>
            <div className={imgContainerStyles}>
              <Image
                src={item.img}
                fill={true}
                alt=""
                className="object-cover"
              />
            </div>
            <div className={contentStyles}>
              <h3 className="text-[50px] capitalize">{item.title}</h3>
              <p className="text-[21px] capitalize">{item.desc}</p>
            </div>
          </Link>
        ))
      }
    </main>
  );
};

export default Blog;
