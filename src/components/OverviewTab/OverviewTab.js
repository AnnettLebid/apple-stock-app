import { Box, CircularProgress, Typography } from "@mui/material";
import { TimeFrameSelector } from "../TimeFrameSelector";
import { AreaChart } from "../AreaChart";

export const OverviewTab = ({
  onChange,
  stockData,
  selectedTimeFrame,
  loading,
}) => {
  console.log("OverviewTab");
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <TimeFrameSelector
        onChange={onChange}
        selectedTimeFrame={selectedTimeFrame}
      />
      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      )}
      {stockData?.length > 0 ? (
        <AreaChart stockData={stockData} />
      ) : (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography>No data for period of {selectedTimeFrame}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default OverviewTab;
