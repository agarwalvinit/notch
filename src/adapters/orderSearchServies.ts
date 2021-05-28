import request from "./request";

export const fetchOrderSummary = (): Promise<any> => {
  return request.post("orders/search", {});
};
