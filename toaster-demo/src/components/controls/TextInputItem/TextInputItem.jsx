import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import { Input, Wrapper } from "./components";

import { SIZE_LARGE, SIZE_SMALL } from "../../../constants/sizes";
import { validate } from "../../../helpers/validate";

function TextInputItem({ id, size, label, storePropName, rules, action }) {
  const dispatch = useDispatch();
  const storeValue = useSelector((state) => state.settings[storePropName]);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChangeValue = (event) => {
    const value = event.target.value;
    dispatch(action(value));

    const error = validate(label, value, rules);
    if (error) {
      setIsError(true);
      setErrorMessage(error);
    } else {
      if (isError) {
        setIsError(false);
        setErrorMessage("");
      }
    }
  };

  return (
    <Wrapper>
      <Input
        error={isError}
        id={id}
        size={size}
        label={label}
        value={storeValue}
        onChange={handleChangeValue}
        helperText={errorMessage}
      />
    </Wrapper>
  );
}

TextInputItem.propTypes = {
  id: PropTypes.string.isRequired,
  size: PropTypes.oneOf([SIZE_SMALL, SIZE_LARGE]),
  label: PropTypes.string.isRequired,
  storePropName: PropTypes.string.isRequired,
  rules: PropTypes.arrayOf(PropTypes.string),
  action: PropTypes.func.isRequired,
};

TextInputItem.defaultProps = {
  size: SIZE_SMALL,
};

export { TextInputItem };
