import React from "react";
import Container from "./Container";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-lightBg text-sm">
      <Container className="flex items-center justify-between py-5">
        <p className="text-gray-50">
          &copy; 2024{" "}
          <span className="text-darkBlue font-semibold">
            Blessed Redeemer Fashion and Beauty. All rights reserved
          </span>
        </p>

        {/* Payment Card Image */}
        <div className="flex gap-5">
          <Image
            src="/card.png"
            alt="Visa"
            height={1000}
            width={1000}
            className="w-64 h-16 object-cover"
          />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
