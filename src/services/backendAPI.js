export const getUserInformation = async (username) => {
  const res = await fetch(`${process.env.SERVER_URL}/users/${username}/info`);
  const data = await res.json();
  return data;
};
