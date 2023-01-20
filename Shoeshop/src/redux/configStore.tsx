import { configureStore, PayloadAction } from "@reduxjs/toolkit";
import productReducer from './reducers/productReducer'


export const store = configureStore({
  reducer: {
    numberReducer: (state, action: PayloadAction<number>) => {
      return 1;
    },
    productReducer: productReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;