import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Loader from 'react-loaders';

const ScreenRouters = lazy(() => import('~/routes/screens/index'));

const AppMain = () => {
  return (
    <>
      {/* Dashboards */}
      <Suspense
        fallback={
          <div className="loader-container">
            <div className="loader-container-inner">
              <div className="text-center">
                <Loader type="ball-grid-beat" />
              </div>
              <h6 className="mt-3">Estamos buscando tudo que precisa!</h6>
            </div>
          </div>
        }
      >
        <Route path="/portal" component={ScreenRouters} />
      </Suspense>
    </>
  );
};

export default AppMain;
