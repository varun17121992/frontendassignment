import React, { useState } from "react";
import { convertToDate } from "../utils/functions";
import Tables from "./Tables";

// Tab manager is actually managing the tab data which needs to be rendered
// tab is refreshed once you click again.

function TabManager({ activeState, data }) {
  const [campaignJson, setJson] = useState(data);

  function updateData(d, item) {
    const campaignData = campaignJson.map((data) => {
      if (data["name"] === item["name"]) {
        return { ...data, createdOn: d };
      }
      return data;
    });
    setJson(campaignData);
  }

  let today = new Date(); // today date updated

  const today_date = convertToDate(today);

  let upcomingData = campaignJson.filter(
    (item) => convertToDate(item["createdOn"]) > today_date
  );

  let liveData = campaignJson.filter(
    (item) => convertToDate(item["createdOn"]) == today_date
  );

  let pastData = campaignJson.filter(
    (item) => convertToDate(item["createdOn"]) < today_date
  );

  const activeData =
    activeState === "upcoming"
      ? upcomingData
      : activeState === "live"
      ? liveData
      : activeState === "past"
      ? pastData
      : null;

  return <Tables data={activeData} updatedData={updateData} />;
}

export default TabManager;
