import React, { Component } from 'react';
import styles from './views/sharedCss/app.css';
import { withRouter } from 'react-router-dom';
import routes from './routes';
import MappedRoutes from './views/genComps/MappedRoutes';
import Template from './views/template/Template';

class App extends Component {
  render() {
    const { location } = this.props;
    return (
      <Template>
        <MappedRoutes 
          routes = { routes.routes } 
          location = { location }
          />
      </Template>
    )
  }
}



export default withRouter(App);
