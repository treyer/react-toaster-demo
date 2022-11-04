import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import PropTypes from "prop-types";

import { SettingsGroupWrapper } from "../SettingsGroupWrapper";

import { capitalizeFirstLetter } from "../../helpers/capitalizeFirstLetter";

function ToastRadioGroup({ id, name, typesObject, title }) {
  return (
    <SettingsGroupWrapper>
      <FormControl>
        <FormLabel id={id}>{title}</FormLabel>
        <RadioGroup row aria-labelledby={id} name={name}>
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
};

export { ToastRadioGroup };
