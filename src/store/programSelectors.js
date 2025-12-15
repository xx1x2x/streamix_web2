import { createSelector } from "reselect";

// 1. Базовый селектор — достаёт часть состояния
const selectProgramState = (state) => state.program;

// 2. Селектор выбранного id
export const selectSelectedProgramId = createSelector(
  [selectProgramState],
  (programState) => programState.selectedProgramId
);

// 3. Селектор выбранной программы
export const selectSelectedProgram = createSelector(
  [
    selectSelectedProgramId,
    (_, programList) => programList, // список программ передадим извне
  ],
  (selectedId, programList) => {
    return programList.find((p) => p.id === selectedId) || null;
  }
);
