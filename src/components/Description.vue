<template>
    <div class="description">
      <div class="main-container">
        <h2>Description: </h2>
        <p id="descriptionText"></p>
      </div>
    </div>
</template>

<!--
  Be able to tell which description we are looking at here.
  Maybe import localEvents[i] information?? Not sure
-->

<script>
import { EventBus } from './event-bus'

EventBus.$on('event', localEvents => {
  console.log("Within Description: " + localEvents.description)
})

export default {
  name: 'description',
  data () {
    return {
    }
  }
}
</script>

<style scoped>

  .main-container {
    width: 90%;
    margin: 0 auto;
  }

  h2 {
    text-align: left;
  }
</style>
