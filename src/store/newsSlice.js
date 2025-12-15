import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Асинхронный экшен (thunk) для получения данных с сервера
export const fetchNews = createAsyncThunk("news/fetchNews", async () => {
  // ✅ Тянем русские спортивные новости с сервера (из public/)
  const response = await fetch("/data/sportsNews.json");

  if (!response.ok) {
    throw new Error("Ошибка загрузки новостей");
  }

  const data = await response.json();
  return data; // это придёт в fulfilled
});

const newsSlice = createSlice({
  name: "news",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Ошибка загрузки";
      });
  },
});

export default newsSlice.reducer;
