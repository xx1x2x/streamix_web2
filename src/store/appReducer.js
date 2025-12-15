import { Map } from "immutable";

// Начальное состояние как Immutable.Map
const initialState = Map({
  siteTitle: "Streamix.by",
});

// Тип экшена (для примера)
const SET_SITE_TITLE = "app/SET_SITE_TITLE";

// Action creator (если захотим потом менять заголовок)
export const setSiteTitle = (title) => ({
  type: SET_SITE_TITLE,
  payload: title,
});

// Reducer на Immutable.js
export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SITE_TITLE:
      // Возвращаем НОВЫЙ Immutable.Map (immutability)
      return state.set("siteTitle", action.payload);
    default:
      return state;
  }
}
