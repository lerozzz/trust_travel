import { Typography, TypographyType } from "@/components/common/Typography";
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
         color="#2c2c2c"
           >  
          <Link key={index} href={href}>
            <li className={styles.item}>{title}</li>
            </Link>
            </Typography>
        ))}
          
      </ul>
      </nav>
     
  );
};

export default Links;
