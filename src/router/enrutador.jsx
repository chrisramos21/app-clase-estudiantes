import Acerca from "../pages/acerca";
import Contacto from "../pages/Contacto";
import Home from "../pages/home";
import Login from "../pages/Login";
import Servicios from "../pages/Servicios";
import RutaProtegida from "../components/RutaProtegida";


export let enrutador = [
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/home',
    element: <RutaProtegida componente={<Home />} />
  },
  {
    path: '/servicios',
    element: <RutaProtegida componente={<Servicios />} />
  },
  {
    path: '/contacto',
    element: <RutaProtegida componente={<Contacto />} />
  },
  {
    path: '/acerca de',
    element: <RutaProtegida componente={<Acerca />} />
  },
];