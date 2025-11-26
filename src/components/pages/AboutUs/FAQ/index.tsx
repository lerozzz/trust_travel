import { Container } from "@/components/common/Container";
import {
  Color,
  Typography,
  TypographyType,
} from "@/components/common/Typography";
import Accordion from "./Accordion";
import styles from "./index.module.scss";

export default function FAQ() {
  return (
    <Container>
      <div className={styles.wrapper}>
        <Typography
          type={TypographyType.TITLE}
          as="h1"
          color={Color.TEXT_PRIMARY}
          className={styles.title}
        >
          Часто задаваемые вопросы
        </Typography>
        <Accordion />
      </div>
    </Container>
  );
}
