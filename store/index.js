export const state = () => ({
  settings: null,
});

export const getters = {
  getSettings(state) {
    return state.settings;
  },
};

export const mutations = {
  setSettings(state, settings) {
    state.settings = settings;
  },
};

export const actions = {
  async nuxtServerInit({ commit }, { $prismic, $axios }) {
    try {
      const settings = await $prismic.api.getSingle('website_settings');
      commit('setSettings', settings || null);
    } catch (error) {}
  },
};
