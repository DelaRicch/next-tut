"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";
import useSWR from "swr";
interface DashboardProps {}

const Dashboard: FC<DashboardProps> = ({}) => {
  const router = useRouter();
  const session = useSession();

  const fetcher = (...args: [string, RequestInit]) =>
    fetch(...args).then((res) => res.json());
  const { data, error, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/posts?username=${session?.data?.user?.name}`,
    fetcher
  );

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data?.user?.name,
        }),
      });
      mutate();
      e.target.reset()
    } catch (error) {
      console.error(error);
    }
  };

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
    return <p>Loading...</p>;
  }

  const inputFieldsStyles =
    "p-[10px] bg-transparent border border-[#bbb] rounded-[5px] text-[#bbb] font-bold";

  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.error(err);
    }
  };

  if (session.status === "authenticated") {
    return (
      <main className="flex gap-[60px]">
        <div className="flex-1 flex  flex-col gap-4 h-[80vh] overflow-y-scroll">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            data?.map((post: any) => (
              <div
                className="flex items-center justify-between h-full mr-4"
                key={post._id}
              >
                <div className="w-[200px]">
                  <Image src={post.img} alt="Image" width={200} height={130} />
                </div>
                <h2 className="">{post.title}</h2>
                <button
                  onClick={() => handleDelete(post._id)}
                  className="text-red-600"
                >
                  X
                </button>
              </div>
            ))
          )}
        </div>
        <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-5">
          <h2>Add New Post</h2>
          <input
            type="text"
            placeholder="Title"
            className={inputFieldsStyles}
          />
          <input
            type="text"
            placeholder="Description"
            className={inputFieldsStyles}
          />
          <input
            type="text"
            placeholder="Image"
            className={inputFieldsStyles}
          />
          <textarea
            cols={30}
            rows={10}
            className={inputFieldsStyles}
          ></textarea>
          <button className="p-5 cursor-pointer bg-lightGreen border-none rounded-[5px] text-[#EEE] font-bold">
            Send
          </button>
        </form>
      </main>
    );
  }
};

export default Dashboard;
