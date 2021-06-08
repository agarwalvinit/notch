import request from "./request";

export const fetchOrderSummary = (payload = {}, time: any): Promise<any> => {
  let url = "orders/search";
  if (time) {
    url += "?time=" + time;
  }
  return request.post(url, payload);
};
