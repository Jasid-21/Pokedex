import { createStore } from 'vuex'

export default createStore({
  state: {
    filter: { name: '' },
    entries: [],
    filtered: [],
    current: {},
    popUp: false,
    moveInfo: '',
    infoCoords: [6, 0]
  },
  mutations: {
    apply_filter: (state) => {
      const name = state.filter.name;
      var result = [];

      result = state.entries;
      if (name) {
        result = result.filter(e => e.name.includes(name));
      }

      state.filtered = result;
    },

    set_current: (state, payload) => {
      const id = payload;

      const pkmn = state.filtered.find(el => el.id == id);
      state.current = pkmn;
    },

    setPopUp: (state, payload) => {
      const activate = payload.activate;
      if (activate) {
        state.moveInfo = payload.info;
        var [X, Y] = payload.coords;

        const chance = payload.info.chance;
        const desc = payload.info.effect.replace('$effect_chance', chance);
        state.moveInfo.effect = desc;

        
        if (window.innerWidth - X < 260) {
          X = window.innerWidth - 260;
        }
        if (window.innerHeight - Y < 260) {
          Y = window.innerHeight - 260;
        }
        state.infoCoords = [X, Y];

        state.popUp = true;
      } else {
        state.popUp = false;
        state.moveInfo = '';
        state.infoCoords = [];
      }
    }
  },
  actions: {
    set_filter: ({ state, commit }, payload) => {
      state.filter = payload;
      commit('apply_filter');
    },

    set_entries: ({ state, commit }, payload) => {
      state.entries = payload;
      commit('apply_filter');
    },

    add_entries: ({ state, commit }, payload) => {
      state.entries.push(...payload);
      commit('apply_filter');
    }
  }
});
