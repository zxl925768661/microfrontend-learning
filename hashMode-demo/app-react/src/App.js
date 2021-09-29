import React, { Suspense, useState, useEffect } from "react";
import { Menu } from "antd";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
const BASE_NAME = window.__POWERED_BY_QIANKUN__ ? "/microApp" : "";

const menus = [
  {
    key: "home",
    route: BASE_NAME ? "/react": "/",
    title: "主页",
  },
  {
    key: "about",
    route: BASE_NAME ? "/react/about": "/about",
    title: "关于",
  },
];

const App = () => {
  const [refresh, setRefresh] = useState(0);
  const [selectedKeys, setSelectKeys] = useState(["home"]);
  useEffect(() => {
    const { hash } = window.location;
    const menu = menus.find((item) => `#${BASE_NAME}${item.route}` === hash);
    setSelectKeys(() => [menu ? menu.key : "home"]);
  }, [refresh]);

  // 设置路由命名空间
  return (
    <Router basename={BASE_NAME}>
      <section>
        <Menu
          onClick={() => setRefresh((refresh) => ++refresh)}
          selectedKeys={selectedKeys}
          mode="horizontal"
        >
          {menus.map((item) => (
            <Menu.Item key={item.key}>
              <Link to={item.route}>{item.title}</Link>
            </Menu.Item>
          ))}
        </Menu>
        <Suspense fallback={null}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </Suspense>
      </section>
    </Router>
  );
};

export default App;

