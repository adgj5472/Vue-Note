<template>
  <div>
      <VueHeader :HeaderData="HeaderData"></VueHeader>
      <Sidenav :SidebarData="SidebarData"></Sidenav>
      <router-view/>
  </div>
</template>

<script>
import VueHeader from '@/components/Header'
// import Sidenav from '@/components/Sidenav'
import Sidenav from '@/components/Sidebar/Sidebar'
let SidebarData = {
  info: {
    id: 'Home',
    name: 'Home',
    desc: 'Home',
    url: '/dashboard/Home'
  },
  menu: [
    {
      id: 'About',
      name: 'About',
      desc: 'About',
      subMenu: [
        {
          id: 'About',
          name: 'About',
          desc: 'About',
          url: '/dashboard/About',
          display: true
        }
      ]
    },
    {
      id: 'test',
      name: 'test',
      desc: 'test',
      subMenu: [
        {
          id: 'test01',
          name: 'test01',
          desc: 'test01',
          url: '/test/01',
          display: true
        },
        {
          id: 'test02',
          name: 'test02',
          desc: 'test02',
          url: '/test/02',
          display: false
        },
        {
          id: 'test03',
          name: 'test03',
          desc: 'test03',
          url: '/test/03',
          display: true
        }
      ]
    }
  ]
}

let HeaderData = {
  info: {
    id: 'logo',
    name: 'logo',
    LogoImg: require('../assets/logo.png'),
    url: 'Home'
  },
  menu: [
    {
      id: 'News',
      name: 'News',
      dropdown: true,
      url: '',
      subMenu: [
        {
          id: 'Link1',
          name: 'Link1',
          desc: 'Link1',
          url: '/dashboard/Link1',
          display: true
        },
        {
          id: 'Link2',
          name: 'Link2',
          desc: 'Link2',
          url: '/dashboard/Link2',
          display: true
        }
      ]
    },
    {
      id: 'Contact',
      name: 'Contact',
      dropdown: false,
      url: '/dashboard/Contact'
    },
    {
      id: 'Dropdown',
      name: 'Dropdown',
      dropdown: true,
      url: '',
      subMenu: [
        {
          id: 'Home',
          name: 'Home',
          desc: 'Home',
          url: 'Home',
          display: true
        },
        {
          id: 'About',
          name: 'About',
          desc: 'About',
          url: 'About',
          display: true
        }
      ]
    }
  ]
}

export default {
  name: 'layout',
  data () {
    return {
      SidebarData: SidebarData,
      HeaderData: HeaderData
    }
  },
  components: {
    VueHeader, Sidenav
  },
  methods: {
    sidebariscolse: true
  }
}
</script>
