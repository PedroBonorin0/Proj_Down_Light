// import axios from "axios";

export default {
  state() {
    return {};
  },
  mutations: {
    // registerCoach(state, payload) {
    //   state.coaches.push(payload);
    // },
    // setCoaches(state, payload) {
    //   state.coaches = payload;
    // },
    // setFetchTimestamp(state) {
    //   state.lastFetch = new Date().getTime();
    // },
  },
  actions: {
    // async registerCoach(context, payload) {
    //   const userId = context.rootGetters.userId;
    //   const coachData = {
    //     id: userId,
    //     firstName: payload.first,
    //     lastName: payload.last,
    //     description: payload.desc,
    //     hourlyRate: payload.rate,
    //     areas: payload.areas,
    //   };
    //   const token = context.rootGetters.token;
    //   await axios.put(
    //     `https://vue-course-http-82d72-default-rtdb.firebaseio.com/coaches/${userId}.json?auth=${token}`,
    //     JSON.stringify(coachData)
    //   );
    //   context.commit("registerCoach", coachData);
    // },
    // async loadCoaches(context, payload) {
    //   if (!payload.forceRefresh && !context.getters.shouldUpdate) return;
    //   let coaches = [];
    //   await axios
    //     .get(
    //       `https://vue-course-http-82d72-default-rtdb.firebaseio.com/coaches.json`
    //     )
    //     .then((res) => {
    //       if (res.data) coaches = Object.values(res.data);
    //       else coaches = [];
    //     })
    //     .catch((err) => {
    //       throw new Error(err.message || "Failed to fetch!");
    //     });
    //   context.commit("setCoaches", coaches);
    //   context.commit("setFetchTimestamp");
    // },
  },
  getters: {
    // coaches(state) {
    //   return state.coaches;
    // },
    // hasCoaches(state) {
    //   return state.coaches && state.coaches.length > 0;
    // },
    // isCoach(_state, getters, _rootState, rootGetters) {
    //   const coaches = getters.coaches;
    //   const userId = rootGetters.userId;
    //   return coaches.some((coach) => coach.id === userId);
    // },
    // shouldUpdate(state) {
    //   const lastFetch = state.lastFetch;
    //   if (!lastFetch) return true;
    //   const currentTimeStamp = new Date().getTime();
    //   return (currentTimeStamp - lastFetch) / 1000 > 60;
    // },
  },
};
