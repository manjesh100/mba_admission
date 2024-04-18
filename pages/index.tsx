import Image from "next/image";
import Homepage from "@/components/homepage";
import { useGetFaqCategListQuery } from "@/ApiServices/common/faq";

export default function Home() {
  const { data } = useGetFaqCategListQuery();
  return (
    <Homepage />
  );
}
