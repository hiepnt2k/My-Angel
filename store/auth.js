const INIT_STATE = {
  email: "",
  password: "",
};

export const state = () => {
  return JSON.parse(JSON.stringify(INIT_STATE));
};

export const actions = {
  resetState({ commit }) {
    commit("RESET_STATE");
  },
};

export const mutations = {
  RESET_STATE(state) {
    const initState = JSON.parse(JSON.stringify(INIT_STATE));
    for (let item of Object.keys(initState)) {
      state[item] = initState[item];
    }
  },
};

export const getters = {};