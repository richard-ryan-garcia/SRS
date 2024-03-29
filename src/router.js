import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';
import App from './containers/app';
import StoreWalk from './containers/storeWalk';
import MainMenu from './containers/mainMenu';
import ActionScreen from './containers/actionScreen';
import TraditionalWalk from './containers/traditionalWalk';

const routes = [
  {
    path: '/menu',
    component: MainMenu,
    exact: true
  },
  {
    path: '/store-walk',
    component: StoreWalk,
    exact: true
  },
  {
    path: '/action-screen/:actionType',
    component: ActionScreen,
    exact: true
  },
  {
    path: '/traditional-walk',
    component: TraditionalWalk,
    exact: true
  },
];

class Router extends React.Component {
  render(){
    const {history} = this.props;
    return (
      <ConnectedRouter history={history}>
        <App>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/menu" />}/>
            {
              routes.map(route => (
                <Route
                  path={route.path}
                  component={route.component}
                  key={route.path}
                  exact={route.exact}
                />
              ))
            }
          </Switch>
        </App>
      </ConnectedRouter>
    );
  }
}

export default Router;