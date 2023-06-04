import Button from "@/components/button";
import Image from "next/image";
import HeroImg from "public/hero.png";

export default function Home() {
  const itemsStyle = ` flex-auto   flex flex-col gap-[50px]`;

  return (
    <main className="flex items-center gap-[100px]">
      <div className={itemsStyle}>
        <h1 className="text-[73px] font-bold bg-gradient-to-b from-[#194C33] to-[#BBBBBB] bg-clip-text text-transparent">Better design for your digital products.</h1>
        <p className="font-[300] text-2xl">
          Turning your idea into Reality. We bring together the teams from the
          global tech industry
        </p>
        <Button text="See Our Works" url="/portfolio" />
      </div>
      <div className={itemsStyle}></div>
      <Image src={HeroImg} className="w-full h-[500px] object-contain animate-move" alt="random image" />
    </main>
  );
}
