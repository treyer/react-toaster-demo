import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

import { TOAST_TYPES } from "../../constants/toastTypes";
import { capitalizeFirstLetter } from "../../helpers/capitalizeFirstLetter";

function ToastTypeMenu() {
  return (
    <FormControl>
      <FormLabel id="toast-type-label">Custom toast type:</FormLabel>
      <RadioGroup row aria-labelledby="toast-type-label" name="toast-type">
        {Object.values(TOAST_TYPES).map((type) => (
          <FormControlLabel
            key={type}
            value={type}
            control={<Radio />}
            label={capitalizeFirstLetter(type)}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export { ToastTypeMenu };
