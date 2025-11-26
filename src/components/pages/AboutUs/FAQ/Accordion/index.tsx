"use client";
import {
  Color,
  Typography,
  TypographyType,
} from "@/components/common/Typography";
import cn from "classnames";
import { useState } from "react";
import styles from "./index.module.scss";
import { faqs } from "./Info";

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className={styles.card}>
      {faqs.map((item, index) => {
        const isActive = openIndex === index;
        return (
          <div
            key={index}
            className={cn([
              styles["card__wrapper"],
              { [styles["card__wrapper--open"]]: isActive },
            ])}
          >
            <div
              onClick={() => toggle(index)}
              className={styles.card__question}
            >
              <Typography
                type={TypographyType.CARD_TITLE}
                as="h1"
                className={styles.question}
                color={Color.TEXT_PRIMARY}
              >
                {item.question}
              </Typography>
              <Typography
                type={TypographyType.CARD_TITLE}
                as="span"
                className={styles.question}
                color={Color.TEXT_PRIMARY}
              >
                {isActive ? "−" : "+"}
              </Typography>
            </div>
            <div
              className={cn([
                styles["card__answer"],
                { [styles["card__answer--open"]]: isActive },
              ])}
            >
              <Typography
                type={TypographyType.DESCRIPTION}
                as="p"
                color={Color.TEXT_SECONDARY}
              >
                {item.answer}
              </Typography>
            </div>
          </div>
        );
      })}
    </div>
  );
}
