"use client";

import React, { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

const CardIcon = () => {
  const [iseClient, setIseClient] = useState(false);

  useEffect(() => {
    setIseClient(true);
  }, []);

  if (!iseClient) {
    return null;
  }
  return (
    <Link
      href={"/cart"}
      className="flex items-center text-sm gap-2 border border-gray-200 px2 py-1 rounded-md shadow-md hover:shadow-none hoverEffect"
    >
      <ShoppingBag className="text-darkBlue w-6 h-6" />

      <div className="flex flex-col">
        <p className="text-xs">
          <span className="font-semibold">0</span> items
        </p>

        <p className="font-semibold">Cart</p>
      </div>
    </Link>
  );
};

export default CardIcon;
