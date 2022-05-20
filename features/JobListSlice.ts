import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";

// LocalStorage functions
import { getItemFromLS, saveItemToLS } from "@Utils";

interface IJobListState {
  value: Array<IJob>;
}

const SLICE_NAME = "jobList";

const INITIAL_JOB_LIST = getItemFromLS(SLICE_NAME);

const initialState: IJobListState = {
  value: INITIAL_JOB_LIST ? INITIAL_JOB_LIST : [],
};

export const jobListSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    createNewJob: (state, action: PayloadAction<IJob>) => {
      state.value.push(action.payload);

      saveItemToLS(SLICE_NAME, state.value);
    },
    editJob: (state, action: PayloadAction<IJob>) => {
      const index = state.value.findIndex(
        (job) => job.id === action.payload.id
      );

      if (index !== -1) {
        state.value[index] = action.payload;

        saveItemToLS(SLICE_NAME, state.value);
      }
    },
    deleteJob: (state, action: PayloadAction<IJob>) => {
      const index = state.value.findIndex(
        (job) => job.id === action.payload.id
      );

      if (index !== -1) {
        state.value.splice(index, 1);

        saveItemToLS(SLICE_NAME, state.value);
      }
    },
  },
});

export const { createNewJob, editJob, deleteJob } = jobListSlice.actions;

export const selectJobList = (state: RootState) => state.jobList.value;

export default jobListSlice.reducer;
