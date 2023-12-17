import { authOptions } from "@/app/utils/auth";
import SocialSignInButtons from "@/components/shared/SocialSignInButtons";
import { Session } from "inspector";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Login() {
  const session: Session | null = await getServerSession(authOptions);
  if (session) {
    return redirect("/");
  }

  return (
    <div className="my-24 sm:mx-auto sm:max-w-4xl px-5">
      <div className="bg-white shadow sm:rounded-lg flex gap-5 justify-between h-96 overflow-hidden">
        <div className="mt-6 flex gap-2 flex-col justify-center items-center mx-auto">
          <Link href={"/"} className="mb-5">
            <h1 className="text-3xl font-extrabold text-secondary">
              Explore <span className="text-primary">X</span>
            </h1>
          </Link>
          <span className="text-sm">
            Log in or Sign up with the links below
          </span>
          <SocialSignInButtons />
        </div>
        <Image
          src="/assets/access.jpg"
          width={500}
          height={500}
          alt="Sign up form image"
          className="object-cover lg:block hidden"
        />
      </div>
    </div>
  );
}
