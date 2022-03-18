import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { Navigations } from "../../Customs-components/Navigation/Navigations";
import { layoutRoutes } from "../routers/layout-routes";

const isActiveLink =
    (isActive: boolean) => isActive ? 'nav-active' : '';

export const LazyLayout = () => {
    return (
        <>
            <h1>Lay Layaout</h1>
            <Navigations routes={layoutRoutes}  />
            <ul>
                {
                    layoutRoutes.map(({ name, to }) =>
                        <li key={to}>
                            <NavLink to={to} className={({ isActive }) => isActiveLink(isActive)}>{name}</NavLink>
                        </li>
                    )
                }
                <NavLink to="algo" className={({ isActive }) => isActiveLink(isActive)}>Algo</NavLink>
            </ul>
            <Routes>
                {
                    layoutRoutes.map(({ path, Component, to }) =>
                        <Route path={path} element={<Component />} key={to} />
                    )
                }
                <Route path="*" element={<Navigate to={layoutRoutes[0].to} replace />} />
            </Routes>
        </>
    )
}


export default LazyLayout;