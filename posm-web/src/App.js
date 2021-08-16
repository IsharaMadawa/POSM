import React from "react";
import { HashRouter, Route } from "react-router-dom";
import {
  BrowserView,
  TabletView,
  MobileOnlyView,
  SmartTVView,
  WearableView,
} from "react-device-detect";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Resources from "./Constants/Resources";

import Routes from "./Constants/Routes";
import LayoutWeb from "./Layouts/Web/LayoutWeb";
import LayoutTablet from "./Layouts/Tablet/LayoutTablet";
import LayoutMobile from "./Layouts/Mobile/LayoutMobile";
import LayoutSmartTV from "./Layouts/SmartTV/LayoutSmartTV";
import LayoutWearable from "./Layouts/Wearable/LayoutWearable";

import AuthorizedRoute from "./Components/Navigations/Route/AuthorizedRoute";

import Home from "./Components/AppLogic/Home/Home";
import Billing from "./Components/AppLogic/Billing/Billing";
import NotFound from "./Components/Errors/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserView>
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
      </BrowserView>

      <TabletView>
        <HashRouter>
          <LayoutTablet>
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
          </LayoutTablet>
        </HashRouter>
      </TabletView>

      <MobileOnlyView>
        <HashRouter>
          <LayoutMobile>
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
          </LayoutMobile>
        </HashRouter>
      </MobileOnlyView>

      <SmartTVView>
          <LayoutSmartTV></LayoutSmartTV>
      </SmartTVView>

      <WearableView>
          <LayoutWearable></LayoutWearable>
      </WearableView>
    </div>
  );
}

export default App;
