// Components
import { Select, Button } from "antd";
import { ALL_SUPPLIER } from "../../constants";

// Styles
import "styles/components/searchBar.scss";

const { Option } = Select;

interface ISearchBarProps {
  supplierList: string[];
  selectedSupplier: string;
  supplierListLoading: boolean;
  handleSearchBar: (value: string) => void;
}

const SearchBar = ({
  supplierList,
  supplierListLoading,
  handleSearchBar,
  selectedSupplier,
}: ISearchBarProps) => {
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
          loading={supplierListLoading}
          value={selectedSupplier}
          onChange={handleSearchBar}
          className="m-r-1 p-b-1"
        >
          {supplierList.map((item) => (
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
