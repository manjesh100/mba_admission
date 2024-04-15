import React from "react";
import Image from "next/image";
import Link from "next/link";
import { constImage } from "@/utils/constImage";

const Careers: React.FC = () => {
  return (
    <>
      {/* <div className="spin_loading">&nbsp;</div> */}
      {/* Section 1 Start */}
      <div className="container_width flex flex-row items-center pt-16 px-5">
          <div className="w-1/2 text-left py-4 text-black pr-32">
              <div className="text-4xl font-semibold line-clamp-6 leading-tight">How Work Should Work</div>
              <div className="text-2xl mb-4 mt-4 font-medium">We create opportunities for anyone in the world to build their business, brand, or dream.</div>
              <div className="mt-6">
                  <Link href={"/"} className="default_red_btn">Find Your Dream Job</Link>
              </div>
          </div>
          <div className="w-1/2 text-center py-4 text-white relative">
              <div className="w-full"><Image src={constImage.career_section_1_img_1} alt="" width={901} height={678} /></div>
              <div className="rectangle_box_with_icon left_align">
                <Image src={constImage.career_section_1_icon} width={120} height={120} alt="" />
                <div>
                  <div className="title_">Inspire a boundless future of work</div>
                  <div className="title_quote">Have bias towards action</div>
                </div>
              </div>
          </div>
      </div>
      {/* Section 1 End */}

      {/* Section 2 Start */}
      <div className="container_width flex flex-row items-center py-32 px-5">
          <div className="w-1/2 text-center py-4 text-white relative pl-20">
              <div className="w-full text-center"><Image className="margin_auto_0" src={constImage.career_section_2_img} alt="" width={450} /></div>
              <div className="rectangle_box_with_icon right_align">
                <Image src={constImage.career_section_1_icon} width={120} height={120} alt="" />
                <div>
                  <div className="title_">Inspire a boundless future of work</div>
                  <div className="title_quote">Have bias towards action</div>
                </div>
              </div>
          </div>
          <div className="w-1/2 text-left py-10 text-black">
            <div className="career_sec_2_right_side">
              <div className="heading_">Our Key Values</div>
              <div className="icon_row_sec">
                <Image src={constImage.key_values_icon_1} width={50} height={50} alt="" />
                <div>
                  <div className="title_2">Quality</div>
                  <div className="title_2_quote">We challenge ourselves and our teams to aim higher</div>
                </div>
              </div>
              <div className="icon_row_sec">
                <Image src={constImage.key_values_icon_2} width={50} height={50} alt="" />
                <div>
                  <div className="title_2">Data Rules</div>
                  <div className="title_2_quote">Data wins every argument. There’s data to support this</div>
                </div>
              </div>
              <div className="icon_row_sec">
                <Image src={constImage.key_values_icon_3} width={50} height={50} alt="" />
                <div>
                  <div className="title_2">Our Principles</div>
                  <div className="title_2_quote">Anyone can suggest new principles or challenge existing ones</div>
                </div>
              </div>
            </div>
          </div>
      </div>
    {/* Section 2 End */}

      {/* Section 3 Start */}
      <div className="container_width flex flex-row items-center pt-16 px-5">
      <div className="study_and_earn_sec">
        <div className="left_sec">
            <div className="title_heading_type_2">Our mission is to create economic opportunities so people have better lives</div>
            <div className="flex flex-row">
              <Link className="default_red_btn" href={"/"}>See open Positions</Link>
              <div className="flex">
              <Link className="gap-3 default_red_btn without_bg ml-4 flex" href={"/"}>
                <span>See Contract Roles</span>
                <Image src={constImage.right_arrow_purple_icon} width={20} height={20} alt="" /></Link>
              </div>
            </div>
        </div>
        <div className="right_sec">
            <Image src={constImage.career_sec_3_img_1} height={520} alt="" />
        </div>
      </div>
      </div>
      {/* Section 3 End */}

      {/* Section  4 Start */}
      <section className="full_width light_red_gray">
        <div className="container_width py-32 px-5">
          <div className="section_heading text-center">What we offer</div>
          <div className="section_heading_quote w-full max-w-screen-sm m-auto mt-6 mb-14 text-center">We offer you a huge number of advantages when applying for a job with us. Check out a few basic but important ones below.</div>
          <div className="what_we_offer_sec">
            <div className="grid_3_">
              <div className="image_icon"><Image src={constImage.what_we_offer_icon_1} width={50} height={50} alt="" /></div>
              <div className="heading_1">Technology</div>
              <div className="paragraph_">Perfecting the platform and applications with cutting-edge technologies</div>
            </div>
            <div className="grid_3_">
              <div className="image_icon"><Image src={constImage.what_we_offer_icon_2} width={50} height={50} alt="" /></div>
              <div className="heading_1">Product</div>
              <div className="paragraph_">Make an impact on the way the world works together</div>
            </div>
            <div className="grid_3_">
              <div className="image_icon"><Image src={constImage.what_we_offer_icon_3} width={50} height={50} alt="" /></div>
              <div className="heading_1">Data</div>
              <div className="paragraph_">The launchpad for successful data careers</div>
            </div>
            <div className="grid_3_">
              <div className="image_icon"><Image src={constImage.what_we_offer_icon_4} width={50} height={50} alt="" /></div>
              <div className="heading_1">Design</div>
              <div className="paragraph_">Cultivate your creative career on a global stage</div>
            </div>
            <div className="grid_3_">
              <div className="image_icon"><Image src={constImage.what_we_offer_icon_5} width={50} height={50} alt="" /></div>
              <div className="heading_1">Business</div>
              <div className="paragraph_">Leading global expansion to level the professional playing field</div>
            </div>
            <div className="grid_3_">
              <div className="image_icon"><Image src={constImage.what_we_offer_icon_6} width={50} height={50} alt="" /></div>
              <div className="heading_1">Customer care, trust and safety </div>
              <div className="paragraph_">Bills, Budgets, Balances, and Beyond</div>
            </div>
          </div>
        </div>
      </section>
      {/* Section  4 End */}

      {/* Section 5 Start*/}
      <div className="container_width flex flex-row items-center py-32 px-5">
          <div className="w-1/2 text-center py-4 text-white relative pl-20">
              <div className="w-full text-center"><Image className="margin_auto_0" src={constImage.testimonial_img_1} alt="" width={450} /></div>
          </div>
          <div className="w-1/2 text-left py-10 text-black">
            <div className="career_sec_2_right_side">
              <div className="heading_"><Image src={constImage.double_comma_icon} width={50} height={50} alt="" /></div>
              <div className="testimonial_msg">
              After almost a decade with EdPlatza, it’s getting hard to separate my own story from the Fiverr story. I am known as Janet from EdPlatza, I give my EdPlatza email when I’m asked to provide an email address, my emergency contact is a friend I met at EdPlatza, and I’m often told that the EdPlatza offices look just like my own living room.
              </div>
              <div className="client_name">Jenny Wilson</div>
              <div className="company_name">Internal Communications Manager</div>
            </div>
          </div>
      </div>
      {/* Section 5 End*/}

      {/* Section 6 Start */}
      <div className="container_width flex flex-row items-center pt-16 px-5">
        <div className="study_and_earn_sec pink_gradiant_flip">
          <div className="left_sec">
              <div className="title_heading_type_2">Become a Part of EdPlatza</div>
              <div className="flex flex-row">
                <Link className="default_red_btn" href={"/"}>See open Positions</Link>
                <div className="flex">
                <Link className="gap-3 default_red_btn without_bg ml-4 flex" href={"/"}>
                  <span>See Contract Roles</span>
                  <Image src={constImage.right_arrow_purple_icon} width={20} height={20} alt="" /></Link>
                </div>
              </div>
          </div>
          <div className="right_sec">
              <Image src={constImage.become_a_part_img} height={520} alt="" />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      {/* Section 6 End */}
    </>
  );
};

export default Careers;