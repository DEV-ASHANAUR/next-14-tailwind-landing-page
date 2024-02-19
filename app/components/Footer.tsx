import Link from "next/link";
import Fb from "../../public/assets/Facebook.svg";
import X from "../../public/assets/X.svg";
import Feed from "../../public/assets/Feed.svg";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="px-4 lg:px-0 lg:container">
      <div className="flex flex-col lg:flex-row justify-between items-center py-6 gap-y-6 lg:gap-y-6">
        <p className="text-[#5F7896] text-[16px] font-medium text-center lg:text-left">© Copyright 2024. Your Site. All rights reserved.</p>
        <div className="flex items-center gap-x-14">
          <Link href="#">
            <Image src={X} alt="x" />
          </Link>
          <Link href="#">
            <Image src={Fb} alt="Fb" />
          </Link>
          <Link href="#">
            <Image src={Feed} alt="Feed" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
