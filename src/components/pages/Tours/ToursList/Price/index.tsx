"use client";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { observer } from "mobx-react-lite";
import { useToursPageStore } from "../../(model)/context";
import { TourPageStore } from "../../(model)/store";
import styles from "./index.module.scss";
import { Title } from "./Title";

function valuetext(value: number) {
  return value.toLocaleString("de-DE");
}

export const Price = observer(() => {
  const { onChangePrice } = useToursPageStore();

  return (
    <div className={styles.form}>
      <div className={styles.decoration} />
      <Title />
      <Box sx={{ width: 300 }}>
        <Slider
          getAriaLabel={() => "Price range"}
          defaultValue={TourPageStore.INIT_PRICE_RANGE}
          onChangeCommitted={(e, newValue) => {
            if (Array.isArray(newValue)) {
              onChangePrice(e, newValue);
            }
          }}
          valueLabelDisplay="auto"
          valueLabelFormat={valuetext}
          getAriaValueText={valuetext}
          min={0}
          max={10_000_000}
          step={10_000}
          sx={{
            color: "#8dcfb7",
            height: 6,

            "& .MuiSlider-thumb": {
              width: 14,
              height: 14,
              backgroundColor: "#8dcfb7",
              "&:hover, &.Mui-focusVisible": {
                boxShadow: "0px 0px 0px 6px rgba(141, 207, 183, 0.16)",
              },
            },

            "& .MuiSlider-track": {
              border: "none",
              backgroundColor: "#8dcfb7",
            },

            "& .MuiSlider-rail": {
              opacity: 1,
              backgroundColor: "#ccccccff",
            },
          }}
        />
      </Box>
    </div>
  );
});
