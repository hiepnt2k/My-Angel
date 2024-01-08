import VuexPersistence from "vuex-persist";
import { persistReducer } from "~/utils/persist_store";

export default ({ store }) => {
  new VuexPersistence({
    storage: window.sessionStorage,
    reducer: persistReducer
  }).plugin(store);
};
