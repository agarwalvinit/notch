import { Tag } from "antd";

// Constants
import { IOrderSummary } from "../../constants/interface";

// Utilites
import { getDate, getDateInYYYYMMDD } from "utilities/date";

// Scss Styles
import "./index.scss";

const columns = [
  {
    title: "STATUS",
    dataIndex: "orderBuyerStatus",
    render: (status: string) => (
      <Tag className={`fw-extra-bold border-radius-5 p-x-1 status--${status}`}>
        {status.toUpperCase()}
      </Tag>
    ),
  },
  {
    title: "DELIVERY DAY",
    dataIndex: "deliveryDay",
    render: (date: string) => getDate(date),
    sorter: {
      /**
       * This is a date sorter function which sort date accordingly.
       * @param a current record data
       * @param b next record data
       * @returns sorted list in asc/desc date.
       */
      compare: (a: IOrderSummary, b: IOrderSummary) => {
        const currDate = getDateInYYYYMMDD(a.deliveryDay);
        const nextDate = getDateInYYYYMMDD(b.deliveryDay);
        return currDate.localeCompare(nextDate);
      },
      multiple: 3,
    },
  },
  {
    title: "SUPPLIER",
    dataIndex: "vendorName",
    render: (
      txt: string,
      { vendorName, isPendingVendorOnboarding, isBYOS }: IOrderSummary
    ) => (
      <>
        <span className="m-r-1">{vendorName}</span>
        {!isBYOS && (
          <Tag className="m-r-1 bg__color--black txt-white">Market</Tag>
        )}
        {isPendingVendorOnboarding && (
          <Tag className="bg__color--yellow border--yellow fw-extra-bold">
            1st
          </Tag>
        )}
      </>
    ),
  },
  {
    title: "TOTAL",
    dataIndex: "total",
    sorter: {
      /**
       * This is a number sorter function which sort total value accordingly.
       * @param a current record data
       * @param b next record data
       * @returns sorted list in asc/desc value.
       */
      compare: (a: IOrderSummary, b: IOrderSummary) => a?.total - b?.total,
      multiple: 3,
    },
    render: (total: number) => <div>{!!total && `$${total.toFixed(2)}`}</div>,
  },
];

export default columns;
