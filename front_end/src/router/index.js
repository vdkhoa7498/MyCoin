import React, { Suspense } from 'react';
import { Switch, Route, BrowserRouter as Router, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Layout, Menu, } from 'antd';

import Home from '../pages/home/Home'
import NotFound from '../pages/notFound/NotFound'
import CreateNewWallet from '../pages/createNewWallet/CreateNewWallet';
import AccessWallet from '../pages/accessWallet/AccessWallet'

const { Header, Content, Footer } = Layout;

const PrivateLayout = ({children}) =>{
  return(
      <Layout className="layout">
      <Header>
        <a href="./" style={{ fontSize: 20, fontWeight: 'bold', color: '#b0d4d7' }} >My Coin</a>
        {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu> */}
      </Header>
      <Content style={{ padding: '0 50px', minHeight: 480, padding: 24, backgroundColor: '#fff' }}>
        {children}
      </Content>
      <Footer style={{ textAlign: 'center' }}>My Coin ©2021 Created by Dang Khoa</Footer>
    </Layout>
  )
}

function RouterOutlet(props) {
  const isAuthenticated = localStorage.getItem("isAuthenticated")
  const { ...rest} = props;
  rest.isAuthenticated = isAuthenticated;

  return (
    <Suspense fallback={null}>
      <Router>
        <Switch>
          <Route exact path={["/", "/create-new-wallet", "/access-my-wallet"]}>
            <PrivateLayout>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route exact path="/create-new-wallet">
                <CreateNewWallet/>
              </Route>
              <Route exact path="/access-my-wallet">
                <AccessWallet/>
              </Route>
            </PrivateLayout>
          </Route>
          
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </Suspense>
  )
}

const mapState = (state) => ({
});
const mapDispatch = dispatch => bindActionCreators({
  //
}, dispatch)

export default withRouter(connect(mapState, mapDispatch)(RouterOutlet));
