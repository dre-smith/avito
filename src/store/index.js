import Vue from "vue";
import Vuex from "vuex";

import links from "@/store/links";
import bestsellers from "@/store/bestsellers";
import coffee from "@/store/coffee";
import goods from "@/store/goods";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    links,
    bestsellers,
    coffee,
    goods,
  },
});

export default store;
