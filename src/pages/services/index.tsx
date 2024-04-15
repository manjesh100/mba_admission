import { EmblaOptionsType } from "embla-carousel";
import ServicesPage from "@/components/servicesPage";
import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import PopularServicesCarouselSlider from "@/components/homepage/sectionFive/carouselSlider";
import { useGetPopularServicesListQuery } from "@/ApiServices/popularServices/popularServices";
import { TPopularServicesResponse } from "@/utils/type";

const OPTIONS: EmblaOptionsType = {
  slidesToScroll: "auto",
  containScroll: "trimSnaps"
};

export default function Services() {
  const { data } = useGetPopularServicesListQuery();
  const popularServiceResponse: TPopularServicesResponse[] = data?.data?.services?.records;
  return (
    <>
      <Breadcrumb />
      <div className="container_width px-5">
        <div className="flex flex-row items-center justify-between pt-16">
            <div className="section_heading basis-6/12 text-left">Most Popular Services</div>
        </div>
        <div className="mt-14">
          <PopularServicesCarouselSlider slides={popularServiceResponse} options={OPTIONS} />
        </div>
      </div>
      <ServicesPage />
    </>
  );
}
