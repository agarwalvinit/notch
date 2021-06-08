import { fetchOrderSummary } from "../adapters/orderSearchServies";
import { saveOrderSummaryActionCreator } from "./orderActionCreator";

import { AppDispatch } from "../configureStore";

let time = 0;

export const fetchOrderSummaryAction = () => async (dispatch: AppDispatch) => {
  try {
    const { data } = (await fetchOrderSummary(undefined, undefined)) as any;
    saveOrderSummaryActionCreator(dispatch, data);
  } catch (err) {
    console.log(err);
  }
};

export const fetchOrderSummaryBySearchAction = (value: any) => async (
  dispatch: AppDispatch
) => {
  try {
    const now = new Date().getTime();
    if (now > time) {
      time = now;
    }
    const { data } = (await fetchOrderSummary({ keywords: value }, now)) as any;
    if (time === now) {
      saveOrderSummaryActionCreator(dispatch, data);
    }
  } catch (err) {
    console.log(err);
  }
};
