"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./breadcrumb.module.scss";
import { constURL } from "@/utils/constURL";

const Breadcrumb: React.FC = () => {
  const route = usePathname();
  return (
    <>
      <div className={styles.breadcrumb_section}>
        <div className="container_width px-5">
          <div className={styles.breadcrumb_row}>
            <Link href={"/"} className={styles.breadcrumb_link}>Edplatza </Link>
            { route === constURL.CAREERS && <Link href={constURL.CAREERS} className={styles.breadcrumb_link}>Career</Link> }
            { route === constURL.CONTACT && <Link href={constURL.CONTACT} className={styles.breadcrumb_link}>Contact</Link> }
            { route === constURL.FAQ && <Link href={constURL.FAQ} className={styles.breadcrumb_link}>Faq</Link> }
            { route === constURL.BLOG && <Link href={constURL.BLOG} className={styles.breadcrumb_link}>Blog</Link> }
            { route === "/blog/blog-details/" && <Link href={"/blog/blog-details"} className={styles.breadcrumb_link}>Blog Details</Link> }
            { route === "/post-a-job/" && <Link href={"/post-a-job"} className={styles.breadcrumb_link}>Post a Job</Link> }
            { route === constURL.SERVICES && <Link href={constURL.SERVICES} className={styles.breadcrumb_link}>Services</Link> }
            { route === "/mba-admissions" && <Link href={constURL.CAREERS} className={styles.breadcrumb_link}>MBA Admissions</Link> }
            { route === constURL.PRIVACY_POLICY && <Link href={constURL.PRIVACY_POLICY} className={styles.breadcrumb_link}>Legal Privacy Policy</Link> }
            { route === constURL.TERMS_AND_CONDITIONS && <Link href={constURL.TERMS_AND_CONDITIONS} className={styles.breadcrumb_link}>Legal Terms & Conditions</Link> }
            { route === constURL.BUYER_PROFILE && <Link href={constURL.BUYER_PROFILE} className={styles.breadcrumb_link}>Buyer Profile</Link> }
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;