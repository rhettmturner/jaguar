<template>
  <div class="swipe">
    <div class="container">
              <p>{{ events }}</p>
              Hello
            </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'event',
  data: () => ({
    events: [],
    errors: []
  }),

  created() {
    axios.get('https://www.eventbriteapi.com/v3/events/search/?token=BE4MSLBLQD6THH4B74W5')
    .then(response => {
      this.events = response.data;
    })
    .catch(e => {
      this.errors.push(e);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  max-width: 90%;
}

#eventInformation {
  text-align: left;
}

.btn-danger {
  border-radius: 50px;
  width: 50px;
  height: 50px;
}
</style>

