import Image from "next/image";
import Feature1 from "../../public/assets/feature-1.svg";
import Feature2 from "../../public/assets/feature-2.svg";
import Feature3 from "../../public/assets/feature-3.svg";
import Check from "../../public/assets/check.svg";
import bluebutton from "../../public/assets/blue-button.svg";
import greenButton from "../../public/assets/green-button.svg";
import pinkButton from "../../public/assets/pink-button.svg";
import Link from "next/link";
const Features = () => {
  return (
    <div className="px-5 lg:px-0 lg:container pt-14 sm:pt-32" id="features">
      <div className="sm:flex items-center mb-14">
        <div className="sm:w-1/2">
          <p className="text-[#0085FF] font-medium text-[16px] mb-2">
            Sales Monitoring
          </p>
          <h1 className="text-info font-medium text-[24px] lg:max-w-[572px] lg:text-[42px]  mb-6">
            Simplify your sales monitoring
          </h1>
          <Image className="m-auto sm:hidden" src={Feature1} alt="Feature1" />
          <p className="text-primary text-[16px] lg:max-w-[500px] lg:text-[18px] mt-6 mb-6">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a birds eye view with our customizable
            dashboard.{" "}
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-4 text-[16px] lg:text-[18px] text-primary">
              <Image src={Check} alt="check" /> Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-4 text-[16px] lg:text-[18px] text-primary">
              <Image src={Check} alt="check" /> Consectetur adipiscing elit
            </li>
            <li className="flex items-start gap-4 text-[16px] lg:text-[18px] text-primary">
              <Image src={Check} alt="check" /> Sed do eiusmod tempor incididunt
              ut labore{" "}
            </li>
          </ul>
          <Link
            className="mt-6 flex items-center gap-3 font-medium text-[#0085FF] text-[16px]"
            href="#"
          >
            Learn More <Image src={bluebutton} alt="bluebutton" />
          </Link>
        </div>
        <div className="sm:w-1/2 hidden sm:block">
          <Image className="w-full" src={Feature1} alt="Feature1" />
        </div>
      </div>
      <div className="sm:flex sm:flex-row-reverse sm:gap-6 items-center sm:mt-20 mb-14">
        <div className="sm:w-1/2 sm:px-14">
          <p className="text-[#00A424] font-medium text-[16px] mb-2">
            Customer Support
          </p>
          <h1 className="text-info font-medium text-[24px] lg:text-[42px] mb-6">
            Get in touch with your customers
          </h1>
          <Image className="m-auto sm:hidden" src={Feature2} alt="Feature1" />
          <p className="text-primary text-[16px] lg:max-w-[500px] lg:text-[18px] mt-6 mb-6">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a birds eye view with our customizable
            dashboard.{" "}
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-4 text-[16px] lg:text-[18px] text-primary">
              <Image src={Check} alt="check" /> Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-4 text-[16px] lg:text-[18px] text-primary">
              <Image src={Check} alt="check" /> Consectetur adipiscing elit
            </li>
            <li className="flex items-start gap-4 text-[16px] lg:text-[18px] text-primary">
              <Image src={Check} alt="check" /> Sed do eiusmod tempor incididunt
              ut labore{" "}
            </li>
          </ul>
          <Link
            className="mt-6 flex items-center gap-3 font-medium text-[#00A424] text-[16px]"
            href="#"
          >
            Learn More <Image src={greenButton} alt="greenbutton" />
          </Link>
        </div>
        <div className="sm:w-1/2 hidden sm:block">
          <Image className="w-full" src={Feature2} alt="Feature1" />
        </div>
      </div>
      <div className="sm:flex items-center sm:mt-20 sm:mb-20 mb-14">
        <div className="sm:w-1/2 sm:pr-20">
          <p className="text-[#EB2891] font-medium text-[16px] mb-2">
            Growth Monitoring
          </p>
          <h1 className="text-info font-medium text-[24px] lg:text-[42px] mb-6">
            Monitor your site’s new subscribers
          </h1>
          <Image className="m-auto sm:hidden" src={Feature3} alt="Feature1" />
          <p className="text-primary text-[16px] lg:max-w-[500px] lg:text-[18px] mt-6 mb-6">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a birds eye view with our customizable
            dashboard.{" "}
          </p>
          <div className="flex gap-6 items-center lg:mb-8">
            <div className="w-1/2">
                <h1 className="font-medium lg:text-[32px] text-[20px]">100+</h1>
                <p className="text-[16px] lg:text[18px] text-[#5F7896]">Lorem ipsum dolor sit</p>
            </div>
            <div className="w-1/2">
                <h1 className="font-medium lg:text-[32px] text-[20px]">800+</h1>
                <p className="text-[16px] lg:text[18px] text-[#5F7896]">Conse adipiscing elit</p>
            </div>
          </div>
          <Link
            className="mt-6 flex items-center gap-3 font-medium text-[#EB2891] text-[16px]"
            href="#"
          >
            Learn More <Image src={pinkButton} alt="pinkButton" />
          </Link>
        </div>
        <div className="sm:w-1/2 hidden sm:block">
          <Image className="w-full" src={Feature3} alt="Feature1" />
        </div>
      </div>
    </div>
  );
};

export default Features;
