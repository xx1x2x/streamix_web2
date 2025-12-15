import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProgramId: null, // ничего не выбрано по умолчанию
};

const programSlice = createSlice({
  name: "program",
  initialState,
  reducers: {
    setSelectedProgramId(state, action) {
      // Redux Toolkit сам делает иммутабельность через Immer
      state.selectedProgramId = action.payload;
    },
    resetSelectedProgram(state) {
      state.selectedProgramId = null;
    },
  },
});

export const { setSelectedProgramId, resetSelectedProgram } =
  programSlice.actions;

export default programSlice.reducer;
