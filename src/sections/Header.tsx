import Image from "next/image";
import logo from "@/assets/logo.svg";
import { MdOutlineMail, MdOutlineMenu } from "react-icons/md";
import Link from "next/link";
import { FaPhoneVolume, FaSearch } from "react-icons/fa";

export const TopHeader = () => {
  return (
    <div
      className="container mx-auto flex items-center justify-start py-5 text-black text-sm bg-white"
      style={{ maxWidth: "1600px" }}
    >
      <div className="flex items-center gap-1">
        <MdOutlineMail className="h-5 w-5" /> xlr.devteam03@devteam03gmail.com
        <FaPhoneVolume className="ml-5" />
        (+84) 377-783437
      </div>
    </div>
  );
};

export const Header = () => {
  return (
    <header className="sticky top-0 bg-primary-500">
      <TopHeader />
      {/* Phần menu điều hướng */}
      <div className="bg-primary-500 py-5">
        <div className="container mx-auto" style={{ maxWidth: "1600px" }}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Image src={logo} alt="logo" height={100} width={150} />

            {/* Navigation links */}
            <nav className="flex gap-10 text-white font-semibold text-base">
              <Link href={"/Trang Chủ"}>Trang Chủ</Link>
              <Link href={"/Tin Tức"}>Tin Tức</Link>
              <Link href={"/Hội Dòng"}>Hội Dòng</Link>
              <Link href={"/Hoạt Động"}>Hoạt Động</Link>
              <Link href={"/Quyên Góp"}>Quyên Góp</Link>
            </nav>

            <div className="flex items-center justify-center gap-4">
              {/* Menu Icon */}
              <MdOutlineMenu className="h-8 w-8  cursor-pointer text-white" />
              <FaSearch className="h-5 w-5  text-white" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
