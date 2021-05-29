import { AppDispatch } from "../configureStore";
import { IOrderSummary } from "../constants/interface";
import { TSupplierMap } from "../constants/types";
import {
  ALL_SUPPLIER,
  ORDER_SUMMARY_LIST,
  ALL_SUPPLIER_LIST,
  ALL_SUPPLIER_MAP,
} from "../constants";

const getSupplierListFromMap = (supplierMap: TSupplierMap) =>
  Object.keys(supplierMap);

export const saveOrderSummaryActionCreator = (
  dispatch: AppDispatch,
  data: Array<IOrderSummary>
) => {
  const supplierMap = {} as TSupplierMap;
  const allSuppliersData = data.map(
    ({
      orderBuyerStatus,
      deliveryDay,
      vendorName,
      isPendingVendorOnboarding,
      isBYOS,
      total,
      id,
    }: IOrderSummary) => {
      const filteredData = {
        orderBuyerStatus,
        deliveryDay,
        total,
        vendorName,
        isPendingVendorOnboarding,
        isBYOS,
        key: id,
      };
      if (supplierMap[vendorName]) {
        supplierMap[vendorName].push(filteredData);
      } else {
        supplierMap[vendorName] = [filteredData];
      }
      return filteredData;
    }
  );
  const supplierList = [ALL_SUPPLIER, ...getSupplierListFromMap(supplierMap)];
  dispatch({
    type: ORDER_SUMMARY_LIST,
    payload: allSuppliersData,
  });
  dispatch({
    type: ALL_SUPPLIER_LIST,
    payload: supplierList,
  });
  dispatch({
    type: ALL_SUPPLIER_MAP,
    payload: supplierMap,
  });
};
