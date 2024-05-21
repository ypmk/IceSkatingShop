"use client";

import Image from "next/image";
import Link from "next/link";
import {ShoppingCart} from "lucide-react";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-10 py-2 px-10 flex gap-2 justify-between items-center bg-white max-sm:px-2">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={130} height={100} />
      </Link>

      <div>
        <Link href = "/">Home</Link>
      </div>

      <div>
        <Link href={"/cart"}><ShoppingCart/></Link>
      </div>


    </div>
  );
};

export default Navbar;
