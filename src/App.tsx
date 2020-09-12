import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Tags from './views/Tags';
import Money from './views/Money';
import Bookkeeping from './views/Bookkeeping';
import NoMatch from './views/NoMatch';
import styled from 'styled-components';
import {Tag} from './views/Tag';

const AppWrapper = styled.div`
  color:#333;
`;

function App() {
  // @ts-ignore
  return (
    <AppWrapper>
      <Router>
        <Switch>
          <Route path="/tags/:id" exact={true}>
            <Tag/>
          </Route>
          <Route path="/tags" exact={true}>
            <Tags/>
          </Route>
          <Route path="/money" exact={true}>
            <Money/>
          </Route>
          <Route path="/bookkeeping" exact={true}>
            <Bookkeeping/>
          </Route>
          <Redirect exact from="/" to="/money"/>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
    </AppWrapper>
  );
}


export default App;
