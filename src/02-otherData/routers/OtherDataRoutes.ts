import { IRoute } from "../../routes/interfaces/IRoute";
import { MathOperation } from "../pages/MathOperation/MathOperation";
import { OtherData } from "../pages/OtherData/OtherData";

export const OtherDataRoutes: Array<IRoute> = [
    {
        to: 'OtherData',
        path: 'OtherData',
        Component: OtherData,
        name: 'OtherData'
    },
    {
        to: 'MathOperation',
        path: 'MathOperation',
        Component: MathOperation,
        name: 'MathOperation'
    }
]