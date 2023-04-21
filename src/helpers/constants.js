export const webSocketURL = "wss://wstest.fxempire.com?token=btctothemoon";

export const subscribeMessage = { type: "SUBSCRIBE", instruments: ["s-aapl"] };

export const unSubscribeMessage = {
  type: "UNSUBSCRIBE",
  instruments: ["s-aapl"],
};
