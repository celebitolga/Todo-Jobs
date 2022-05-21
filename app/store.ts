import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

// slicers
import { jobListSlice, priorityOptionsSlice } from "@Features/index";

export const store = configureStore({
  reducer: {
    jobList: jobListSlice,
    priorityOptions: priorityOptionsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
