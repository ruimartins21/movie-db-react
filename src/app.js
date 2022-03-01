import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './css/app.scss';

import { ErrorBoundary } from './components/errorboundary';
import { ContentWrapper, Loading, PageContainer } from './styles';

const Discover = lazy(() => import('./pages/discover'));
const SideNavBar = lazy(() => import('./components/sidenavbar'));

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <ErrorBoundary>
          <Suspense fallback={<Loading className='loading' />}>
            <PageContainer>
              <SideNavBar {...this.props} />
              <ContentWrapper>
                <Switch>
                  <Route path='/' component={Discover} {...this.props} />
                  <Route
                    path='/discover'
                    component={Discover}
                    {...this.props}
                  />
                </Switch>
              </ContentWrapper>
            </PageContainer>
          </Suspense>
        </ErrorBoundary>
      </Router>
    );
  }
}
