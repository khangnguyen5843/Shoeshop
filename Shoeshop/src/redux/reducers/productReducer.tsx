import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { number } from "yup";
import { http } from "../../util/setting";
import { AppDispatch } from "../configStore";

export interface ProductModel {
  id: number,
  name: string,
  alias: string,
  price: number,
  description: string,
  size: number[],
  shortDescription: string,
  quantity: number,
  deleted: boolean,
  categories: object[],
  relatedProducts: number[],
  feature: boolean,
  image: string
}

const initialState: any = {
  arrProduct: [],
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
      getProductAction:(state,action:PayloadAction<ProductModel[]>) => {
          state.arrProduct = action.payload
      }
  }
});


export const { getProductAction } = productReducer.actions;

export default productReducer.reducer;

export const getProductApi = () => {
  return async (dispatch: AppDispatch) => {
    try{
        const result = await http.get("Product")
        let arrProduct:ProductModel[] = result.data.content
        const action = getProductAction(arrProduct)
        dispatch(action)
    }
    catch(err) {
      console.log({err});
    }
  }
}