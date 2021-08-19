import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mySongList : [
      {
        id : 0,
        name : "Take You Dancing",
        artist : "Jason Derulo",
        selected : false
      },
      {
        id : 1,
        name : "Save Your Tears",
        artist : "The Weeknd",
        selected : false
      },
      {
        id : 2,
        name : "The Hills",
        artist : "The Weeknd",
        selected : false
      },
      {
        id : 3,
        name : "EX.",
        artist : "2Scratch",
        selected : false
      },
      {
        id : 4,
        name : "Bad Habits - Joel Corry Remix",
        artist : "Ed Sheeran",
        selected : false
      },
      {
        id : 5,
        name : "No Friends",
        artist : "Cadmium",
        selected : false
      },
      {
        id : 6,
        name : "Take Over Control",
        artist : "Gaullin",
        selected : false
      },
      {
        id : 7,
        name : "German",
        artist : "EO",
        selected : false
      },
      {
        id : 8,
        name : "Queen of Broken Hearts",
        artist : "Blackbear",
        selected : false
      },
      {
        id : 9,
        name : "False Alarm",
        artist : "The Weeknd",
        selected : false
      },
    ],
    myPlaylist : []
  },
  mutations: {
    updateSelected: function(state, payload) {
      state.mySongList[payload].selected = true;
    },
    removeFrPlaylist: function(state, payload) {
      state.mySongList[payload].selected = false;
    }
  },
  actions: {},
  getters: {
    removeSongLst: function(state) {
      return state.mySongList.filter(x => x.selected == false);
    },
    addToPlayList: function(state) {
      return state.mySongList.filter(x => x.selected == true);
    },
    
  },
});
