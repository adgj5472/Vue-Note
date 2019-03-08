<template>
  <div>
      <VueHeader :HeaderData="HeaderData"></VueHeader>
      <Sidenav :SidebarData="SidebarData"></Sidenav>
      <router-view/>
  </div>
</template>

<script>
import VueHeader from '@/components/Header/Header'
// import Sidenav from '@/components/Sidenav'
import Sidenav from '@/components/Sidebar/Sidebar'

let SidebarData = {
  info: {
    id: 'Home',
    name: 'Home',
    url: '/dashboard/Home'
  },
  menu: [
    {
      id: 'About',
      name: 'About',
      url: '',
      issubMenu: true,
      subMenu: [
        {
          id: 'About',
          name: 'About',
          url: '/dashboard/About',
          display: true
        }
      ]
    },
    {
      id: 'test',
      name: 'test',
      url: '',
      issubMenu: true,
      subMenu: [
        {
          id: 'test01',
          name: 'test01',
          url: '/dashboard/01',
          display: true
        },
        {
          id: 'test02',
          name: 'test02',
          url: '/dashboard/02',
          display: false
        },
        {
          id: 'test03',
          name: 'test03',
          url: '/dashboard/03',
          display: true
        }
      ]
    },
    {
      id: 'Lottery',
      name: 'Lottery',
      url: 'Lottery',
      issubMenu: false
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
      issubMenu: true,
      url: '',
      subMenu: [
        {
          id: 'Link1',
          name: 'Link1',
          url: '/dashboard/Link1',
          display: true
        },
        {
          id: 'Link2',
          name: 'Link2',
          url: '/dashboard/Link2',
          display: true
        }
      ]
    },
    {
      id: 'Contact',
      name: 'Contact',
      issubMenu: false,
      url: '/dashboard/Contact'
    },
    {
      id: 'Dropdown',
      name: 'Dropdown',
      issubMenu: true,
      url: '',
      subMenu: [
        {
          id: 'Home',
          name: 'Home',
          url: 'Home',
          display: true
        },
        {
          id: 'About',
          name: 'About',
          url: 'About',
          display: true
        },
        {
          id: 'Lottery',
          name: 'Lottery',
          url: 'Lottery',
          display: true
        }
      ]
    }
  ],
  userInfo: {
    img: require('@/assets/treelogo.png'),
    id: '5555555',
    name: 'onion'
  }
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
