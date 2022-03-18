import { lazy } from 'react';
import { NoLazyPage } from '../01-lazyload/pages/NoLazyPage';
import { IRoute } from './interfaces/IRoute';

export const customRoutes: Array<IRoute> = [
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazyPage,
        name: 'No lazy'
    },
    {
        to: '/lazy-layout/',
        path: '/lazy-layout/*',
        Component: lazy(() =>
            import(/*webpackChunkName:"NoLazyPage" */ '../01-lazyload/layout/LazyLayout')),
        name: 'Lazy layout'
    },
    {
        to: '/other-data/',
        path: '/other-data/*',
        Component: lazy(() =>
            import(/*webpackChunkName:"OtherDataPage" */ '../02-otherData/layout/OtherDataLayout')),
        name: 'Other Data'
    },
]