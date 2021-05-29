import { Table } from "antd";

// Constants
import { IOrderSummary } from "../../constants/interface";
import ColumnData from "./columnData";

export interface IOrderTableProps {
  result: Array<IOrderSummary>;
  dataLoading: boolean;
}

const OrderTable = ({ result, dataLoading }: IOrderTableProps) => (
  <div className="p-a-1 bg__color--white">
    <Table
      dataSource={result}
      columns={ColumnData}
      scroll={{ y: 640 }}
      loading={dataLoading}
    />
  </div>
);

export default OrderTable;
