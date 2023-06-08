"use client";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { EventHandler, FC } from "react";

interface LoginProps {}

const Login: FC<LoginProps> = ({}) => {


  const session = useSession()
  const router = useRouter()

  if (session.status === 'loading') {
    return <p>Loading...</p>
  }

  if (session.status === "authenticated") {
    router?.push("/dashboard")
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    signIn("credentials", { email, password });
  };

  const inputStyles =
    "p-3 bg-transparent border-2 border-#bbb text-[#bbb] text-[18px] font-bold";

  return (
    <main className="flex items-center justify-center flex-col gap-3">
      <form className="flex flex-col w-[350px] gap-5" onSubmit={handleSubmit}>
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
          Log In
        </button>
        <Link href="/dashboard/signup">Not Having an account?</Link>
      </form>
      <button onClick={() => signIn("google")}>Login with Google</button>
    </main>
  );
};

export default Login;
