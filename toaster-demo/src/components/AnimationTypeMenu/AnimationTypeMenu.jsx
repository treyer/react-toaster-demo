import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

import { ANIMATION_TYPES } from "../../constants/animationTypes";
import { capitalizeFirstLetter } from "../../helpers/capitalizeFirstLetter";

function AnimationTypeMenu() {
  return (
    <FormControl>
      <FormLabel id="animation-type-label">
        Custom toast animation type:
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="animation-type-label"
        name="animation-type"
      >
        {Object.values(ANIMATION_TYPES).map((type) => (
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

export { AnimationTypeMenu };
