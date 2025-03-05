import Link from "next/link";
import { links } from "./data";
import styles from "./style.module.scss";

const Links = () => {
  return (
    <nav>
      <ul className={styles.list}>
        {links.map(({ title, href }, index) => (
          <Link key={index} href={href}>
            <li className={styles.item}>{title}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Links;
