export interface IOrderSummary {
  id: number | string;
  orderBuyerStatus: string;
  deliveryDay: string;
  vendorName: string;
  isPendingVendorOnboarding: boolean;
  isBYOS: boolean;
  total: number | 0;
}
