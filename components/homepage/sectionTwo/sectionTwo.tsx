import { constImage } from "@/utils/constImage";
import Image from "next/image";
import Link from "next/link";

const SectionTwo = () => {
    return (
        <>
            <div className="container_width flex flex-row items-center pt-20 px-5">
                <div className="section_heading text-center mb-4">Why EdPlatza</div>
            </div>
            <div className="container_width flex flex-row items-center pt-16 px-5">
                <div className="md:w-1/2 text-center py-4 text-white">
                    <div className="w-full pr-14"><Image src={constImage.why_edplatza_img} alt="" width={901} height={678} /></div>
                </div>
                <div className="md:w-1/2 text-left py-4 text-black pr-32 pl-20">
                    {
                        Array(3).fill(0).map((item: number, i) => {
                            return (
                                <div key={i}>
                                    <div className="flex flex-row items-center gap-5 mb-5">
                                        <div className="square_icon"><Image src={i === 0 ? constImage.why_edplatza_icon_1 : i === 1 ? constImage.why_edplatza_icon_2 : constImage.why_edplatza_icon_3} width={24} height={24} alt="Fintd the best" /></div>
                                        <div className="title_with_icon">Find the best schools for you</div>
                                    </div>
                                    <div className="para_text">Discover schools that match what’s important to you – location, majors, campus life, cost, career outcomes, and more.</div>
                                    <div className="flex flex-row items-center gap-3 discover_link"><Link href={"/"}>Discover schools</Link><Image src={constImage.right_arrow} width={30} height={5} alt="" /></div>
                                </div>
                            );
                        })
                    }

                </div>
            </div>
        </>
    );
};

export default SectionTwo;