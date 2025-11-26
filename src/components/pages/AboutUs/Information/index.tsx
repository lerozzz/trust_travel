import {
  Color,
  Typography,
  TypographyType,
} from "@/components/common/Typography";
import { Container } from "@common/Container";
import styles from "./index.module.scss";
import { information } from "./Info";

export const Information = () => {
  return (
    <Container>
      <div className={styles.wrapper}>
        {information.map((el, index) => {
          return (
            <div className={styles.wrapper__text} key={index}>
              <Typography
                type={TypographyType.TITLE_SECONDARY}
                as="h2"
                color={Color.TEXT_PRIMARY}
                className={styles.title}
              >
                {el.title}
              </Typography>

              <Typography
                type={TypographyType.DESCRIPTION}
                as="p"
                color={Color.TEXT_SECONDARY}
                className={styles.description}
              >
                {el.description}
              </Typography>
            </div>
          );
        })}
      </div>
    </Container>
  );
};
