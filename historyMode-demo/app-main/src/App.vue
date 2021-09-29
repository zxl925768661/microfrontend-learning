<template>
  <div class="main-conatiner">
     <a-menu :selectedKeys="[currentRoute]" mode="inline" theme="dark">
      <a-menu-item 
        v-for="(item) in menus" 
        :key="item.key"
        >
        <router-link :to="item.route">{{item.title}}</router-link>
      </a-menu-item>
     </a-menu>
    <section class="content-wrapper">
      <!-- 主应用渲染区，用于挂载主应用路由触发的组件 -->
      <router-view v-show="$route.name" />

      <!-- 子应用渲染区，用于挂载子应用节点 -->
      <section v-show="!$route.name" id="frame"></section>
    </section>
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      menus: [
        {
          key: "Home",
          title: "主页",
          route: "/"
        },
        {
          key: "VueMicroApp",
          title: "Vue 主页",
          route: "/vue/"
        },
        {
          key: "VueMicroAppAbout",
          title: "Vue 关于",
          route: "/vue/about"
        },
        {
          key: "ReactMicroApp",
          title: "React 主页",
          route: "/react/"
        },
        {
          key: "ReactMicroAppAbout",
          title: "React 关于",
          route: "/react/about"
        }
      ]
    }
  },

  computed: {
    currentRoute() {
      const menu = this.menus.find(item => item.route === this.$route.path)
      return menu ? menu.key : "Home"
    }
  },
}
</script>
<style scoped>
#app {
  height: 100%;
  position: relative;
}
.ant-menu {
  position: fixed;
  width: 200px;
  height: 100%;
  bottom: 0;
  left: 0;
}
.content-wrapper {
  margin-left: 200px;
}
</style>
