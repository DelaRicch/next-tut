import Image from "next/image";
import { FC } from "react";

interface BlogPostProps {}

const BlogPost: FC<BlogPostProps> = ({}) => {
  return (
    <main className="flex flex-col">
       <section className="flex items-center gap-20">
        <div className="flex-1 flex flex-col gap-5">
          <h1 className="text-[40px] font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit Eaque.
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptatem eos numquam inventore nobis corporis quidem culpa.
            Assumenda, natus. Saepe perspiciatis pariatur expedita sequi iusto,
            sapiente ab earum et nostrum.
          </p>
          <div className="flex items-center gap-4">
            <Image
              src="https://res.cloudinary.com/delaricch/image/upload/v1664978021/samples/people/boy-snow-hoodie.jpg"
              width={40}
              height={40}
              alt="avatar"
              className="w-14 h-14 rounded-full object-cover"
            />
            <span className="">John Doe</span>
          </div>
        </div>
        <div className="flex-1 relative">
          <Image 
          src='https://res.cloudinary.com/delaricch/image/upload/v1664978020/samples/bike.jpg'
          width={500}
          height={400}
          alt=""
          className="rounded-md object-cover transition duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </section>
      <section className="mt-[50px] text-[18px] font-[300]  text-justify flex flex-col gap-5">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum expedita a consequuntur esse earum nulla vitae, magni tempore, reiciendis ipsam vel. Quo similique molestias sed animi optio excepturi cumque, perspiciatis vitae accusantium, impedit quas doloremque vero vel maiores saepe dolorum omnis nisi corporis. Ducimus ipsum quidem explicabo dolorem voluptatum pariatur!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum expedita a consequuntur esse earum nulla vitae, magni tempore, reiciendis ipsam vel. Quo similique molestias sed animi optio excepturi cumque, perspiciatis vitae accusantium, impedit quas doloremque vero vel maiores saepe dolorum omnis nisi corporis. Ducimus ipsum quidem explicabo dolorem voluptatum pariatur!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum expedita a consequuntur esse earum nulla vitae, magni tempore, reiciendis ipsam vel. Quo similique molestias sed animi optio excepturi cumque, perspiciatis vitae accusantium, impedit quas doloremque vero vel maiores saepe dolorum omnis nisi corporis. Ducimus ipsum quidem explicabo dolorem voluptatum pariatur!</p>
      </section>
    </main>
  );
};

export default BlogPost;
