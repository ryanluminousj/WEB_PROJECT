import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: function(state, action) {
      const newItem = action.payload;
      const productName = newItem.product;
      const productColor = newItem.color;
      const productStorage = newItem.storage;
      const productPrice = newItem.price;
      const productQuantity = newItem.quantity;

      const existingItem = state.items.find(function(item) {
        return item.product === productName &&
               item.color === productColor &&
               item.storage === productStorage;
      });

      if (existingItem) {
        existingItem.quantity += productQuantity;
      } else {
        state.items.push({
          product: productName,
          color: productColor,
          storage: productStorage,
          price: productPrice,
          quantity: productQuantity
        });
      }
    },

    removeItem: function(state, action) {
      const indexToRemove = action.payload;
      state.items = state.items.filter(function(item, index) {
        return index !== indexToRemove;
      });
    },

    clearCart: function(state) {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;