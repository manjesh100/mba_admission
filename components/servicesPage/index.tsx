import React from "react";
import { ServiceList } from "./utils";
import Image from "next/image";
import { ServiceItems } from "./serviceInterface";
import Link from "next/link";

const ServiceListItem: React.FC<{ services: ServiceItems }> = ({ services }) => {
    return (
        <div key={services.id} className="serviceListBox">
            <Link href={services.serviceUrl}>
                <Image src={services.serviceImage} alt={services.serviceName} className="image" />
                <div className="overlay">
                    <div className="serviceLisName">{services.serviceName}</div>
                </div>
            </Link>
        </div>
    );
  };

const ServicesPage = () => {
    return (
        <>
            <div className="container_width items-center px-5 mb-100">
                <div className="grid grid-cols-1">
                    <div className="serviceTitle">Explore services</div>
                </div>
                <div className="grid grid-cols-4 gap-7">
                    {ServiceList.map(service => (
                        <ServiceListItem key={service.id} services={service} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default ServicesPage;