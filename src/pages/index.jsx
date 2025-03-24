import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

//import { Home } from "./Home";
import Catalogo from "./Catalogo";
import Produto from "./Produto";
//import GuiaMedidas from "./GuiaMedidas";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Catalogo />,
    },

    {
        path: "/produto/:id",
        element: <Produto />,
    },


    /*{
        path: "/catalogo",
        element: <Catalogo />,
    },

    {
        path: "/produto/:id",
        element: <Produto />,
    },

    {
        path: "/guia-de-medidas",
        element: <GuiaMedidas />,
    },*/
]);

export const Router = () => (
    <RouterProvider router={router} />
)