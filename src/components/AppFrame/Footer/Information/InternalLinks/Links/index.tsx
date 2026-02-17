import {
  Typography,
  TypographyType,
  Color,
} from "@/components/common/Typography";
import Link from "next/link";
import { links } from "./data";
import styles from "./index.module.scss";

const Links = () => {
  return (
    <nav>
      <ul className={styles.list}>
        {links.map(({ title, href }) => (
          <li key={href} className={styles.item}>
            <Link href={href}>
              <Typography
                type={TypographyType.FOOTER}
                as="span"
                color={Color.BACKGROUND}
              >
                {title}
              </Typography>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Links;
