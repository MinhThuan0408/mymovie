import loadable from '../../utils/loadable';
import { IRoutes } from '../routes';

const HomePage = loadable(
  async () => await import('../../features/Home/HomePage')
);
const DetailMoviePage = loadable(
  async () => await import('../../features/Detail/DetailMoviePage')
);

export const LIST_ROUTES_HOME: IRoutes[] = [
  {
    path: '/home',
    component: HomePage
  },
  {
    path: '/movie/:id',
    component: DetailMoviePage
  },
];