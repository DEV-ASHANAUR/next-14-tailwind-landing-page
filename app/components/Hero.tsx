import Image from "next/image";
import BlurArrow from "../../public/assets/blue-button.svg";
import Gradient from "../../public/assets/Gradient.svg";
import HeroImage from "../../public/assets/Image.svg";
import HeroImage1 from "../../public/assets/Hero3.svg";
import Google from "../../public/assets/Google.svg";
import Slack from "../../public/assets/Slack.svg";
import Truspilot from "../../public/assets/Trustpilot.svg";
import Cnn from "../../public/assets/CNN.svg";
import Cluth from "../../public/assets/Clutch.svg";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="px-5 pt-4 pb-8 lg:container lg:max-w-[846px] lg:m-auto">
        <h1 className="text-info font-medium text-[32px] text-center lg:text-6xl lg:pt-11 lg:pb-6">
          Start monitoring your website like a pro
        </h1>
        <p className="text-primary text-center text-[16px] lg:text-[18px] mt-6">
          Get a birds eye view with our customizable dashboard. Stay on top of
          things! Revamp your work process with our game-changing feature. Boost
          productivity and efficiency!
        </p>
      </div>
      <div className="px-5 pb-2 lg:container flex justify-center items-center gap-x-6 lg:gap-x-10">
        <button className="bg-[#4328EB] px-8 py-4 text-[18px] font-medium text-white rounded">
          Try for free
        </button>

        <Link
          className="flex items-center gap-x-3 font-medium text-[#4328EB] text-[16px] "
          href="#"
        >
          View Pricing <Image src={BlurArrow} alt="BluArrow" />
        </Link>
      </div>
      <div className="w-full h-full relative flex justify-center">
        <Image src={Gradient} className="min-h-[500px] sm:min-h-[600px] md:min-h-[700px] w-full object-cover lg:min-h-[800px]" alt="Gradient" />
        <div className="absolute bottom-8 left-4 right-4 lg:container">
            <Image className="m-auto h-[310px] sm:h-[410px] md:h-[510px] lg:h-[600px]" src={HeroImage1} alt="heroImage" />
            <div className="lg:flex lg:justify-between lg:items-center lg:pt-[64px]">
                <p className="text-white text-[16px] lg:text-[18px] text-center pt-4 lg:pt-0 sm:pt-6 md:pt-8">Trusted by these companies</p>
                <div className="flex flex-wrap gap-x-8 xl:gap-[96px] justify-center items-center">
                    <Image src={Google} alt="google" />
                    <Image src={Slack} alt="Slack" />
                    <Image src={Truspilot} alt="Truspilot" />
                    <Image src={Cnn} alt="Cnn" />
                    <Image src={Cluth} alt="Cluth" />
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
