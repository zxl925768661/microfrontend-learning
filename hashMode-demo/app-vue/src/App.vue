<template>
  <div id="app">
     <a-menu :selectedKeys="[currentRoute]" mode="horizontal" theme="dark">
      <a-menu-item 
        v-for="(item) in menus" 
        :key="item.key"
        >
        <router-link :to="item.route">{{item.title}}</router-link>
      </a-menu-item>
     </a-menu>
    <router-view/>
  </div>
</template>

<script>
let prefix = window.__POWERED_BY_QIANKUN__ ? "/microApp/vue" : "";
export default {
  name: "App",

  data() {
    return {
      menus: [
        {
          key: "home",
          route: "/",
          title: "主页"
        },
        {
          key: "about",
          route: "/about",
          title: "关于"
        }
      ]
    }
  },

  computed: {
    currentRoute() {
      const menu = this.menus.find(item => (prefix + item.route) === this.$route.path)
      return menu ? menu.key : "home"
    }
  },
}
</script>
