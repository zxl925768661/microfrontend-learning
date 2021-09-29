const REACT_MICRO_APP = process.env.VUE_APP_REACT_MICRO_APP
const VUE_MICRO_APP = process.env.VUE_APP_VUE_MICRO_APP

const apps = [
  /**
   * name: 微应用名称 - 具有唯一性
   * entry: 微应用入口 - 通过该地址加载微应用，这里我们使用 config 配置
   * container: 微应用挂载节点 - 微应用加载完成后将挂载在该节点上
   * activeRule: 微应用触发的路由规则 - 触发路由规则后将加载该微应用
   */
  {
    name: "ReactMicroApp",
    entry: REACT_MICRO_APP,
    container: "#frame",
    activeRule: "/#/microApp/react",
  },
  {
    name: "VueMicroApp",
    entry: VUE_MICRO_APP,
    container: "#frame",
    activeRule: "/#/microApp/vue",
  }
];

export default apps;
