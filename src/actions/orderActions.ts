import { fetchOrderSummary } from "../adapters/orderSearchServies";
import { saveOrderSummaryActionCreator } from "./orderActionCreator";

import { AppDispatch } from "../configureStore";

export const fetchOrderSummaryAction = () => async (dispatch: AppDispatch) => {
  try {
    const { data } = (await fetchOrderSummary()) as any;
    saveOrderSummaryActionCreator(dispatch, data);
  } catch (err) {
    console.log(err);
  }
};
