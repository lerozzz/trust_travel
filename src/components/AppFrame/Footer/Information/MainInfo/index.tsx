import {
  Color,
  Typography,
  TypographyType,
} from "@/components/common/Typography";
import instagram from "@public/main/instagram.png";
import logo from "@public/main/logo.png";
import mail from "@public/main/mail.png";
import telegram from "@public/main/telegram.png";
import Image from "next/image";
import styles from "./index.module.scss";

const socialLinks = [
  { alt: "instagram", src: instagram },
  { alt: "telegram", src: telegram },
  { alt: "mail", src: mail },
];

const MainInfo = () => {
  return (
    <div className={styles.info}>
      <Image alt="logo" width={200} height={96} src={logo} />
      <Typography
        type={TypographyType.FOOTER}
        as="span"
        color={Color.BACKGROUND}
      >
        <p className={styles.description}>
          {" "}
          Позвольте Trust Travel организовать для вас путешествие мечты! Мы
          предлагаем туры на любой вкус и бюджет, а наша команда профессионалов
          позаботится обо всех деталях.{" "}
        </p>
        <p>Подпишитесь на нас:</p>
      </Typography>
      <div className={styles.social_net_icons}>
        {socialLinks.map(({ alt, src }, index) => (
          <Image key={index} width={32} alt={alt} src={src} height={32} />
        ))}
      </div>
    </div>
  );
};

export default MainInfo;
