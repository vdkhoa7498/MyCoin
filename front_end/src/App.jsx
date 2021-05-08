import React from 'react';
import RouterOutlet from './router';
import './App.scss';
import { withRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import 'antd/dist/antd.css'

const App = () => {
  return (
    <div>
      <ConfigProvider>
        <RouterOutlet/>
      </ConfigProvider>
    </div>
  );
}

const mapState = (state) => ({
});
const mapDispatch = dispatch => bindActionCreators({
 
}, dispatch)
export default withRouter(connect(mapState, mapDispatch)(App));
