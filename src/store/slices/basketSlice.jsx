import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
  name: "basktet",
  initialState: [],
  reducers: {
    addDish(state, action) {
      const item = action.payload;
      const index = state.findIndex((dish) => dish.dishId === item.dishId);

      if (index !== -1) {
        state[index].dishCounts++;
      } else {
        state.push(item);
      }

      console.log("17 Add BasketSlice", state);
    },

    removeDish(state, action) {
      const item = action.payload;
      const index = state.findIndex((dish) => dish.dishId === item.dishId);

      if (index !== -1) {
        if (state[index].dishCounts === 1) {
          state.splice(index, 1);
        } else {
          state[index].dishCounts--;
        }
      }

      console.log("30 Remove BasketSlice", state);
    },

    removeAllDish(state, action) {
      state.splice(0, state.length);
    },
  },
});

export default basketSlice.reducer;
export const { addDish, removeDish, removeAllDish } = basketSlice.actions;
