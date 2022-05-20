import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";

interface IPriorityOptions {
  value: Array<IPrioritySelect>;
}

const SLICE_NAME = "priorityOptions";

const initialState: IPriorityOptions = {
  value: [],
};

export const priorityOptionsSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    setPriorityOptions: (state, action: PayloadAction<Array<IPrioritySelect>>) => {
      state.value = action.payload;
    },
  },
});

export const { setPriorityOptions } = priorityOptionsSlice.actions;

export const selectPriorityOptions = (state: RootState) =>
  state.priorityOptions.value;

export default priorityOptionsSlice.reducer;
