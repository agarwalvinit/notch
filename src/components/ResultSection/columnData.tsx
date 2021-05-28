import { Tag } from "antd";

// Constants
import { IOrderSummary } from "../../constants/interface";

// Utilites
import getDate from "utilities/date";
import "./index.scss";

const columns = [
  {
    title: "STATUS",
    dataIndex: "orderBuyerStatus",
    render: (status: string) => (
      <Tag className={`fw-extra-bold border-radius-5 p-x-2 status--${status}`}>
        {status.toUpperCase()}
      </Tag>
    ),
  },
  {
    title: "DELIVERY DAY",
    dataIndex: "deliveryDay",
    render: (date: string) => getDate(date),
  },
  {
    title: "SUPPLIER",
    dataIndex: "vendorName",
    render: (
      txt: string,
      { vendorName, isPendingVendorOnboarding, isBYOS }: IOrderSummary
    ) => (
      <div className="flex">
        <span className="m-r-1">{vendorName}</span>
        {!isBYOS && (
          <Tag className="m-r-1 bg__color--black txt-white">Market</Tag>
        )}
        {isPendingVendorOnboarding && (
          <Tag className="bg__color--yellow border--yellow">1st</Tag>
        )}
      </div>
    ),
  },
  {
    title: "TOTAL",
    dataIndex: "total",
    sorter: {
      compare: (a: IOrderSummary, b: IOrderSummary) => a?.total - b?.total,
      multiple: 3,
    },
    render: (total: number) => <div>{`$${total.toFixed(2)}`}</div>,
  },
];

export default columns;
