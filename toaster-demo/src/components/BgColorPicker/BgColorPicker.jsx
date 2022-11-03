import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";

import { MuiColorInput } from "mui-color-input";
import { Title, Wrapper } from "./components";

function BgColorPicker() {
  const [value, setValue] = useState("#ffffff");

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <FormControl>
      <Title>
        Custom toast bg color (use checkbox to enable / disable option):
      </Title>
      <Wrapper>
        <Checkbox />
        <MuiColorInput
          value={value}
          onChange={handleChange}
          style={{ padding: "5px 0" }}
        />
      </Wrapper>
    </FormControl>
  );
}

export { BgColorPicker };
