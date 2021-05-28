import { FC, useEffect, useState } from "react";

// components
import SearchBar from "../SearchBar";
import ResultSection from "../ResultSection";

// Services
import { fetchOrderSummary } from "../../adapters/orderSearchServies";

// Constants
import { TSupplierMap } from "../../constants/types";
import { IOrderSummary } from "../../constants/interface";
import { ALL_SUPPLIER } from "../../constants";

const getSupplierListFromMap = (supplierMap: TSupplierMap) =>
  Object.keys(supplierMap);

const MainSection: FC = () => {
  const [suppliersMap, updateSupplierMap] = useState({} as TSupplierMap);
  const [AllSuppliersList, updateAllSupplierList] = useState([]);
  const [supplierList, updateSupplierList] = useState([
    ALL_SUPPLIER,
  ] as string[]);
  const [result, updateResult] = useState([] as Array<IOrderSummary>);
  const [supplierListLoading, updateSupplierListLoading] = useState(true);
  const [dataLoading, updateDataLoading] = useState(true);
  const [selectedSupplier, updateSelectedSupplier] = useState(ALL_SUPPLIER);

  useEffect(() => {
    const fetchData = async function () {
      try {
        const orderData = await fetchOrderSummary();
        const { data } = orderData;
        const supplierMap = {} as TSupplierMap;
        const originalList = data.map(
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
        updateSupplierMap(supplierMap);
        updateAllSupplierList(originalList);
        updateResult(originalList);
        updateSupplierList([
          ALL_SUPPLIER,
          ...getSupplierListFromMap(supplierMap),
        ]);
        updateSupplierListLoading(false);
        updateDataLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleSearchBar = (value: string = ALL_SUPPLIER) => {
    let selectedList;
    if (value === ALL_SUPPLIER) {
      selectedList = AllSuppliersList;
    } else {
      selectedList = suppliersMap[value];
    }
    updateSelectedSupplier(value);
    updateResult(selectedList);
  };

  return (
    <>
      <SearchBar
        supplierList={supplierList}
        supplierListLoading={supplierListLoading}
        handleSearchBar={handleSearchBar}
        selectedSupplier={selectedSupplier}
      />
      <ResultSection result={result} dataLoading={dataLoading} />
    </>
  );
};

export default MainSection;
