import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

import { HIDE_TO } from "../../constants/directions";
import { capitalizeFirstLetter } from "../../helpers/capitalizeFirstLetter";

function ToastHideTypeMenu() {
  return (
    <FormControl>
      <FormLabel id="toast-hide-type-label">Custom toast hide to:</FormLabel>
      <RadioGroup
        row
        aria-labelledby="toast-hide-type-label"
        name="toast-hide-type"
      >
        {Object.values(HIDE_TO).map((type) => (
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

export { ToastHideTypeMenu };
