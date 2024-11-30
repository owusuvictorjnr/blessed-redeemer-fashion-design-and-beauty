import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blessed Redeemer Fashion and Beauty",
  description: "...where quality meets affordability",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};
export default RootLayout;
