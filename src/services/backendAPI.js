export const getUserInformation = async (username) => {
  const res = await fetch(`${process.env.SERVER_URL}/users/${username}/info`);
  const data = await res.json();
  return data;
};

export const getStore = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/store`);
  const data = await res.json();
  return data;
};

export const getReportInformation = async (reportID) => {
  const res = await fetch(`${process.env.SERVER_URL}/reports/${reportID}`);
  const data = await res.json();
  return data;
};

export const fetchResources = async (username) => {
  const res = await fetch(
    `${process.env.SERVER_URL}/users/${username}/resources`,
  );
  if (!res.ok) {
    throw new Error("Could not fetch the resources");
  }
  const userResources = await res.json();
  return userResources;
};
