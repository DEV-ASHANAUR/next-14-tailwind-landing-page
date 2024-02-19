import Image from "next/image";
import Check from "../../public/assets/check.svg";
import CheckWhite from "../../public/assets/check-white.svg";
const Pricing = () => {
  return (
    <div className="px-5 lg:px-0 lg:container pt-14 sm:pt-32 mb-11" id="pricing">
      <h1 className="text-[#172026] text-[24px] font-medium text-center mb-4">
        Flexible plans for you
      </h1>
      <p className="text-center text-[#36485C] text-[16px] mb-10">
        No hidden fees!
      </p>
      <div className="flex flex-col lg:flex-row gap-y-7 lg:gap-x-6">
        <div className="w-full bg-[#F5F4FF] p-6 rounded flex flex-col lg:justify-between">
          <div>
          <h1 className="text-[#4328EB] text-[18px] mb-3 font-medium">
            Free Trial
          </h1>
          <p className="text-[#36485C] text-[16px] mb-3 font-medium">
            Perfect for testing the waters
          </p>
          <h1 className="text-[#172026] text-[24px] mb-3 font-medium">
            $0 <span className="text-[#5F7896]">/mo</span>
          </h1>
          <ul className="space-y-2">
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
          </div>
          <button className="text-[#4328EB] text-[16px] font-medium bg-[#fff] py-[14px] w-full mt-7">
            Start Trial
          </button>
        </div>
        <div className="w-full bg-[#4328EB] p-6 rounded flex flex-col lg:justify-between">
          <div>
          <h1 className="text-[#FFFFFF] text-[18px] mb-3 font-medium">
            Business
          </h1>
          <p className="text-[#F4F8FA] text-[16px] mb-3 font-medium">
            Perfect for testing the waters
          </p>
          <h1 className="text-[#FFFFFF] text-[24px] mb-3 font-medium">
            $500 <span className="text-[#F4F8FA]">/mo</span>
          </h1>
          <ul className="space-y-2">
            <li className="flex items-center gap-4 text-[16px] lg:text-[18px] text-[#F4F8FA]">
              <Image src={CheckWhite} alt="check" /> Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-4 text-[16px] lg:text-[18px] text-[#F4F8FA]">
              <Image src={CheckWhite} alt="check" /> Consectetur adipiscing elit
            </li>
            <li className="flex items-start gap-4 text-[16px] lg:text-[18px] text-[#F4F8FA]">
              <Image src={CheckWhite} alt="check" /> Sed do eiusmod tempor
              incididunt ut labore{" "}
            </li>
          </ul>
          </div>
          <button className="text-[#4328EB] text-[16px] font-medium bg-[#fff] py-[14px] w-full mt-7">
            Get Started
          </button>
        </div>
        <div className="w-full h-full relative bg-[#F5F4FF] p-6 rounded flex flex-col lg:justify-between">
          <div>
            <h1 className="text-[#4328EB] text-[18px] mb-3 font-medium">
              Enterprise
            </h1>
            <p className="text-[#36485C] text-[16px] mb-3 font-medium">
              Perfect for testing the waters
            </p>
            <h1 className="text-[#172026] text-[24px] mb-3 font-medium">
              Custom <span className="text-[#5F7896]"></span>
            </h1>
            <p className="text-[16px] text-[#36485C] mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.{" "}
            </p>

            <p className="text-[16px] text-[#36485C]">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.
            </p>
          </div>
          <button className="text-[#4328EB] text-[16px] font-medium bg-[#fff] py-[14px] w-full mt-7">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
