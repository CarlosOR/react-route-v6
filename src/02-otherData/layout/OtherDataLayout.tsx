import { Navigate, Route, Routes } from "react-router-dom";
import { OtherDataRoutes as layoutRoutes } from "../routers/OtherDataRoutes";
export const OtherDataLayout = () => {
       
    return (
        <>
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


export default OtherDataLayout;