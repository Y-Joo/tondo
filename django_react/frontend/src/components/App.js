import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";

import LandingPage from "./views/LandingPage/LandingPage";
import SearchPage from "./views/SearchPage/SearchPage";
function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/search" component={SearchPage} />
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
