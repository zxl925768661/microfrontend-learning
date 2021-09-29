import Home from "@/pages/home/index.vue"
const routes = [
  {
    path: "/micro",
    name: "Home",
    component: Home
  },
  {
    path: "/",
    redirect: "/micro"
  }
]

export default routes
