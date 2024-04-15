
"use client";
import React, { ReactNode } from "react";
import { Accordion, AccordionItemProps, AccordionItem as Item } from "@szhsin/react-accordion";
import Image from "next/image";
import { constImage } from "@/utils/constImage";
import styles from "./faq.module.scss";

interface CustomAccordionItemProps extends AccordionItemProps {
    header: ReactNode;
    initialEntered?: boolean;
}

const AccordionItem: React.FC<CustomAccordionItemProps> = ({ header, ...rest }) => (
    <Item
        {...rest}
        header={
            <>
                {header}
                <Image className={styles.chevron} width={20} height={25} src={constImage.down_arrow_icon} alt="Down Arrow" />
            </>
        }
        className={styles.item}
        buttonProps={{
            className: ({ isEnter }) =>
                `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`,
        }}
        contentProps={{ className: styles.itemContent }}
        panelProps={{ className: styles.itemPanel }}
    />
);

const FaqMbaAdmissions = (faqDetailsResponse: any) => {
    return (
        <Accordion transition transitionTimeout={250}>
            {
                faqDetailsResponse?.faqDetailsResponse?.map((item: any, i: number) => {
                    return (
                        <AccordionItem header={item.faq_question} key={i}>
                            {item.faq_answer}
                        </AccordionItem>
                    );
                })
            }
        </Accordion>
    );
};

export default FaqMbaAdmissions;