import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalIngresos: 0,
  ingresos: [],
};

const ingresosSlice = createSlice({
  name: "ingresos",
  initialState,
  reducers: {
    onAddIngresos: (state, {payload}) => {
      state.totalIngresos = payload.total;
      state.ingresos = payload.ingresos;
    },
  },
});

export const { onAddIngresos } = ingresosSlice.actions;
export default ingresosSlice.reducer;
