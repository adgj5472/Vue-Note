<template>
  <li>
    <a @click="show">
      <i :class="menu.icon"></i>
      <span>{{menu.name}}</span>
      <span></span>
    </a>
    <ul name="subMenu" class="subMenu">
      <li v-for="subMenu in menu.subMenu" :key="subMenu.id">
        <template v-if="subMenu.display">
          <SidebarItem
            :subMenu="subMenu"
            :id="subMenu.id"
          />
        </template>
      </li>
    </ul>
  </li>
</template>

<script>
import SidebarItem from './Sidebar-Item'
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    menu: {
      type: Object
    }
  },
  components: {
    SidebarItem
  },
  data () {
    return {}
  },
  mounted () {},
  watch: {},
  methods: {
    show () {
      this.$el.getElementsByTagName('ul')[0].classList.toggle('subMenu')
    }
  }
}
</script>

<style>
li{
  list-style-type: none;
}
ul.subMenu li{
  display: none;
}

</style>
