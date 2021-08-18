<template>
    <div class="wrapper">
        <h1>My Playlist:</h1>
        <div>
            <p v-for="song in addSongtoPlaylist" :key="song.id">{{ song.name }}  <button :id="song.id" @click="removeFrPlaylist">-</button></p>
        </div>
        
    </div>
</template>

<script>
export default {
    name: "PlayList",
    computed: {
        addSongtoPlaylist: function() {
           return this.$store.getters.addToPlayList;
        }
    },
    methods: {
        removeFrPlaylist (event) {
             this.$store.commit('removeFrPlaylist', event.target.id);
        }
    }
}
</script>

<style scoped>
    .wrapper {
        background-color:cornflowerblue;
        height: 80vh;
        width: 80%;
    }
    p {
        text-align: center;
    }

    button {
        box-shadow: 0px 1px 0px 0px #fff6af;
        background:linear-gradient(to bottom, #ffec64 5%, #ffab23 100%);
        background-color:#ffec64;
        border-radius:6px;
        border:1px solid #ffaa22;
        display:inline-block;
        cursor:pointer;
        color:#333333;
        font-weight:bold;
        text-decoration:none;
        text-shadow:0px 1px 0px #ffee66;
    }
    
    p {
        color: seashell;
    }
</style>