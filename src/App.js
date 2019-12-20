import React from 'react';
//引入路由组件
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable'
import Main from './pages/main/Main';
import './store/index'
//懒加载
const Loading = () => <div>加载中...</div>
const Login = Loadable({
  loader: () => import('./pages/Login'),
  loading: Loading
})
const Register = Loadable({
  loader: () => import('./pages/Register'),
  loading: Loading
})
const Forget = Loadable({
  loader: () => import('./pages/Forget'),
  loading: Loading
})
//首页的组件路由
const CityList = Loadable({
  loader: () => import('./pages/Citylist'),
  loading: Loading
})
const MapList = Loadable({
  loader: () => import('./pages/MapList'),
  loading: Loading
})
const Search = Loadable({
  loader: () => import('./pages/Search'),
  loading: Loading
})

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forget" component={Forget} />
        <Route path="/cityList" component={CityList} />
        <Route path="/mapList" component={MapList} />
        <Route path="/search" component={Search} />
        <Redirect to="/" />
      </Switch>
    </HashRouter>
  );
}
export default App;
