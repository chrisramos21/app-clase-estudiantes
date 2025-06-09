import { useEffect, useState } from 'react';
import './Login.css';
import { generarToken, alertaGeneral, alertaRedireccion } from '../helpers/funciones';
import { useNavigate } from 'react-router-dom';

const apiUsuario = "https://back-json-server-martes.onrender.com/usuarios";

const Login = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [regName, setRegName] = useState("");
    const [regPassword, setRegPassword] = useState("");
    const [regPhone, setRegPhone] = useState("");
    const [regEmail, setRegEmail] = useState("");
    const [regUserType, setRegUserType] = useState("");
    const redireccion = useNavigate();

    useEffect(() => {
        fetch(apiUsuario)
            .then((res) => res.json())
            .then((data) => setUsuarios(data))
            .catch((err) => console.error("Error cargando usuarios:", err));
    }, []);

    function buscarUsuario() {
        return usuarios.find(
            (item) =>
                item.correo === loginEmail.trim() &&
                item.contraseña === loginPassword.trim()
        );
    }

    function iniciarSesion() {
        const usuario = buscarUsuario();
        if (usuario) {
            const token = generarToken();
            localStorage.setItem("token", token);
            localStorage.setItem("usuario", JSON.stringify(usuario));
            alertaRedireccion(redireccion, "Bienvenido al sistema", "/home");
        } else {
            alertaGeneral("Error", "Correo o contraseña incorrectos", "error");
        }
    }

    function registrarUsuario() {
        const yaExiste = usuarios.some((u) => u.correo === regEmail.trim());

        if (yaExiste) {
            alertaGeneral("Error", "El correo ya está registrado", "error");
            return;
        }

        const nuevoId = usuarios.length > 0
            ? Math.max(...usuarios.map((u) => parseInt(u.id))) + 1
            : 1;

        const nuevoUsuario = {
            id: nuevoId,
            nombre: regName.trim(),
            correo: regEmail.trim(),
            contraseña: regPassword.trim(),
            teléfono: regPhone.trim(),
            user_type: regUserType
        };

        fetch(apiUsuario, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(nuevoUsuario),
        })
        .then(() => {
            alertaGeneral("Registro exitoso", "Ya puede iniciar sesión", "info");
            setUsuarios([...usuarios, nuevoUsuario]); // actualizar la lista local
        })
        .catch(() => {
            alertaGeneral("Error", "No se pudo registrar", "error");
        });
    }

    return (
        <div className="container">
            <input id="signup_toggle" type="checkbox" />
            <form className="form" onSubmit={e => e.preventDefault()}>
                {/* LOGIN */}
                <div className="form_front">
                    <div className="form_details">Login</div>
                    <input
                        onChange={(e) => setLoginEmail(e.target.value)}
                        type="email"
                        className="input"
                        placeholder="Email"
                    />
                    <input
                        onChange={(e) => setLoginPassword(e.target.value)}
                        type="password"
                        className="input"
                        placeholder="Password"
                    />
                    <button onClick={iniciarSesion} type="button" className="btn">
                        Login
                    </button>
                    <span className="switch">
                        Don't have an account?
                        <label htmlFor="signup_toggle" className="signup_tog">Sign Up</label>
                    </span>
                </div>

                {/* SIGN UP */}
                <div className="form_back">
                    <div className="form_details">SignUp</div>
                    <input
                        onChange={(e) => setRegName(e.target.value)}
                        type="text"
                        className="input"
                        placeholder="Name"
                    />
                    <input
                        onChange={(e) => setRegPassword(e.target.value)}
                        type="password"
                        className="input"
                        placeholder="Password"
                    />
                    <input
                        onChange={(e) => setRegPhone(e.target.value)}
                        type="text"
                        className="input"
                        placeholder="Phone number"
                    />
                    <input
                        onChange={(e) => setRegEmail(e.target.value)}
                        type="email"
                        className="input"
                        placeholder="Email"
                    />
                    <select
                        className="input"
                        value={regUserType}
                        onChange={(e) => setRegUserType(e.target.value)}
                    >
                        <option value="">Select user type</option>
                        <option value="docente">Docente</option>
                        <option value="estudiante">Estudiante</option>
                        <option value="administrador">Administrador</option>
                    </select>
                    <button onClick={registrarUsuario} type="button" className="btn">
                        Signup
                    </button>
                    <span className="switch">
                        Already have an account?
                        <label htmlFor="signup_toggle" className="signup_tog">Sign In</label>
                    </span>
                </div>
            </form>
        </div>
    );
};

export default Login;




