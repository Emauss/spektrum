import { IProfileSpecific } from "../interfaces/api/IProfileSpecific";

export type GlobalData = {
  allData: IProfileSpecific[];
  setAllData: (_value: IProfileSpecific[]) => void;
};
