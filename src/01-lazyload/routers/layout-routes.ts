import { IRoute } from '../../routes/interfaces/IRoute';
import LazyPage from '../pages/LazyPage';
import LazyPage1 from '../pages/LazyPage1';
import LazyPage2 from '../pages/LazyPage2';
import { BasicData } from '../pages/BasicData';

export const layoutRoutes: Array<IRoute> = [
    {
        to: 'BasicForm',
        path: 'BasicForm',
        Component: BasicData,
        name: 'Basic Form'
    },
    {
        to: 'lazy1',
        path: 'lazy1',
        Component: LazyPage,
        name: 'Lazy-1'
    },
    {
        to: 'lazy2',
        path: 'lazy2',
        Component: LazyPage1,
        name: 'Lazy-2'
    },
    {
        to: 'lazy3',
        path: 'lazy3',
        Component: LazyPage2,
        name: 'Lazy-3'
    },
]