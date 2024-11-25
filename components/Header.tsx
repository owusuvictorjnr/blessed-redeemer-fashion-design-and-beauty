import Image from "next/image";
import React from "react";
import Container from "./Container";
import Form from "next/form";
import Link from "next/link";


const Header = () => {
  return (
    <header className="w-full bg-white py-4 border-b border-b-gray-400">
      {/* This is a custom Container using the shadcn component */}
      <Container className="flex  items-center justify-between gap-5">
        <Link href="/" className="">
          <Image
            src="/logo1.jpg"
            alt="Blessed Redeemer Fashion and Beauty"
            width={30}
            height={30}
            className="w- w-10 h-10 priority"
          />
        </Link>
        <Form action="/search" className="flex-1">
          <input
            type="text"
            name="query"
            placeholder="Search for products...."
            className="w-full border-2 border-gray-200 px-4 py-2.5 rounded-md focus-visible:border-darkBlue outline-none"
          />
        </Form>

        {/* tabs */}
        <div className="">tabs</div>
      </Container>
    </header>
  );
};

export default Header;
