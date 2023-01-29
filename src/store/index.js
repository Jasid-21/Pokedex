import { createStore } from 'vuex'

export default createStore({
  state: {
    entries: [],
    filtered: [],
    current: {},
    popUp: false,
    moveInfo: '',
    infoCoords: [6, 0]
  },
  mutations: {
    set_entries: (state, payload) => {
      state.entries = payload;
      state.filtered = payload;
    },

    set_filter: (state, payload) => {
      const name = payload.name;
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
  }
});
