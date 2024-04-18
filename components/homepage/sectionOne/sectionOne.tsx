import { constImage } from "@/utils/constImage";
import Image from "next/image";
import Link from "next/link";

const SectionOne = () => {
    return (
        <>
        <div className="container_width mx-auto flex flex-col md:flex-row items-center pt-16 px-5">
      <div className="md:w-1/2 text-left py-4 text-black pr-6 md:pr-32">
        <div className="text-3xl mb-4 font-medium">A Chicago Booth Alumnus Initiative</div>
        <h1 className="section_1_heading">
          Attend the <span className="hidden md:inline">event</span> of your dreams and receive study and career assistance.
        </h1>
        <div className="mt-6">
          <Link href={"/"} className="default_red_btn">Explore Marketplace</Link>
          <Link href={"/"} className="default_red_btn without_bg ml-5">Become a Talent</Link>
        </div>
        <div className="flex flex-row items-center gap-3 mt-12 relative">
          <div className="rotate_arrow_img"><Image src={constImage.rotate_arrow} width={50} height={10} alt="" /></div>
          <Image src={constImage.professionals_users_count_img} width={140} height={40} alt="" />
          <div className="para_text">10K+ Professionals</div>
        </div>
      </div>
      <div className="md:w-1/2 text-center py-4 text-white">
        <div className="w-full"><Image src={constImage.homepage_section_1_img} alt="" width={901} height={678} /></div>
      </div>
    </div>
        </>
    );
};

export default SectionOne;