import { Suspense } from "react";
import { BrowserRouter, Navigate, Routes, Route, NavLink } from "react-router-dom";
import styles from './Navigations.module.scss';
import { IRoute } from "../../routes/interfaces/IRoute";

interface NavigationProps {
    routes: Array<IRoute>;
    logoElement?: () => JSX.Element;
}

export const Navigations = ({ routes, logoElement}: NavigationProps) => {

    const isActiveLink =
        (isActive: boolean) => isActive ? 'nav-active' : '';

    return (
        <>
            <div className="main-layout">
                <nav>
                    {/* <img className="logo" src={Logo} alt="React logo" /> */}
                    {logoElement && logoElement()}
                    <div className={styles.routeContainer}>
                        {
                            routes.map(({ name, to }) =>
                                <div className={styles.routeItem} key={to}>
                                    <NavLink to={to} className={({ isActive }) => isActiveLink(isActive)}>{name}</NavLink>
                                </div>
                            )
                        }
                    </div>
                </nav>
                <Routes>
                    {
                        routes.map(({ path, Component, to }) =>
                            <Route path={path} element={<Component />} key={to} />
                        )
                    }
                    <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
                </Routes>
            </div>
        </>
    )
}
