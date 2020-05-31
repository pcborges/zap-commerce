export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const CHANGE_PRODUCT = "CHANGE_PRODUCT";

const addProductToCart = (product, state) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === product.id
  );

  if (updatedItemIndex < 0) {
    updatedCart.push({ ...product, quantity: 1 });
  } else {
    const updatedItem = {
      ...updatedCart[updatedItemIndex],
    };
    updatedItem.quantity++;
    updatedCart[updatedItemIndex] = updatedItem;
  }

  return { ...state, cart: updatedCart };
};

const removeProductFromCart = (productId, state) => {
  console.log("Removendo produto com id: ", productId);
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === productId
  );

  updatedCart.splice(updatedItemIndex, 1);

  return { ...state, cart: updatedCart };
};

const changeProductQuantity = (product, state) => {
  console.log("Alterando quantidade do produto com id: ", product.id);
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === product.id
  );

  const updatedItem = {
    ...updatedCart[updatedItemIndex],
  };

  // updatedCart.splice(updatedItemIndex, 1);
  if (product.quantity < 0) {
    updatedItem.quantity = 1;
    updatedCart[updatedItemIndex] = updatedItem;
  } else {
    updatedItem.quantity = product.quantity;
    updatedCart[updatedItemIndex] = updatedItem;
  }

  return { ...state, cart: updatedCart };
};

export const shopReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return addProductToCart(action.product, state);
    case REMOVE_PRODUCT:
      return removeProductFromCart(action.productId, state);
    case CHANGE_PRODUCT:
      return changeProductQuantity(action.product, state);
    default:
      return state;
  }
};
