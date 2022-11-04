import PropTypes from "prop-types";

import { ErrorMessage, Input, Wrapper } from "./components";

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
  size: PropTypes.oneOf(["small", "large"]),
  label: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
};

TextInputItem.defaultProps = {
  size: "small",
};

export { TextInputItem };
