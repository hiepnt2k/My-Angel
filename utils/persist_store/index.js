export const persistStore = ["auth", "signup"];

export const persistReducer = (state) => ({
  ...persistStore.reduce(
    (reducer, storeName) => ({ ...reducer, [storeName]: state[storeName] }),
    {}
  ),
  // authen: {
  //   loginInfo: state.authen.loginInfo,
  // },
});
