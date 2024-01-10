import { getField, updateField } from "vuex-map-fields";

export const state = () => ({
  loadingGlobal: false,
  notify: {
    text: "",
    type: "",
    open: false,
  },
});
export const actions = {
  setNotify({ commit }, payload) {
    commit("SET_NOTIFY", payload);
  },
};
export const mutations = {
  updateField,
  SET_NOTIFY(state, payload) {
    const { text, type, open } = payload;
    state.notify.text = text;
    state.notify.type = type;
    state.notify.open = open;
  },
  SET_LOADING(state, payload) {
    state.loadingGlobal = payload;
  },
};
export const getters = {
  getField,
};
