import { createStore } from "vuex";
import axios from "axios";
axios.defaults.baseURL = "https://api.football-data.org/v2/";
axios.defaults.headers["X-Auth-Token"] = "49eef3166bc34ee28b7a7cea643fbd01";

const plan = {
  plan: "TIER_ONE",
};

export default createStore({
  state: {
    areas: [],
    teams: [],
    teamsItem: {},
    competitions: [],
    competitionsItem: {},
  },
  getters: {
    getTeams: (state) => state.teams,
    getTeamsItem: (state) => state.teamsItem,
    getAreas: (state) => state.areas,
    getCompetitions: (state) => state.competitions,
    getCompetitionsItem: (state) => state.competitionsItem,
  },
  mutations: {
    setTeams(state, teams) {
      state.teams = teams;
    },
    setTeamsItem(state, teamsItem) {
      state.teamsItem = teamsItem;
    },
    setAreas(state, areas) {
      state.areas = areas;
    },
    setCompetitions(state, competitions) {
      state.competitions = competitions;
    },
    setCompetitionsItem(state, competitionsItem) {
      state.competitionsItem = competitionsItem;
    },
  },
  actions: {
    async apiCompetitions({ commit }) {
      let response = await axios({
        url: `competitions`,
        method: "get",
        params: plan,
      });
      commit("setCompetitions", response.data.competitions);
    },
    async apiCompetitionsItem({ commit }, id) {
      let response = await axios({
        url: `competitions/${id}`,
        method: "get",
      });
      commit("setCompetitionsItem", response.data);
    },
    async apiAreas({ commit }) {
      let response = await axios({
        url: `areas`,
        method: "get",
      });
      commit("setAreas", response.data.areas);
    },
    async apiTeams({ commit }) {
      let response = await axios({
        url: `teams`,
        method: "get",
      });
      commit("setTeams", response.data.teams);
    },
    async apiTeamsItem({ commit }, id) {
      let response = await axios({
        url: `teams/${id}`,
        method: "get",
      });
      commit("setTeamsItem", response.data);
    },
  },
  modules: {},
});
