import { RouteProps } from 'react-router-dom';

type RouteDefinitionObject = RouteProps;
type RoutesDefinitionType = RouteDefinitionObject[];

interface RouteWrapperInput {
  routeDef: RoutesDefinitionType;
}

export { RoutesDefinitionType, RouteDefinitionObject, RouteWrapperInput };
