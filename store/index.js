export const state = () => ({
  settings: null,
  header: null,
  footer: null,
  notFoundPage: null,
  errorPage: null,
});

export const getters = {
  getSettings(state) {
    return state.settings;
  },
  getHeader(state) {
    return state.header;
  },
  getFooter(state) {
    return state.footer;
  },
  getNotFoundPage(state) {
    return state.notFoundPage;
  },
  getErrorPage(state) {
    return state.errorPage;
  },
};

export const mutations = {
  setSettings(state, settings) {
    state.settings = settings;
  },
  setHeader(state, header) {
    state.header = header;
  },
  setFooter(state, footer) {
    state.footer = footer;
  },
  setNotFoundPage(state, notFoundPage) {
    state.notFoundPage = notFoundPage;
  },
  setErrorPage(state, errorPage) {
    state.errorPage = errorPage;
  },
};

export const actions = {
  async nuxtServerInit({ commit }, { $prismic, $axios }) {
    try {
      let promises = await Promise.all([
        $prismic.api.getSingle('website_settings'),
        $prismic.api.getSingle('header'),
        $prismic.api.getSingle('footer'),
        $prismic.api.getSingle('page_not_found'),
        $prismic.api.getSingle('error_page'),
      ]);

      let settings = promises[0];
      let header = promises[1];
      let footer = promises[2];
      let page_not_found = promises[3];
      let errorPage = promises[4];

      //console.log('footer', JSON.stringify(footer.data.slices));

      commit('setSettings', settings || null);
      commit('setHeader', header || null);
      commit('setFooter', footer || null);
      commit('setNotFoundPage', page_not_found || null);
      commit('setErrorPage', errorPage || null);
    } catch (error) {
      //console.log('nuxtServerInit error');
      console.log(error);
    }
  },
};
