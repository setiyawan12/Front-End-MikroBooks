import axios from "axios";
import { api } from '../utils/API_URL'

export const login = () => {
  return axios.post(api + "auth/sign-in");
};
