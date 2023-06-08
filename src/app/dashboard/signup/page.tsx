"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";

interface SignUpProps {}

const SignUp: FC<SignUpProps> = ({}) => {
  const [error, setError] = useState(false);
  const router = useRouter()

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name, email, password,
        }),
      });
      res.status === 201 && router.push("/dashboard/login?success=Account has been created")
    } catch (error) {
      setError(true);
    }
  };

  const inputStyles =
    "p-3 bg-transparent border-2 border-#bbb text-[#bbb] text-[18px] font-bold";

  return (
    <main className="flex items-center justify-center flex-col gap-3">
      <form className="flex flex-col w-[350px] gap-5" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          className={inputStyles}
          autoComplete="username"
          required
        />
        <input
          type="text"
          placeholder="Email"
          className={inputStyles}
          autoComplete="email"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className={inputStyles}
          autoComplete="current-password"
          required
        />
        <button className="w-[350px] p-3 cursor-pointer bg-lightGreen border-none rounded-[5px] text-[#eee] font-bold">
          Sign Up
        </button>
        <Link href="/dashboard/login">Login with an existing account</Link>

        {error && "Something wen wrong"}
      </form>
    </main>
  );
};

export default SignUp;
