import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function MappedRoutes({ routes, location }) {
  return (
    <TransitionGroup>
      <CSSTransition
        key = { location.pathname }
        classNames = 'fade'
        timeout = { {enter: 300, exit: 0 } }
        appear >
          <Switch location = { location }>
            { routes.map(e => 
            <Route 
                exact = { e.exact } 
                path = { `${e.prefix}${e.path}` } 
                component = { e.component } key = { e.path} /> ) }
            <Route component = { ErrorPage } /> 
          </Switch>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default MappedRoutes;
