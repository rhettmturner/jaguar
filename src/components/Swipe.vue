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
        <p>{{ localEvents }}</p>

      <div id="buttons">
        <button class="btn btns btnNo" v-on:click="counter += 1">&#10006;</button>
        <button class="btn btns btnYes" v-on:click="counter += 1">&#10003;</button>
      </div>

      <p>The button above has been clicked {{ counter }} times.</p>  
  
     </div>
    </div>
</template>

<script>
import axios from 'axios';
function eventObj(title, location, date, priceRanges, description, eventLink, images)  {
    this.title = title;
    this.location = location;
    this.date = date;
    console.log("Blah: " + priceRanges.max)
    this.priceRange = (priceRanges) ? priceRanges.max : '';
    //    this.priceRange = (priceRanges) ? priceRanges.min + ' - ' + priceRanges.max : '';
    this.description = description;
    this.eventLink = eventLink;
    this.image = (images) ? images[0].url : '';
    console.log("Blah blah: " + images[0].url)
}

var token = "BE4MSLBLQD6THH4B74W5";
var latitude = '33.543682';
var longitude = '-86.779633';
var within = '20mi';
var counter = 0;
var localEvents = [];

export default {
  name: 'event',
  data: () => ({
    events: [],
    counter: counter,
    localEvents: localEvents
  }),

  created() {
    axios.get('https://app.ticketmaster.com/discovery/v2/events.json?dmaId=232&apikey=c1DrkQUS5VFM6ZdKD4tbZxFPLtoK9dGC')
    .then(response => {
      this.events = response.data._embedded.events
      console.log(response.data._embedded.events);
      this.events.forEach(function (o) {
        var priceRange = 'Nothing';
        if (o.priceRanges !== undefined && o.priceRanges.length > 0) {
          priceRange = o.priceRanges[0];
        }
        var image = '#';
        if (o.images.length > 0) {
          image = o.images;
        }
        localEvents.push(new eventObj(o.name, '', o.dates.start.localDate, priceRange, '', o.url, image))
        //        localEvents.push(new eventObj(o.name, '', o.dates.start.localDate, o.priceRanges.min, o.priceRanges.max, '', o.url, o.images[0]))

      })
      console.log(localEvents[0])
      return localEvents
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
