import { useState, useEffect } from "react";
import {
  webSocketURL,
  subscribeMessage,
  unSubscribeMessage,
} from "../helpers/constants";

const ws = new WebSocket(webSocketURL);

export const useWebSocket = () => {
  const [lastPrice, setLastPrice] = useState("");
  const [change, setChange] = useState("");
  const [percentChange, setPercentChange] = useState("");
  const [lastUpdateTime, setLastUpdateTime] = useState("");

  useEffect(() => {
    ws.onopen = (event) => {
      ws.send(JSON.stringify(subscribeMessage));
      console.log(ws);
    };

    ws.onmessage = (event) => {
      const result = JSON.parse(event.data);
      const data = result["s-aapl"];

      setLastPrice(data["last"]);
      setChange(data["change"]);
      setPercentChange(data["percentChange"]);
      setLastUpdateTime(new Date(data["lastUpdate"]).toUTCString());
    };

    return () => {
      ws.onclose = (event) => {
        ws.send(JSON.stringify(unSubscribeMessage));
      };
    };
  }, []);

  return { lastPrice, change, percentChange, lastUpdateTime };
};

export default useWebSocket;
