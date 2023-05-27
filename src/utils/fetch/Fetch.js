export async function Fetch(url = "", methode = "GET", data = {}) {
  const options = {
    method: methode,
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (methode !== "GET") options.body = JSON.stringify(data);
  const response = await fetch(url, options);
  return response.json();
}
