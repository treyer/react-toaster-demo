import { useDispatch, useSelector } from "react-redux";

import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import PropTypes from "prop-types";

import { SettingsGroupWrapper } from "../SettingsGroupWrapper";

import { capitalizeFirstLetter } from "../../helpers/capitalizeFirstLetter";

function ToastRadioGroup({
  id,
  name,
  typesObject,
  title,
  storePropName,
  action,
}) {
  const dispatch = useDispatch();
  const currentValue = useSelector((state) => state.settings[storePropName]);

  const changeContainerPosition = (event) => {
    dispatch(action(event.target.value));
  };

  return (
    <SettingsGroupWrapper>
      <FormControl>
        <FormLabel id={id}>{title}</FormLabel>
        <RadioGroup
          row
          aria-labelledby={id}
          name={name}
          value={currentValue}
          onChange={changeContainerPosition}
        >
          {Object.values(typesObject).map((type) => (
            <FormControlLabel
              key={type}
              value={type}
              control={<Radio />}
              label={capitalizeFirstLetter(type)}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </SettingsGroupWrapper>
  );
}

ToastRadioGroup.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  typesObject: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  storePropName: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export { ToastRadioGroup };
