import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
// components
import SearchBar from "../SearchBar";
import ResultSection from "../ResultSection";

// Types
import { RootState } from "configureStore";

// Constants
import { IOrderSummary } from "constants/interface";
import { ALL_SUPPLIER } from "constants/index";

const MainSection: FC = () => {
  const { suppliersMap, allSuppliersData } = useSelector(
    (state: RootState) => state.orderSummary
  );
  const [result, updateResult] = useState([] as Array<IOrderSummary>);
  const [dataLoading, updateDataLoading] = useState(true);
  const [selectedSupplier, updateSelectedSupplier] = useState(ALL_SUPPLIER);

  useEffect(() => {
    updateResult(allSuppliersData);
    if (allSuppliersData.length) {
      updateDataLoading(false);
    }
  }, [allSuppliersData]);

  /**
   * This function updates the result data for selected supplier
   * @param value string - select value from the list of supplier name
   */
  const updateSearch = (value: string = ALL_SUPPLIER) => {
    let selectedList;
    if (value === ALL_SUPPLIER) {
      selectedList = allSuppliersData;
    } else {
      selectedList = suppliersMap[value];
    }
    updateSelectedSupplier(value);
    updateResult(selectedList);
    updateDataLoading(false);
  };

  /**
   * This function is to add promisify effect i.e. showing
   * loader for filtered/selected supplier.
   * @param value string - select value from the list of supplier name
   */
  const handleSearchBar = (value: string = ALL_SUPPLIER) => {
    if (selectedSupplier !== value) {
      updateDataLoading(true);
      setTimeout(() => {
        updateSearch(value);
      }, 100);
    } else {
      /* empty else */
    }
  };

  return (
    <>
      <SearchBar
        handleSearchBar={handleSearchBar}
        selectedSupplier={selectedSupplier}
      />
      <ResultSection result={result} dataLoading={dataLoading} />
    </>
  );
};

export default MainSection;
