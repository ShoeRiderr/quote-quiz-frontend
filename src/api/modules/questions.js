import axios from "@/api/axios";

export const getAll = () => {
  return axios.get("/questions");
};

export const getAllWithAnswers = () => {
  return axios.get("/questions-with-answers");
};
