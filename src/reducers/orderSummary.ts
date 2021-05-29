import {
  ORDER_SUMMARY_LIST,
  ALL_SUPPLIER_LIST,
  ALL_SUPPLIER_MAP,
} from "../constants";
import { TSupplierMap } from "constants/types";
import { IActionType } from "constants/interface";

const INITIAL_STATE = {
  allSuppliersData: [],
  allSuppliersList: [],
  suppliersMap: {} as TSupplierMap,
  isSupplierListLoading: true,
};

const orderSummary = (
  state = INITIAL_STATE,
  { type, payload }: IActionType
) => {
  switch (type) {
    case ORDER_SUMMARY_LIST:
      state = { ...state, allSuppliersData: payload };
      break;
    case ALL_SUPPLIER_LIST:
      state = {
        ...state,
        allSuppliersList: payload,
        isSupplierListLoading: false,
      };
      break;
    case ALL_SUPPLIER_MAP:
      state = { ...state, suppliersMap: payload };
      break;
    default:
      break;
  }

  return state;
};

export default orderSummary;
