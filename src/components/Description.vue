<template>
    <div class="description">
      <div class="main-container">
        <h2>Description: </h2>
        <p id="descriptionText"></p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'description',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .main-container {
    width: 90%;
    margin: 0 auto;
  }

  h2 {
    text-align: left;
  }
</style>
