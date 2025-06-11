import Acerca from "../pages/Acerca";
import Contacto from "../pages/Contacto";
import Home from "../pages/Home";
import Login from "../pages/Login";
import RutaProtegida from "../components/RutaProtegida";
import Acerca from "../pages/Acerca";
import AgregarEstudiantes from "../pages/AgregarEstudiantes";
import Contacto from "../pages/Contacto";
import EditarEstudiantes from "../pages/EditarEstudiantes";
import GestionEstudiantes from "../pages/GestionEstudiantes";
import Home from "../pages/Home";
import Login from "../pages/Login";

export let enrutador = [
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/home',
    element: <RutaProtegida componente = {<Home/>}/>,
    children: [
    
          { 
            path: 'estudiante', 
            element: <GestionEstudiantes/> 
          },
          { 
            path: 'editar/:id', 
            element: <EditarEstudiantes/> 
          },
          { 
            path: 'agregar', 
            element: <AgregarEstudiantes/>
          },
          { 
            path: 'contacto', 
            element: <Contacto /> 
          },
          { 
            path: 'acerca', 
            element: <Acerca/>
          }
        ]
    
    
  }
];