<template>
  <div id="app">
  <header class="main-nav">
    <a href="#" id="profileButton"><i class="fa fa-bars"></i></a>
    <router-link to="/"><i class="fa fa-vcard-o"></i></router-link>
    <router-link to="Calendar" id="eventsButton"><i class="fa fa-table"></i></router-link>
  </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.css';

* {
  font-family: 'Cabin', sans-serif;
}

.main-nav {
  position: fixed;
  top: 0;
  width: 100%;
  height: 38px;
  background-color: #001f3f;
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 33.75px;
  padding-right: 33.75px;
}

.main-nav a {
  height: 100%;
  font-size: 30px;
}

.main-nav a:hover {
  color: lightskyblue;
}

#profileButton {
  margin-right: auto;
}

#eventsButton {
  margin-left: 25px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
