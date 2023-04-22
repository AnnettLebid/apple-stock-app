import axios from "axios";
import { useQuery } from "react-query";
import { calculateTimePeriod } from "../helpers/dataConverters";

export const useFetch = (timeFrame) => {
  const timeFrameData = timeFrame?.split(" ");
  const period = timeFrameData[0];
  const precision = timeFrameData[1];
  const timeSpan = calculateTimePeriod(timeFrame);
  const selectedStartHour = timeSpan?.timeHour ? `%20${timeSpan.timeHour}` : "";
  const selectedEndHour = timeSpan?.timeHour ? timeSpan.timeHour : "23:59";

  const url = `https://test.fxempire.com/api/v1/en/stocks/chart/candles?Identifier=AAPL.XNAS&IdentifierType=Symbol&AdjustmentMethod=All&IncludeExtended=False&period=${period}&Precision=${precision}&StartTime=${timeSpan.startTime}${selectedStartHour}&EndTime=${timeSpan.endTime}%20${selectedEndHour}&_fields=ChartBars.StartDate,ChartBars.High,ChartBars.Low,ChartBars.StartTime,ChartBars.Open,ChartBars.Close,ChartBars.Volume`;

  const { isLoading, error, data } = useQuery({
    queryKey: [timeFrame],
    queryFn: () => axios.get(url).then((res) => res.data),
  });

  return { isLoading, data, error };
};
