import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";

interface IPriorityOptions {
  priorityOptions: Array<IPrioritySelect>;
}

const SLICE_NAME = "priorityOptions";

const initialState: IPriorityOptions = {
  priorityOptions: [],
};

export const priorityOptionsSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    setPriorityOptions: (state, action: PayloadAction<Array<IPrioritySelect>>) => {
      state.priorityOptions = action.payload;
    },
  },
});

export const { setPriorityOptions } = priorityOptionsSlice.actions;

export const selectPriorityOptions = (state: RootState) =>
  state[SLICE_NAME];

export default priorityOptionsSlice.reducer;
