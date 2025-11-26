import {
  Color,
  Typography,
  TypographyType,
} from "@/components/common/Typography";
import styles from "./index.module.scss";

interface CounterProps {
  count: number;
}

export const Counter = ({ count }: CounterProps) => {
  return (
    <Typography
      type={TypographyType.CARD_TEXT}
      as="p"
      className={styles.description}
      color={Color.TEXT_PRIMARY}
    >
      {count}
    </Typography>
  );
};
