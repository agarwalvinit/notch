import { useSelector } from "react-redux";

// Components
import { Select, Button } from "antd";
import { ALL_SUPPLIER } from "../../constants";

// Types
import { RootState } from "configureStore";

// Styles
import "./index.scss";

const { Option } = Select;

interface ISearchBarProps {
  selectedSupplier: string;
  handleSearchBar: (value: string) => void;
}

const SearchBar = ({ handleSearchBar, selectedSupplier }: ISearchBarProps) => {
  const { allSuppliersList, isSupplierListLoading } = useSelector(
    (state: RootState) => state.orderSummary
  );
  const handleReset = () => handleSearchBar(ALL_SUPPLIER);

  return (
    <div className="search-bar__container full-height p-a-2">
      <div className="input__block full-width">
        <div className="p-b-1">Supliers</div>
        <Select
          showSearch
          style={{ maxWidth: 300, width: "100%" }}
          placeholder="Search to Select"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          loading={isSupplierListLoading}
          value={selectedSupplier}
          onChange={handleSearchBar}
          className="m-r-1 p-b-1"
        >
          {allSuppliersList.map((item) => (
            <Option value={item} key={item}>
              {item}
            </Option>
          ))}
        </Select>
        <Button
          className="reset__button txt-white"
          type="primary"
          onClick={handleReset}
        >
          <span className="txt-s">X</span>&nbsp;&nbsp;Reset
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
