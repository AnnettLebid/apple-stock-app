export const webSocketURL = "wss://wstest.fxempire.com?token=btctothemoon";

export const subscribeMessage = { type: "SUBSCRIBE", instruments: ["s-aapl"] };

export const unSubscribeMessage = {
  type: "UNSUBSCRIBE",
  instruments: ["s-aapl"],
};

export const timeFrames = [
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
