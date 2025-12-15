import { configureStore } from "@reduxjs/toolkit";
import { loggerMiddleware } from "./loggerMiddleware";

import appReducer from "./appSlice";
import newsReducer from "./newsSlice";
import programReducer from "./programSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    news: newsReducer,
    program: programReducer, // ← ВАЖНО: ключ program
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
});

export default store;
