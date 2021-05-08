import React, { Suspense } from 'react';
import { Switch, Route, BrowserRouter as Router, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Home from '../pages/home/Home'
import NotFound from '../pages/notFound/NotFound'

function RouterOutlet(props) {
  const isAuthenticated = localStorage.getItem("isAuthenticated")
  const { ...rest} = props;
  rest.isAuthenticated = isAuthenticated;

  return (
    <Suspense fallback={null}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
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
