<template>
  <div id="Sidebar">
    <ul class="sidenav">
        <li>
        <router-link
            v-if="SidebarData.info != null"
            :to="SidebarData.info.url"
            active-class="active"
        >
            <span>{{SidebarData.info.name}}</span>
        </router-link>
        </li>
        <template v-for="menu in SidebarData.menu">
          <SidebarMenu v-if="menu.issubMenu" :menu="menu" :id="menu.id" :key="menu.id"/>
          <li v-else :key="menu.id">
            <router-link :to="menu.url" active-class="active">{{menu.url}}</router-link>
          </li>
        </template>
    </ul>
  </div>
</template>

<script>
import SidebarMenu from './Sidebar-Menu'

export default {
  name: 'SideBarLeft',
  components: {
    SidebarMenu
  },
  props: {
    SidebarData: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  },
  watch: {},
  mounted () {},
  updated () {},
  methods: {}
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
  text-decoration:none;
}

ul.sidenav li a.active {
  border-left: 0;
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
