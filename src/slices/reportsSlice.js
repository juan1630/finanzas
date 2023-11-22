import { createSlice } from "@reduxjs/toolkit";
import { STATUS_REPORTS } from "../helpers/enums";

const initialState = {
  status: STATUS_REPORTS.not_creating,
  reports: [],
  errorMessage: null,
  reportCreated: {},
};

const reportsSlice = createSlice({
  initialState,
  name: "reports",
  reducers: {
    onCreateReports: (state, { payload }) => {
      state.status = STATUS_REPORTS.creating;
      state.reportCreated = payload;
    },
    onLoadingReports: (state) => {
      state.status = STATUS_REPORTS.creating;
    },
    onErrorReprtsMessage: (state, { payload }) => {
      state.reports = [];
      state.reportCreated = {};
      state.status = STATUS_REPORTS.not_creating;
      state.errorMessage = payload.error;
    },
    onCreatedReport: (state, { payload }) => {
      state.status = STATUS_REPORTS.created;
      state.reportCreated = payload;
    },
    onAddReports: (state, { payload }) => {
      state.status = STATUS_REPORTS.not_creating;
      state.reports = payload;
    },
  },
});

export const {
  onCreateReports,
  onErrorReprtsMessage,
  onLoadingReports,
  onCreatedReport,
  onAddReports,
} = reportsSlice.actions;
export default reportsSlice.reducer;
