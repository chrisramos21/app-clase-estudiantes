import Acerca from "../pages/acerca";
import Contacto from "../pages/Contacto";
import Home from "../pages/home";
import Login from "../pages/login";
import Servicios from "../pages/servicios";


export let enrutador = [
    {
        path: '/',
        element: <Login/>
    },
    {
        path: '/home',
        element: <Home/>
    },
    {
        path: '/servicios',
        element: <Servicios/>
    },
    {
        path: '/contacto',
        element: <Contacto/>
    },
    {
        path: '/acerca de',
        element: <Acerca/>
    }
    
]