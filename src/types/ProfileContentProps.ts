import { IProfile } from "../interfaces/api/IProfile";

export type ProfileContentProps = {
  counter: number;
  data: IProfile | undefined;
  handleNextProfiles: (num: number) => void;
};
