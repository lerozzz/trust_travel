"use client";
import {
  Color,
  Typography,
  TypographyType,
} from "@/components/common/Typography";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Popper from "@mui/material/Popper";
import tourist from "@public/main/tourist.svg";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import { useState } from "react";
import { useToursPageFilterStore } from "../../../(model)/context";
import { Counter } from "./Counter";
import { CounterButtons } from "./CounterButtons";
import styles from "./index.module.scss";

export const GuestsInput = observer(() => {
  const { adultsCount, childsCount } = useToursPageFilterStore();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLButtonElement>(null);

  const hasAdults = !!adultsCount;
  const hasChild = !!childsCount;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
    setIsOpen((prev) => !prev);
  };
  const handleClose = () => setIsOpen(false);

  const open = isOpen && Boolean(anchorEl);
  const id = open ? "guests-popper" : undefined; // переделать в useState чтобы в open передавать true или false

  return (
    <div>
      <Button
        aria-describedby={id}
        variant="outlined"
        onClick={handleClick}
        className={styles.button}
        sx={{
          height: 48,
          width: 320,
          borderColor: "#ccc",
          borderRadius: "4px",
          justifyContent: "space-between",
          textTransform: "none",
          borderWidth: 1,
          "&:hover": {
            borderColor: "#8dcfb7",
            backgroundColor: "transparent",
          },
          "&.Mui-focused, &:focus": {
            borderColor: "#8dcfb7",
          },
        }}
      >
        <div className={styles.counter_wrapper}>
          <Typography
            type={TypographyType.CARD_TEXT}
            as="p"
            color={hasAdults ? Color.TEXT_SECONDARY : Color.SEARCH_FORM}
          >
            {hasAdults ? `${adultsCount} взр` : "Туристов"}
          </Typography>
          <Typography
            type={TypographyType.CARD_TEXT}
            as="p"
            color={hasChild ? Color.TEXT_SECONDARY : Color.SEARCH_FORM}
          >
            {hasChild ? `, ${childsCount} дет` : ""}
          </Typography>
        </div>
        <Image
          className={styles.image}
          alt="benefit_1"
          width={21}
          height={21}
          src={tourist}
        />
      </Button>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        disablePortal
        placement="bottom-start"
        modifiers={[
          {
            name: "computeStyles",
            options: {
              adaptive: false,
            },
          },
          {
            name: "preventOverflow",
            options: {
              boundary: "viewport",
            },
          },
        ]}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <div className={styles.popper_wrapper}>
            <CounterButtons
              adultNode={<Counter count={adultsCount} />} //правильно
              childNode={Counter({ count: childsCount })}
            />
          </div>
        </ClickAwayListener>
      </Popper>
    </div>
  );
});
