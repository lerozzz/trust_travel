import {
  Color,
  Typography,
  TypographyType,
} from "@/components/common/Typography";
import { useToursPageFilterStore } from "@/components/pages/Tours/(model)/context";
import Button from "@mui/material/Button";
import { observer } from "mobx-react-lite";
import { FC, ReactNode } from "react";
import s from "./CounterButtons.module.scss";

export interface CounterButtonsProps {
  adultNode: ReactNode;
  childNode: ReactNode;
}

export const CounterButtons: FC<CounterButtonsProps> = observer((props) => {
  const { adultDecrease, adultIncrease, childDecrease, childIncrease } =
    useToursPageFilterStore();

  const { adultNode, childNode } = props;

  return (
    <div className={s.container}>
      <div className={s.container__adult}>
        <Typography type={TypographyType.CARD_TEXT} color={Color.TEXT_PRIMARY}>
          Взрослых
        </Typography>
        <div className={s.button_wrapper}>
          <Button onClick={adultDecrease}>-</Button>
          <div>{adultNode}</div>
          <Button onClick={adultIncrease}>+</Button>
        </div>
      </div>
      <div className={s.container__children}>
        <Typography type={TypographyType.CARD_TEXT} color={Color.TEXT_PRIMARY}>
          Детей
        </Typography>
        <div className={s.button_wrapper}>
          <Button onClick={childDecrease}>-</Button>
          <div>{childNode}</div>
          <Button onClick={childIncrease}>+</Button>
        </div>
      </div>
    </div>
  );
});
