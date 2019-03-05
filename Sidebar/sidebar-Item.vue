<template>
  <router-link :to="subMenu.url" active-class="active">
    {{subMenu.name}}
  </router-link>
</template>
<script>
export default {
  props: ['subMenu'],
  data () {
    return {}
  },
  methods: {}
}
</script>
