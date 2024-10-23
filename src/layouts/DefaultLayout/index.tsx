import { Header, TopHeader } from "@/sections/Header";
import Hero from "@/sections/Hero";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const DefaultLayout = ({ children }: Props) => {
  return (
    <div>
      <TopHeader />
      <Header />
      <Hero />
      {children}
      <div className="text-black">footer</div>
    </div>
  );
};
