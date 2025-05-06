import { Typography, TypographyType } from "@/components/common/Typography";
import Link from "next/link";
import styles from "./style.module.scss";
const Phone = () => {
  return (
    
    <Link className={styles.phone} href="tel:+77012747555">
       <Typography
              type={TypographyType.HEADER}
              as="span"
            color="#2c2c2c"
              >      
        +7 (701) 274 75 55
        </Typography>
      </Link>
     
  );
};

export default Phone;
