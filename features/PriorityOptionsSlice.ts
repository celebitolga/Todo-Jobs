import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";

// model
import { IPrioritySelect } from "../components/Todo/model";

interface IPriorityOptions {
  value: IPrioritySelect[];
}

const SLICE_NAME = "priorityOptions";

const initialState: IPriorityOptions = {
  value: [],
};

export const priorityOptionsSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    setPriorityOptions: (state, action: PayloadAction<IPrioritySelect[]>) => {
      state.value = action.payload;
    },
  },
});

export const { setPriorityOptions } = priorityOptionsSlice.actions;

export const selectPriorityOptions = (state: RootState) =>
  state.priorityOptions.value;

export default priorityOptionsSlice.reducer;
