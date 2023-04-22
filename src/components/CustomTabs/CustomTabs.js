import { useState } from "react";
import { Tab, Tabs } from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";

export const CustomTabs = ({ tabs, ...tabsProps }) => {
  const [tab, setTab] = useState("0");

  const a11yProps = (index) => {
    return {
      id: `tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
      value: `${index}`,
    };
  };

  const onTabChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <TabContext value={tab}>
      <Tabs
        value={tab}
        onChange={onTabChange}
        aria-label="tabs"
        {...tabsProps}
        sx={{ borderBottom: "1px solid #9A9C9F", width: "100%" }}
      >
        {tabs.map((tab, index) => (
          <Tab
            label={tab.label}
            key={`${tab.label}-${index}`}
            {...a11yProps(index)}
          />
        ))}
      </Tabs>
      {tabs.map((tab, tabIndex) => (
        <TabPanel
          value={`${tabIndex}`}
          key={`${tab.label}-${tabIndex}`}
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          {tab.component}
        </TabPanel>
      ))}
    </TabContext>
  );
};
