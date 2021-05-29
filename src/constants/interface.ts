export interface IOrderSummary {
  id: number | string;
  orderBuyerStatus: string;
  deliveryDay: string;
  vendorName: string;
  isPendingVendorOnboarding: boolean;
  isBYOS: boolean;
  total: number | 0;
  key?: number;
}

export interface IActionType {
  type: string;
  payload: any;
}
