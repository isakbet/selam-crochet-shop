import { crochets } from "../products/crochets.js";
const PRODUCTS = "products";

export function getAndSeedProducts() {
  let products = JSON.parse(localStorage.getItem(PRODUCTS) || "[]");
  if (products.length === 0) products = crochets;
  localStorage.setItem(PRODUCTS, JSON.stringify(products));

  return products;
}

export function addProduct(crochet) {
  const crochetArr = getAndSeedProducts();

  if (!findByID(crochet.id, crochetArr)) crochetArr.push(crochet);
  else alert("invalid ID, already taken");

  localStorage.setItem(PRODUCTS, JSON.stringify(crochetArr));
}

export function clearProducts() {
  localStorage.setItem(PRODUCTS, JSON.stringify(crochets));
}
