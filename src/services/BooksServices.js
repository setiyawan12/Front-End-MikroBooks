import axios from "axios";
import { api } from '../utils/API_URL'

export const books = () => {
  return axios.get(api + "books/show");
};
