import React, { useState } from "react";
import PropTypes from "prop-types";
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";
import { MuiColorInput } from "mui-color-input";

import { Title, Wrapper } from "./components";

import { COLOR_WHITE } from "../../../constants/colors";
import { SIZE_LARGE, SIZE_SMALL } from "../../../constants/sizes";

function ColorInputItem({ title, size, initialColor }) {
  const [value, setValue] = useState(initialColor);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <FormControl>
      <Title>{title}</Title>
      <Wrapper>
        <Checkbox />
        <MuiColorInput
          value={value}
          onChange={handleChange}
          size={size}
          style={{ padding: "5px 0" }}
        />
      </Wrapper>
    </FormControl>
  );
}

ColorInputItem.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.oneOf([SIZE_SMALL, SIZE_LARGE]),
  initialColor: PropTypes.string.isRequired,
};

ColorInputItem.defaultProps = {
  size: SIZE_SMALL,
  initialColor: COLOR_WHITE,
};

export { ColorInputItem };
