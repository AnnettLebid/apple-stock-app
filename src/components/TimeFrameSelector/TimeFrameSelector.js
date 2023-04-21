import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { StyledStack } from "./TimeFrameSelector.styles";

export const TimeFrameSelector = ({ onChange, selectedTimeFrame }) => {
  const timeFrames = [
    {
      id: "1",
      value: "1 Minutes",
      label: "1 Minute",
    },
    {
      id: "2",
      value: "5 Minutes",
      label: "5 Minutes",
    },
    {
      id: "3",
      value: "1 Hours",
      label: "1 Hour",
    },
    {
      id: "4",
      value: "168 Hours",
      label: "1 Week",
    },
  ];

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
