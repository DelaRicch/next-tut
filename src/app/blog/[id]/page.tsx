import Image from "next/image";
import { FC } from "react";

interface BlogPostProps {
  params: {
    id: string
  };
}

const getData = async (id: any) => {
  try {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
      cache: 'no-store'
    });
    return res.json();
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

export async function generateMetadata({ params }: BlogPostProps) {
  const post = await getData(params.id)
  const PostTitle = post.title
  const PostDesc = post.desc

  return {
    title: PostTitle.charAt(0).toUpperCase() + PostTitle.slice(1),
    description: PostDesc.charAt(0).toUpperCase() + PostDesc.slice(1),
  };
}

const BlogPost: FC<BlogPostProps> = async ({ params }) => {
  const data = await getData(params.id);
  

  return (
    <main className="flex flex-col">
       <section className="flex items-center gap-20">
        <div className="flex-1 flex flex-col gap-5">
          <h1 className="text-[40px] font-bold capitalize">
            {data.title}
          </h1>
          <p className="">
            {data.desc}
          </p>
          <div className="flex items-center gap-4">
            <Image
              src={data.img}
              width={40}
              height={40}
              alt="avatar"
              className="w-14 h-14 rounded-full object-cover"
            />
            <span className="">{data.username}</span>
          </div>
        </div>
        <div className="flex-1 relative">
          <Image 
          src={data.img}
          width={500}
          height={400}
          alt=""
          className="rounded-md object-cover transition duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </section>
      <section className="mt-[50px] text-[18px] font-[300]  text-justify flex flex-col gap-5">
    {data.content}
      </section>
    </main>
  );
};

export default BlogPost;
