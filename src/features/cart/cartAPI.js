export function addToCard(item) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "https://mern-ecommerce-d82j.onrender.com/cart",
      {
        method: "POST",
        body: JSON.stringify(item),
        headers: { "content-type": "application/json" },
      }
    );
    const data = await response.json();

    resolve({ data });
  });
}

export function fetchItemsByUserId() {
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server url heree
    const response = await fetch(
      "https://mern-ecommerce-d82j.onrender.com/cart"
    );
    const data = await response.json();
    resolve({ data });
  });
}

export function updateCart(update) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "https://mern-ecommerce-d82j.onrender.com/cart/" + update.id,
      {
        method: "PATCH",
        body: JSON.stringify(update),
        headers: { "content-type": "application/json" },
      }
    );
    const data = await response.json();

    resolve({ data });
  });
}

export function deleteItemFromCart(itemId) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "https://mern-ecommerce-d82j.onrender.com/cart/" + itemId,
      {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      }
    );
    const data = await response.json();

    resolve({ data: { id: itemId } });
  });
}

export function resetCart() {
  //get all the item of user and delete all item from card
  return new Promise(async (resolve) => {
    const response = await fetchItemsByUserId();
    const items = response.data;
    for (let item of items) {
      await deleteItemFromCart(item.id);
    }
    resolve({ status: "success" });
  });
}
