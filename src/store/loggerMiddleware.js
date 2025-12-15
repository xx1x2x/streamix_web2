export const loggerMiddleware = (store) => (next) => (action) => {
  console.log("dispatch:", action.type, action);
  const result = next(action);
  console.log("next state:", store.getState());
  return result;
};
