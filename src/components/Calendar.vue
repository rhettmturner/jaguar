<template>
    <div class="calendar">
      <div class="container bg-info">
        <ul class="eventList">
          <li><a href="#"><img src="../assets/logo.png" alt="">it is me the list</a></li>
          <li><a href="#"><img src="../assets/logo.png" alt="">i am also the list yay</a></li>
          <li><a href="#"><img src="../assets/logo.png" alt="">i am the third woohoo</a></li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'calendar',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container {
  margin: -30px auto 0;
  padding: 0;
  width: 90%;
  height: 100%;
  border-right: 2px solid #001f3f;
  border-left: 2px solid #001f3f;

}

.eventList li {
  border-bottom: 4px solid #001f3f;
  margin-top: 20px;
  padding-left: 10px;
  text-decoration-color: none;
}

.eventList {
  list-style: none;
  width: 100%;
  padding: 0;
  margin: 0;
  margin-top: 23px;
  text-align: left;
}

.eventList img {
  width: 15%;
}

.eventList a {
  text-decoration: none;
  color: black;
  font-weight: bold;
}

img {
  max-width: 100%;
}

</style>
