"use client";
import { FC, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

interface DarkModeToggleProps {}

const DarkModeToggle: FC<DarkModeToggleProps> = ({}) => {
  const iconStyle = "text-[12px]";

  const { mode, handleToggle } = useContext(ThemeContext);

  return (
    <section
      onClick={handleToggle}
      className="w-[45px] h-[24px] relative cursor-pointer border border-lightGreen rounded-[30px] flex justify-between p-1 items-center"
    >
      <div className={iconStyle}>🌙</div>
      <div className={iconStyle}>🔆</div>
      <div
        className={`w-[15px] h-[15px] rounded-full bg-lightGreen absolute ${
          mode === "light" ? "left-1" : "right-1"
        }`}
      ></div>
    </section>
  );
};

export default DarkModeToggle;
