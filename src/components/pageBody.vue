<template>
<div>
  <h1>{{ header.toUpperCase()}}</h1>
  <p>Click on a song from the Song List to add to your playlist. You can also remove a song from the playlist.</p>
</div>
</template>

<script>
export default {
    name: "PageBody",
    data() {
      return {
        header: 'My Music Library'
      }
    }
}
</script>

<style scoped>

</style>