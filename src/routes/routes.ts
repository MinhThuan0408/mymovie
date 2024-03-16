
import {
  LIST_ROUTES_HOME,
} from '@/routes';

export interface IRoutes {
  path: string;
  component: any;
  exact?: boolean;
}

const routes: IRoutes[] = [
  ...LIST_ROUTES_HOME,
];

export default routes;
