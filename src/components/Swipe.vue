<template>
  <div v-if="localEvents[counter]" class="swipe">
    <router-link to="Description">
      <div  @click="passLocalEvents(localEvents[counter])" class="container">
        <a href="/Description"><img :src="displayEventImage(localEvents[counter])" class="roundedBorders"></a>
        <div class="row roundedBorders" id="eventInformation">
          <div id="eventNameAndLocation" class="col-xs-9">
            <h3>{{ localEvents[counter].title }}</h3>
            <h4>{{ localEvents[counter].genre }}</h4>
          </div>

          <div id="eventDateAndPrice" class="col-xs-3">
            <h3>{{ localEvents[counter].date }}</h3>
            <h4>{{ localEvents[counter].priceRange }}</h4>
          </div>

            </div>
        </div>
      </router-link>
    <div id="buttons">
      <!--
        On click, we can push to a likedEvents array which we export
          from here and import into the calendar file?
      -->
      <button class="btn btns btnNo" @click="counter += 1">&#10006;</button>
      <button class="btn btns btnYes" @click="navigateToURL(localEvents[counter])">&#10003;</button>
    </div>  
  </div>
</template>

<script>
import axios from 'axios';
import { EventBus } from './event-bus'

function eventObj(title, genre, date, time, priceRanges, description, eventLink, images)  {
    this.title = title;
    this.genre = genre;
    this.date = date + " " + time.slice(0, 5);
    this.priceRange = (priceRanges) ? '$' + priceRanges.min + ' - $' + priceRanges.max : '';
    this.description = description;
    this.eventLink = eventLink;
    this.image = (images) ? images[0].url : '';
}
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
        if (o.priceRanges != undefined && o.priceRanges.length > 0) {
          var priceRange = o.priceRanges[0];
        }
        if (o.images.length > 0) {
          var image = o.images;
        }
        // !! We need to determine how we're going to grab the description !! //
        localEvents.push(new eventObj(o.name, o.classifications[0].genre.name, o.dates.start.localDate, o.dates.start.localTime, priceRange, '', o.url, image))
      })
    })
  },
  methods: {
    navigateToURL: function (localEvents) {
      return window.location.href = localEvents.eventLink;
    },
    displayEventImage: function (localEvents) {
      return localEvents.image;
    },
    passLocalEvents: function(localEvents) {
      EventBus.$emit('event', localEvents);
    }
  }
}
</script>

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
