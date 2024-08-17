import axios from "axios";

const productionUrl = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
  baseURL: productionUrl,
});

export const formatPrice = (price) => {
  const ringgitAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "MYR",
  }).format((price / 100).toFixed(2));
  return ringgitAmount;
};
