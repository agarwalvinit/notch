import { fetchOrderSummary } from "../adapters/orderSearchServies";
import { saveOrderSummaryActionCreator } from "./orderActionCreator";

import { AppDispatch } from "../configureStore";

export const fetchOrderSummaryAction = () => (dispatch: AppDispatch) =>
  fetchOrderSummary().then(({ data }) =>
    saveOrderSummaryActionCreator(dispatch, data)
  );
