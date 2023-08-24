// A mock function to mimic making an async request for data
import { backend_Url } from "../../server";

export function fetchProductsById(id) {
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server url heree
    const response = await fetch(`${backend_Url}/products/` + id);
    const data = await response.json();
    resolve({ data });
  });
}

export function createProduct(product) {
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server url heree
    const response = await fetch(`${backend_Url}/products/`, {
      method: "POST",
      body: JSON.stringify(product),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}
export function updateProduct(update) {
  return new Promise(async (resolve) => {
    const response = await fetch(`${backend_Url}/products/` + update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();

    resolve({ data });
  });
}

export function fetchProductsByFilters(filter, sort, pagination, admin) {
  //filter {"category": "smartphone"}
  //sort {_sort:"price", order="desc"}
  //pagination ={_page:1 , _limit=10}//_page=1&_limit=10
  //Todo: onserver we will support multi values in filter

  //filtering
  let queryString = "";
  for (let key in filter) {
    const categoryValues = filter[key];
    if (categoryValues.length) {
      const lastCategoryValue = categoryValues[categoryValues.length - 1];
      queryString += `${key}=${lastCategoryValue}&`;
    }
  }

  //sorting
  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }

  //pagination
  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }
  if (admin) {
    queryString += `admin=true`;
  }
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server url heree
    const response = await fetch(`${backend_Url}/products?` + queryString);
    const data = await response.json();
    const totalItems = await response.headers.get("X-Total-Count");
    resolve({ data: { products: data, totalItems: +totalItems } });
  });
}

export function fetchCategories() {
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server url heree
    const response = await fetch(`${backend_Url}/categories`);
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchBrands() {
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server url heree
    const response = await fetch(`${backend_Url}/brands`);
    const data = await response.json();
    resolve({ data });
  });
}
