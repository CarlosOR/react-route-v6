import { Suspense } from "react";
import { BrowserRouter, Navigate, Routes, Route, NavLink } from "react-router-dom";
import Logo from './../logo.svg'
import { customRoutes } from "./routes";
export const Navigations = () => {

    const isActiveLink =
        (isActive: boolean) => isActive ? 'nav-active' : '';
    return (
        <>
            <Suspense fallback={<span>Loading</span>}>
                <BrowserRouter>
                    <div className="main-layout">
                        <nav>
                            <img src={Logo} alt="React logo" />
                            <ul>
                                {
                                    customRoutes.map(({ name, to }) =>
                                        <li key={to}>
                                            <NavLink to={to} className={({ isActive }) => isActiveLink(isActive)}>{name}</NavLink>
                                        </li>
                                    )
                                }
                            </ul>
                        </nav>
                        <Routes>
                            {
                                customRoutes.map(({ path, Component, to }) =>
                                    <Route path={path} element={<Component />} key={to} />
                                )
                            }
                            <Route path="/*" element={<Navigate to={customRoutes[0].to} replace />} />
                        </Routes>
                    </div>
                </BrowserRouter>
            </Suspense>
        </>
    )
}
