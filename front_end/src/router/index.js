import React, { Suspense } from 'react';
import { Switch, Route, Redirect, BrowserRouter as Router, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Layout, Menu, } from 'antd';

import Home from '../pages/home/Home'
import NotFound from '../pages/notFound/NotFound'
import CreateNewWallet from '../pages/createNewWallet/CreateNewWallet';
import SendCoin from '../pages/transaction/SendCoin'
import TransactionHistory from '../pages/transactionHistory/TransactionHistory';
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";

import HeaderBar from "../components/headerBar/HeaderBar"

const { Header, Content, Footer } = Layout;

const PrivateLayout = ({children}) =>{
  return(
      <Layout className="layout">
      <HeaderBar/>
      <Content style={{ padding: '0 50px', minHeight: 480, padding: 24, backgroundColor: '#fff' }}>
        {children}
      </Content>
      <Footer style={{ textAlign: 'center' }}>My Coin ©2021 Created by Dang Khoa</Footer>
    </Layout>
  )
}

function RouterOutlet(props) {
  const isAuthenticated = !!(localStorage.getItem("publicKey"))
  const { ...rest} = props;
  rest.isAuthenticated = isAuthenticated;

  return (
    <Suspense fallback={null}>
      <Router>
        <Switch>
          <Route exact path={["/", "/create-new-wallet", "/send-coin"]}>
            <PrivateLayout>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route exact path="/send-coin">
              {
                (isAuthenticated)
                  ? 
                  <SendCoin />
                  : <Redirect to="/confirmed-projects"/>
              }
              </Route>
            </PrivateLayout>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/login">
            <Login />
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
