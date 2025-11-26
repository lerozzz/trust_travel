import {
  Color,
  Typography,
  TypographyType,
} from "@/components/common/Typography";
import Link from "next/link";
import { links } from "./data";
import styles from "./style.module.scss";

const Links = () => {
  return (
    <nav>
      <ul className={styles.list}>
        {links.map(({ title, href }, index) => (
          <Typography
            type={TypographyType.HEADER}
            as="span"
            color={Color.TEXT_SECONDARY}
            key={index}
          >
            <Link href={href}>
              <li className={styles.item}>{title}</li>
            </Link>
          </Typography>
        ))}
      </ul>
    </nav>
  );
};

export default Links;
