import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";

// LocalStorage functions
import { getItemFromLS, saveItemToLS } from "@Utils";

interface IJobListState {
  jobList: Array<IJob>;
}

const SLICE_NAME = "jobList";

const INITIAL_JOB_LIST = getItemFromLS(SLICE_NAME);

const initialState: IJobListState = {
  jobList: INITIAL_JOB_LIST ? INITIAL_JOB_LIST : [],
};

export const jobListSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    createNewJob: (state, action: PayloadAction<IJob>) => {
      state.jobList.push(action.payload);

      saveItemToLS(SLICE_NAME, state.jobList);
    },
    editJob: (state, action: PayloadAction<IJob>) => {
      const index = state.jobList.findIndex(
        (job) => job.id === action.payload.id
      );

      if (index !== -1) {
        state.jobList[index] = action.payload;

        saveItemToLS(SLICE_NAME, state.jobList);
      }
    },
    deleteJob: (state, action: PayloadAction<IJob>) => {
      const index = state.jobList.findIndex(
        (job) => job.id === action.payload.id
      );

      if (index !== -1) {
        state.jobList.splice(index, 1);

        saveItemToLS(SLICE_NAME, state.jobList);
      }
    },
  },
});

export const { createNewJob, editJob, deleteJob } = jobListSlice.actions;

export const useJobList = (state: RootState) => state[SLICE_NAME];

export default jobListSlice.reducer;
