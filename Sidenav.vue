<template>
  <div>
    <button v-on:click="hide" >a</button>
    <div id="main">
      <ul class="sidenav">
        <li>
          <a class="active" href="#home">Home</a>
        </li>
        <li>
          <a href="#news">News</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    hide () {
      let main = document.getElementById('main')
      // main.style.width = '4000px'
      main.classList.toggle('enlarged')
    }

  }
}

</script>

<style>
div.enlarged {
  display: none;
}
ul.sidenav {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 17%;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;
  font-size: auto;
}

ul.sidenav li a {
  display: block;
  color: #000;
  padding: 8px 16px;
  text-decoration: none;
}

ul.sidenav li a.active {
  background-color: #4CAF50;
  color: white;
}

ul.sidenav li a:hover:not(.active) {
  background-color: #555;
  color: white;
}

@media screen and (max-width: 600px) {
  ul.sidenav {
    position: relative;
  }
  ul.sidenav li a {
    display: none;
  }
}

</style>
