import axios from "axios";
import { IProfile } from "../interfaces/api/IProfile";

export const getProfile = async (number: number): Promise<IProfile> => {
  return await axios
    .get(`${process.env.REACT_APP_API_PROFILE_URL}/${number}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};
