import { getCookie, hasCookie, setCookie } from "cookies-next";

export const getCookieCard = async (): Promise<{ [id: string]: number }> => {
  if (hasCookie("cart")) {
    const cookieCart = await getCookie("cart");
    const cart = JSON.parse(cookieCart ?? "{}");
    return cart;
  }
  return {};
};

export const addProductToCart = async (id: string) => {
  const cookieCart = await getCookieCard();

  if (cookieCart[id]) {
    cookieCart[id]++;
  } else {
    cookieCart[id] = 1;
  }

  setCookie("cart", JSON.stringify(cookieCart));
};

export const removeProductFromCart = async (id: string) => {
  const cookieCart = await getCookieCard();
  if (cookieCart[id]) delete cookieCart[id];

  setCookie("cart", JSON.stringify(cookieCart));
};

export const removeSingleItemFromCart = async (id: string) => {
  const cookieCart = await getCookieCard();
  if (!cookieCart[id]) return;
  cookieCart[id]--;
  if (cookieCart[id] <= 0) removeProductFromCart(id);

  setCookie("cart", JSON.stringify(cookieCart));
};
