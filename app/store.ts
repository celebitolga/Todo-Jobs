import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

// slicers
import JobListSlice from "../features/JobListSlice";
import PriorityOptionsSlice from "../features/PriorityOptionsSlice";

export const store = configureStore({
  reducer: {
    jobList: JobListSlice,
    priorityOptions: PriorityOptionsSlice,
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
