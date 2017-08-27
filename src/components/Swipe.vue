<template>
    <div class="swipe">
      <div class="container">
        <a href="#"><img src="http://via.placeholder.com/350x400" class="roundedBorders"></a>
        <div class="row roundedBorders" id="eventInformation">

          <div id="eventNameAndLocation" class="col-xs-9">
            <h3>Event Name</h3>
            <h4>Event Location</h4>
          </div>

          <div id="eventDateAndPrice" class="col-xs-3">
            <h3>Date</h3>
            <h4>$$$</h4>
          </div>

        </div>

      <div id="buttons">
        <button class="btn btns btnNo">&#10006;</button>
        <button class="btn btns btnYes">&#10003;</button>
      </div>

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

#eventInformation {
  margin-top: 10px;
  margin-right: 0;
  margin-left: 0;
  padding-bottom: 12px;
  background-color: #001f3f;
  color: white;
}

.roundedBorders {
 border-radius: 10px;
}

.container {
  width: 90%;
  margin: 0 auto;
}

#buttons {
  height: 50px;
  margin-top: 5px;
}

.swipe {
 margin-top: -20px;
}

img {
  max-width: 100%;
}

#eventInformation {
  text-align: left;
}

.btns {
  border-radius: 25px;
  width: 40%;
  height: 100%;
  font-size: 25px;
  box-shadow: 1px 1px 3px black;
}

.btnNo {
  background-color: #FF4136;
}

.btnYes {
  background-color: #01FF70;
}

</style>

