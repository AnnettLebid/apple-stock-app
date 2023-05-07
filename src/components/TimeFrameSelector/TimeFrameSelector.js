import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { timeFrames } from "../../helpers/constants";
import { StyledStack } from "./TimeFrameSelector.styles";

export const TimeFrameSelector = ({ onChange, selectedTimeFrame }) => {
  const handleChange = (event, newTimeFrame) => {
    if (newTimeFrame !== null) {
      onChange(newTimeFrame);
    }
  };

  return (
    <StyledStack spacing={10}>
      <ToggleButtonGroup
        size="small"
        color="primary"
        value={selectedTimeFrame}
        onChange={handleChange}
        exclusive={true}
      >
        {timeFrames.map((timeFrame) => {
          return (
            <ToggleButton
              key={timeFrame.id}
              value={timeFrame.value}
              className="toggle-button"
            >
              {timeFrame.label}
            </ToggleButton>
          );
        })}
      </ToggleButtonGroup>
    </StyledStack>
  );
};

export default TimeFrameSelector;
