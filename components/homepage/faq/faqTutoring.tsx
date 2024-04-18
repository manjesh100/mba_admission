
"use client";
import React, { ReactNode } from "react";
import { Accordion, AccordionItemProps, AccordionItem as Item } from "@szhsin/react-accordion";
import Image from "next/image";
import { constImage } from "@/utils/constImage";
import styles from "./faq.module.scss";
import { faqDataTutoring } from "@/utils/constantData";

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

const FaqTutoring = () => {
    return (
        <Accordion transition transitionTimeout={250}>
            {
                faqDataTutoring?.map((item: any, i: number) => {
                    return (
                        <AccordionItem header={item.question} key={i}>
                            {item.answer}
                        </AccordionItem>
                    );
                })
            }
        </Accordion>
    );
};

export default FaqTutoring;