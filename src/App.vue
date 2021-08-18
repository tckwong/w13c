<template>
  <div id="app">
    <PageBody id="pgHeader"/>
    <SongList/>
    <PlayList/>
  </div>
</template>

<script>
import SongList from "./components/songList.vue";
import PlayList from "./components/playList.vue";
import PageBody from "./components/pageBody.vue";

export default {
  name: "App",
  components: { 
    SongList,
    PlayList,
    PageBody
  },
  methods: {
   
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
  margin-left: 4vw;
  margin-right: 4vw;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2vw;
  justify-content: center;
  justify-items: center;
}

#pgHeader {
    grid-column: 1/4;
  
  }
</style>
