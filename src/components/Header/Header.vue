<template>
  <div>
    <ul class="headertop">
      <li>
        <router-link id="web-logo" :to='Home'>
          <img alt="Logo" width="25px" height="25px" :src="HeaderData.info.LogoImg">
          <span></span>
        </router-link>
      </li>
      <template v-for="menu in HeaderData.menu">
          <li v-if="menu.issubMenu" class="dropdown" :key="menu.id">
            <a href="javascript:void(0)">{{menu.name}}</a>
              <ul class="dropdown-content">
                <li v-for="subMenu in menu.subMenu" :key="subMenu.id">
                  <router-link v-if="subMenu.display" :to='subMenu.url'>{{subMenu.name}}</router-link>
                </li>
              </ul>
          </li>
          <li v-else class="dropdown" :key="menu.id">
            <router-link :to="'menu.url'">{{menu.name}}</router-link>
          </li>
      </template>
      <li>
        <button class="navbar-toggler" @click="hide" ><span><img width="40px" height="40px" src="@/assets/navbar-toggler.png"></span></button>
      </li>
      <li class="right dropdown">
        <a href="javascript:void(0)"><img width="20px" height="20px" :src="HeaderData.userInfo.img"></a>
          <ul class="dropdown-content">
           <li>{{HeaderData.userInfo.name}}</li>
           <li><router-link :to="'Setting'">Setting</router-link></li>
           <li><router-link :to="'Logout'">Logout</router-link></li>
          </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    HeaderData: {
      type: Object,
      required: true
    }
  },
  methods: {
    hide () {
      let main = document.getElementById('Sidebar')
      main.classList.toggle('enlarged')
    }
  }
}
</script>

<style>

ul.headertop {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

ul.headertop li {
  float: left;
}

ul.headertop li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

ul.headertop li a:hover:not(.active) {
  background-color: #111;
}

ul.headertop li a.active {
  background-color: #4caf50;
}

ul.headertop li.right {
  float: right;
}

@media screen and (max-width: 600px) {
  ul.headertop li.right,
  ul.headertop li {
    float: none;
  }
  ul.headertop li button{
    display: none;
  }
}
ul.dropdown-content {
  color: cornflowerblue;
  display: none;
  padding-left: 0;
}

li.dropdown:hover ul{
  background: #333;
  display: block;
}

ul.dropdown-content li {
  clear: both;
  width: 100%;
}
</style>
