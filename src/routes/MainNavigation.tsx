import Logo from './../logo.svg'
import { customRoutes } from "./routes";
import { Navigations } from "../Customs-components/Navigation/Navigations";
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';


export const MainNavigation = () => {

    const logoSide = (): JSX.Element => {
        return <img className="logo" src={Logo} alt="React logo" />;
    }

    return (
        <>
            <Suspense fallback={<span>Loading</span>}>
                <BrowserRouter>
                    <Navigations routes={customRoutes} logoElement={logoSide} />
                </BrowserRouter>
            </Suspense>
        </>
    )
}
