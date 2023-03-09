import React from 'react';
import { RoutesDefinitionType } from './types';
import GeneralError from 'components/generalUI/GeneralError';
import Home from 'src/views/Home';
import About from 'src/views/About';

const defaultErrorPath = {
  path: '*',
  element: <GeneralError />,
};

export const routesDefinition: RoutesDefinitionType = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  defaultErrorPath,
];
