"use client";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { observer } from "mobx-react-lite";
import { FC } from "react";
import { useToursPageFilterStore } from "../../../(model)/context";
import { countries } from "./data";

export const LocationSelect: FC = observer(() => {
  const { location, onChangeLocation } = useToursPageFilterStore();
  return (
    <Autocomplete
      disablePortal
      options={countries}
      value={location}
      onChange={(_, newValue) => onChangeLocation(newValue)}
      filterOptions={(options, { inputValue }) =>
        options.filter((opt) =>
          opt.label.toLowerCase().includes(inputValue.toLowerCase()),
        )
      }
      slotProps={{ paper: { sx: { maxHeight: 200 } } }}
      sx={{
        "& .MuiInputBase-root": {
          height: 48,
        },
        "& .MuiOutlinedInput-root": {
          "&:hover fieldset": {
            borderColor: "#8dcfb7",
            borderWidth: 1,
          },
          "&.Mui-focused fieldset": {
            borderColor: "#8dcfb7",
            borderWidth: 1,
          },
        },
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Страна, город или отель"
          slotProps={{
            inputLabel: {
              sx: { pb: 4 },
            },
          }}
        />
      )}
    />
  );
});
