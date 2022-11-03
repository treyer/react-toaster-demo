import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

import { SHOW_FROM } from "../../constants/directions";
import { capitalizeFirstLetter } from "../../helpers/capitalizeFirstLetter";

function ToastShowTypeMenu() {
  return (
    <FormControl>
      <FormLabel id="toast-show-type-label">Custom toast show from:</FormLabel>
      <RadioGroup
        row
        aria-labelledby="toast-show-type-label"
        name="toast-show-type"
      >
        {Object.values(SHOW_FROM).map((type) => (
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

export { ToastShowTypeMenu };
