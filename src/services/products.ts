import requester from "./api";

export async function getProductsList() {
  const response = await requester("http://localhost:8080/products");
  return response.data;
}

export default getProductsList