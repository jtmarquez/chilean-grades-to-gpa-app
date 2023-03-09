import Layout from 'components/generalUI/layout';
import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { routesDefinition } from './routes';

const RoutesProviderWrapper: FC = () => {
  return (
    <Router>
      <Routes>
        {routesDefinition.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={<Layout>{route.element}</Layout>}
            />
          );
        })}
      </Routes>
    </Router>
  );
};

export default RoutesProviderWrapper;
