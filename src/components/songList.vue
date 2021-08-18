<template>
<div>
    <h1>Song List:</h1>
    <p v-for="song in allSongs" :key="song.name">{{ song.name }} - {{ song.artist }}  <button :id="song.id" @click="btnSelected">+</button></p>
</div>
   
</template>

<script>
export default {
    name: "SongList",
    computed: {
        allSongs: function() {
            return this.$store.getters.removeSongLst;
        },
    },
    methods: {
        btnSelected (event) {
            this.$store.commit('updateSelected', event.target.id)
        },
    }
}
</script>

<style scoped>
    div {
        background-color: rgba(219, 159, 48, 0.8);
        height: 80vh;
        width: 80%;
    }

    button {
        box-shadow:inset 0px 1px 0px 0px #97c4fe;
        background:linear-gradient(to bottom, #3d94f6 5%, #1e62d0 100%);
        background-color:#3d94f6;
        border-radius:6px;
        border:1px solid #337fed;
        display:inline-block;
        cursor:pointer;
        color:#ffffff;
        font-weight:bold;
        text-decoration:none;
        text-shadow:0px 1px 0px #1570cd;
    }

    div > p {
        text-align: left;
        margin-left: 8vw;
    }
</style>