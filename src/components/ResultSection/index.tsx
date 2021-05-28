import { Table } from "antd";

// Constants
import { IOrderSummary } from "../../constants/interface";
import ColumnData from "./columnData";

interface IResultSectionProps {
  result: Array<IOrderSummary>;
  dataLoading: boolean;
}

const ResultSection = ({ result, dataLoading }: IResultSectionProps) => (
  <div className="p-a-1 bg__color--white">
    <Table
      dataSource={result}
      columns={ColumnData}
      scroll={{ y: 640 }}
      loading={dataLoading}
    />
  </div>
);

export default ResultSection;
