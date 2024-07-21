import { fetchWrapper } from "../utils/fetchWarpper";

export const getUserInformation = async (username) => {
  const data = await fetchWrapper(
    `${process.env.SERVER_URL}/users/${username}/info`,
  );
  return data;
};

export const getStore = async () => {
  const data = await fetchWrapper(`${process.env.SERVER_URL}/store`);
  return data;
};

export const getReportInformation = async (reportID) => {
  const data = await fetchWrapper(
    `${process.env.SERVER_URL}/reports/${reportID}`,
  );
  return data;
};

export const fetchResources = async (username) => {
  const userResources = await fetchWrapper(
    `${process.env.SERVER_URL}/users/${username}/resources`,
  );
  return userResources;
};
