import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addToCard, fetchItemsByUserId } from "./cartAPI";

const initialState = {
  value: 0,
  items: [],
};

export const addToCardAsync = createAsyncThunk(
  "cart/addToCard",
  async (item) => {
    const response = await addToCard(item);
    return response.data;
  }
);

export const fetchItemsByUserIdAsync = createAsyncThunk(
  "cart/fetchItemsByUserId",
  async (userId) => {
    const response = await fetchItemsByUserId(userId);
    return response.data;
  }
);

export const ProductSlice = createSlice({
  name: "cart",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(addToCardAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addToCardAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.items.push(action.payload);
      })

      .addCase(fetchItemsByUserIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchItemsByUserIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.items = action.payload;
      });
  },
});

export const { increment, decrement, incrementByAmount } = ProductSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectItems = (state) => state.cart.value;

export default ProductSlice.reducer;
