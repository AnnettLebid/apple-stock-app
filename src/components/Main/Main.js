import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { CustomTabs } from "../CustomTabs";
import { OverviewTab } from "../OverviewTab";
import { HistoryTab } from "../HistoryTab";

export const Main = () => {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState("1 Minutes");
  const { isLoading, data: stockData } = useFetch(selectedTimeFrame);

  const tabs = [
    {
      label: "Overview",
      component: (
        <OverviewTab
          stockData={stockData}
          onChange={(value) => setSelectedTimeFrame(value)}
          selectedTimeFrame={selectedTimeFrame}
          loading={isLoading}
        />
      ),
    },
    {
      label: "History",
      component: (
        <HistoryTab
          stockData={stockData}
          onChange={(value) => setSelectedTimeFrame(value)}
          selectedTimeFrame={selectedTimeFrame}
          loading={isLoading}
        />
      ),
    },
  ];

  return (
    <div>
      <CustomTabs tabs={tabs} />
    </div>
  );
};

export default Main;
