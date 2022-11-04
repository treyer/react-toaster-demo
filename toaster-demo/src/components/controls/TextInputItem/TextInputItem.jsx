import PropTypes from "prop-types";

import { ErrorMessage, Input, Wrapper } from "./components";

import { SIZE_LARGE, SIZE_SMALL } from "../../../constants/sizes";

function TextInputItem({ id, size, label, defaultValue }) {
  return (
    <Wrapper>
      <Input id={id} size={size} label={label} defaultValue={defaultValue} />
      <ErrorMessage variant="caption" color="red">
        Wrong entry
      </ErrorMessage>
    </Wrapper>
  );
}

TextInputItem.propTypes = {
  id: PropTypes.string.isRequired,
  size: PropTypes.oneOf([SIZE_SMALL, SIZE_LARGE]),
  label: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
};

TextInputItem.defaultProps = {
  size: SIZE_SMALL,
};

export { TextInputItem };
