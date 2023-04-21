import { Box, CircularProgress } from "@mui/material";
import { TimeFrameSelector } from "../TimeFrameSelector";
import { AreaChart } from "../AreaChart";

export const OverviewTab = ({ onChange, stockData, selectedTimeFrame }) => {
  

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <TimeFrameSelector
        onChange={onChange}
        selectedTimeFrame={selectedTimeFrame}
      />

      {stockData.length > 0 ? (
        <AreaChart stockData={stockData} />
      ) : (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
};

export default OverviewTab;
