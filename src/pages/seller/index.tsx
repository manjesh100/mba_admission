import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { EmblaOptionsType } from "embla-carousel";
import { constImage } from '@/utils/constImage';
import SpecializedSlider from './specializedSlider';
import { specializedServices } from '@/utils/constantData';
import CarouselTestimonial from '@/components/homepage/sectionEight/carouselTestimonial';
import { useGetTestiMonialsListQuery } from '@/ApiServices/testimonial/testimonial';

const OPTIONS: EmblaOptionsType = {
    slidesToScroll: "auto",
    containScroll: "trimSnaps"
};

const SellerPage: React.FC = () => {
  const { data } = useGetTestiMonialsListQuery();
  return (
    <>
        <div className="container_width flex flex-row items-center pt-16 px-5">
            <div className="w-1/2 text-left py-4 text-black pr-32">
                <div className="text-5xl font-semibold line-clamp-6 leading-tight">Connect with Ambitious MBA Students Worldwide: Become a Seller on EdPlatza</div>
                <div className="text-3xl mb-4 font-medium">Showcase Your Expertise and Reach a Wide Audience</div>
                <div className="flex align-middle mt-6">
                    <Link href={"/"} className="default_red_btn without_bg">
                        <span className='video_demo_btn'>
                            <Image src={constImage.play_circle_icon} width={24} height={24} alt="" />
                            <span>Demo</span> 
                        </span>
                        </Link>
                    <Link href={"/"} className="default_red_btn ml-5">Become a Seller Today</Link>
                </div>
                <div className="flex flex-row items-center gap-3 mt-12 relative">
                    <div className="rotate_arrow_img"><Image src={constImage.rotate_arrow} width={50} height={10} alt="" /></div>
                    <Image src={constImage.professionals_users_count_img} width={140} height={40} alt="" />
                    <div className="para_text">10K+ Professionals</div>
                </div>
            </div>
            <div className="w-1/2 py-4 text-white">
                <div className="w-full text-right"><Image src={constImage.seller_image_1} className='rounded-lg' alt="" width={701} height={478} /></div>
            </div>
        </div>
        <br />
        <br />
        <div className='container_width flex flex-row items-center pt-16 px-5'>
            <div className='who_we_are_seller_sec'>
                <div className='small_title'>Who We Are</div>
                <div className='large_title'>Join <span>EdPlatza</span> and Make a Difference</div>
                <div className='para_text_seller'>At EdPlatza, we are passionate about empowering ambitious MBA students and connecting them with the best institutions and partners worldwide. With a global network of esteemed higher education institutions and recruiting partners, we offer personalized and user-friendly experiences. Our advanced matching algorithms ensure targeted exposure, empowering students to find their perfect fit. Join us at EdPlatza and shape the future of business with us.</div>
                <div>
                    <Link href={"/"} className="default_red_btn without_bg">
                        <span className='video_demo_btn'>
                            <span>Explore Marketplace</span> 
                        </span>
                    </Link>
                    <Link href={"/"} className="default_red_btn ml-5">Sign Up Now</Link>
                </div>
            </div>
        </div>
        <br />
        <br />
        <div className="container_width flex flex-row items-center pt-16 px-5">
            <div className="w-1/2 text-left py-4 text-black pr-6">
            <div className='who_we_are_seller_sec'>
                <div className='small_title'>Benefits</div>
                <div className='large_title'>Why Sell on <span>EdPlatza?</span></div>
                <div className='para_text_seller'>Connect with Students and Make a Difference</div>
                <div className='content_with_left_border'>
                    <div className='heading_'>Global Reach</div>
                    <div className='heading_content_'>EdPlatza connects you with international MBA students who are actively seeking higher education institutions and recruiting partners worldwide. Your offerings will be showcased to a truly global audience, giving you access to a pool of talented candidates from diverse backgrounds.</div>
                    <div className='heading_'>Targeted Exposure</div>
                    <div className='heading_content_'>EdPlatza enables you to target your ideal audience effortlessly. Our platform uses advanced matching algorithms to pair students with programs and partners that align with their career goals and aspirations.</div>
                    <div className='heading_'>Streamlined Engagement</div>
                    <div className='heading_content_'>With EdPlatza, managing your interactions with prospective students has never been easier.</div>
                    <div className='heading_'>Data-Driven Insights</div>
                    <div className='heading_content_'>Making informed decisions is key to success. EdPlatza provides you with valuable data and insights about your performance and engagement with students.</div>
                </div>
            </div>
            </div>
            <div className="w-1/2 py-4 text-white">
            <div className="w-full text-right"><Image src={constImage.seller_image_2} className='rounded-lg' alt="" width={701} height={478} /></div>
            </div>
            <br />
            <br />
        </div>
        <div className="container_width pt-16 px-5">
            <div className="section_heading text-center">What we offer</div>
            <div className="section_heading_quote w-full max-w-screen-sm m-auto mt-6 mb-14 text-center">Start Selling in Three  imple Steps</div>
            <div className='how_it_work_grid_sec'>
                <div className='grid_3'>
                    <div className='icon_bg'><Image src={constImage.pencil_icon} width={65} height={65} alt='' /></div>
                    <div className='title_name'>1. Create Your Profile</div>
                </div>
                <div className='grid_3'>
                    <div className='icon_bg'><Image src={constImage.list_icon} width={65} height={65} alt='' /></div>
                    <div className='title_name'>2. List Your Services</div>
                </div>
                <div className='grid_3'>
                    <div className='icon_bg'><Image src={constImage.engage_icon} width={65} height={65} alt='' /></div>
                    <div className='title_name'>3. Engage with Students</div>
                </div>
            </div>
        </div>
        <div className='container_width flex flex-row items-center pt-16 px-5'>
            <div className='who_we_are_seller_sec'>
                <div className='small_title'>Services</div>
                <div className='large_title'>Offer Your Specialized Services</div>
                <div className='para_text_seller'>Unlock the full potential of your institution or company with EdPlatza is comprehensive range of services. We understand the importance of connecting with ambitious MBA students and standing out in the competitive landscape. That is why we offer a suite of services tailored to help you reach your target audience, enhance your brand visibility, and maximize your recruitment efforts. Explore our services and let EdPlatza be your trusted partner in attracting top-tier MBA talent from around the world.</div>
                <div>
                    <SpecializedSlider slides={specializedServices} options={OPTIONS} />
                    <Link href={"/"} className='get_started_btn_center'>Get Started</Link>
                </div>
            </div>
        </div>
        <div className='container_width px-5'>
            <div className="who_we_are_seller_sec">
                <div className='large_title'>Hear from Our Sellers</div>
                <div className='para_text_seller'>Success Stories from EdPlatza Users</div>
                <br />
                <br />
            </div>
            <CarouselTestimonial slides={data?.data?.testimonials?.records?.slice(1, 11)} options={OPTIONS} />
        </div>
        </>
  );
};

export default SellerPage;