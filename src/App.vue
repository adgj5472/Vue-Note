<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// import VueHeader from '@/components/Header'
// import Sidenav from '@/components/Sidenav'
export default {
  name: 'App',
  components: {}
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

div.center{
    width: 65%;
    height: auto;
    margin: auto auto;
    font-size: auto;
    text-align: center;
}

</style>
