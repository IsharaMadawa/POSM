import React from "react";
import { HashRouter, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Resources from "./Constants/Resources";

import Routes from "./Constants/Routes";
import LayoutWeb from "./Layouts/Web/LayoutWeb";
import AuthorizedRoute from "./Components/Navigations/Route/AuthorizedRoute";

import Home from "./Components/AppLogic/Home/Home";
import Billing from "./Components/AppLogic/Billing/Billing";
import NotFound from "./Components/Errors/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <LayoutWeb>
          <AuthorizedRoute
            path={Routes.Root}
            component={Home}
            className="content"
            authorized={{ resource: Resources.Home }}
          />
          <AuthorizedRoute
            path={Routes.Index}
            component={Home}
            className="content"
            authorized={{ resource: Resources.Home }}
          />
          <AuthorizedRoute
            path={Routes.Billing}
            component={Billing}
            className="content"
            authorized={{ resource: Resources.Billing }}
          />

          {/* Not found */}
          <Route component={NotFound} className="content" />
        </LayoutWeb>
      </HashRouter>
    </div>
  );
}

export default App;
