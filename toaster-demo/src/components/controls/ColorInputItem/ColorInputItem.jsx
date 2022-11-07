import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";
import { MuiColorInput } from "mui-color-input";

import { Title, Wrapper } from "./components";

import { COLOR_WHITE } from "../../../constants/colors";
import { SIZE_LARGE, SIZE_SMALL } from "../../../constants/sizes";

function ColorInputItem({ title, size, initialColor, action }) {
  const dispatch = useDispatch();
  const [value, setValue] = useState(initialColor);
  const [isEnable, setIsEnable] = useState(false);

  useEffect(() => {
    if (isEnable) {
      dispatch(action(value));
    } else {
      dispatch(action(null));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEnable]);

  const handleChange = (newValue) => {
    setValue(newValue);
    if (isEnable) {
      dispatch(action(value));
    }
  };

  const handleCheckboxChange = () => {
    setIsEnable((prev) => !prev);
  };

  return (
    <FormControl>
      <Title>{title}</Title>
      <Wrapper>
        <Checkbox onChange={handleCheckboxChange} checked={isEnable} />
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
