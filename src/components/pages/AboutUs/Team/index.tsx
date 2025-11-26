import {
  Color,
  Typography,
  TypographyType,
} from "@/components/common/Typography";
import { Container } from "@common/Container";
import Cards from "./Cards";
import styles from "./index.module.scss";

export const Team = () => {
  return (
    <Container>
      <div className={styles.wrapper}>
        <Typography
          type={TypographyType.TITLE}
          as="h1"
          color={Color.TEXT_PRIMARY}
          className={styles.title}
        >
          Команда и Основатели
        </Typography>
        <Cards />
      </div>
    </Container>
  );
};
