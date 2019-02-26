<template>
  <div>
    <ul class="topnav">
      <li>
        <a class="active" href="#home">Home</a>
      </li>
      <li>
        <a href="#news">News</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
      <li class="right dropdown">
        <a href="#about">About</a>
          <div class="dropdown-content">
           <a href="#">Link 1</a>
           <a href="#">Link 2</a>
           <a href="#">Link 3</a>
          </div>
      </li>
    </ul>

    <div style="padding:0 16px;">
      <h2>Responsive Topnav Example</h2>
      <p>This example use media queries to stack the topnav vertically when the screen size is 600px or less.</p>
      <p>You will learn more about media queries and responsive web design later in our CSS Tutorial.</p>
      <h4>Resize the browser window to see the effect.</h4>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {}
}
</script>

<style>

ul.topnav {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

ul.topnav li {
  float: left;
}

ul.topnav li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

ul.topnav li a:hover:not(.active) {
  background-color: #111;
}

ul.topnav li a.active {
  background-color: #4caf50;
}

ul.topnav li.right {
  float: right;
}

@media screen and (max-width: 600px) {
  ul.topnav li.right,
  ul.topnav li {
    float: none;
  }
}

.dropdown {
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #5c5c5c;
  box-shadow: 0px 8px 16px 0px rgba(226, 198, 219, 0.2);
  min-width: auto;
  font-size: auto;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}



.dropdown:hover .dropdown-content {
  display: block;
}

</style>
