import React, { Component, lazy, Suspense } from 'react';
import './App.css';

import Page1 from './Components/Page1';

const AsyncPage2 = lazy(() => import('./Components/Page2'));
const AsyncPage3 = lazy(() => import('./Components/Page3'));

class App extends Component {

  constructor() {
    super();
    this.state = {
      route: 'page1',
      component: null
    }
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
  }

  render() {
    if (this.state.route === 'page1') {
      return <Page1 onRouteChange={this.onRouteChange} />
    } else if (this.state.route === 'page2') {
      return (
        <Suspense fallback={<div>Loading</div>}>
          <AsyncPage2 onRouteChange={this.onRouteChange}/>
        </Suspense>
      );
    } else if (this.state.route === 'page3') {
      return (
        <Suspense fallback={<div>Loading</div>}>
          <AsyncPage3 onRouteChange={this.onRouteChange} />
        </Suspense>
      );
    }
  }
}

export default App;
