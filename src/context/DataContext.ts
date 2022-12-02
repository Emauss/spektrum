import { createContext, useContext } from "react";
import { GlobalData } from "../types/GlobalData";

export const DataContext = createContext<GlobalData>({
  allData: [],
  setAllData: (_value) => {},
});

export const useGlobalContext = () => useContext(DataContext);
