import Link from "next/link";

import { buttonVariants } from "@/components";

export default async function NotFound() {

  return (
    <div className="flex flex-col space-y-3 items-center text-center justify-center h-screen">
      <h1 className="text-4xl font-bold">
        404 <br />
        Page Not Found
      </h1>
      <Link
        href="/"
        className={buttonVariants({ variant: "default", className: "w-fit" })}
      >
        Go Home
      </Link>
    </div>
  );
}
