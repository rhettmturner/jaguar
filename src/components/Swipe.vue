<template>
  <div class="swipe">
    <div class="container">
      <a href="#"><img src="http://via.placeholder.com/350x400"></a>
      <div class="row" id="eventInformation">
        
        <div id="eventNameAndLocation" class="col-xs-9">
          <h3>Event Name</h3>
          <h4>Event Location</h4>
        </div>

        <div id="eventDateAndPrice" class="col-xs-3">
          <h3>Date</h3>
          <h4>$$$</h4>
        </div>

      </div>
    </div>
    <div class="row">
      <button class="btn btn-danger">X</button>
      <img src="http://via.placeholder.com/50x50" class="rounded-circle">
    </div>
  </div>
</template>

<script>
export default {
  name: 'swipe',
  data () {
    return {
    }
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
