import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

import { POSITION_TYPE } from "../../constants/positions";
import { capitalizeFirstLetter } from "../../helpers/capitalizeFirstLetter";

function ContainerPositionMenu() {
  return (
    <FormControl>
      <FormLabel id="container-position-type-label">
        Container position:
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="container-position-type-label"
        name="container-position-type"
      >
        {Object.values(POSITION_TYPE).map((type) => (
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

export { ContainerPositionMenu };
