export async function fetchWrapper(url, options = {}) {
  const res = await fetch(url, {
    ...options,
    credentials: "include",
  });

  console.log(res);
  if (!res.ok) {
    const { message } = await res.json();
    throw new Error(message);
  }

  return res.json();
}
