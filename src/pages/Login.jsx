import { useEffect, useState } from 'react';
import './Login.css';
import { generarToken, alertaGeneral, alertaRedireccion } from '../helpers/funciones';
import { useNavigate } from 'react-router-dom';

const apiUsuario = "http://localhost:8080/users";

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
                item.email === loginEmail.trim() &&
                item.password === loginPassword.trim()
        );
    }

    function iniciarSesion() {
        fetch(apiUsuario)
            .then((res) => res.json())
            .then((data) => {
                const usuario = data.find(
                    (item) =>
                        item.email === loginEmail.trim() &&
                        item.password === loginPassword.trim()
                );
                if (usuario) {
                    const token = generarToken();
                    localStorage.setItem("token", token);
                    localStorage.setItem("usuario", JSON.stringify(usuario));
                    alertaRedireccion(redireccion, "Bienvenido al sistema", "/home");
                } else {
                    alertaGeneral("Error", "Correo o contraseña incorrectos", "error");
                }
            })
            .catch((err) => {
                console.error("Error al intentar iniciar sesión:", err);
                alertaGeneral("Error", "No se pudo conectar al servidor", "error");
            });
    }

    function registrarUsuario() {
        let auth = usuarios.some(
            (item) => item.email === regEmail
        );

        if (auth) {
            alertaGeneral("Error", "Usuario ya existe en la base de datos", "error");
        } else {
            const nuevoUsuario = {
                name: regName,
                email: regEmail,
                password: regPassword,
                phoneNumber: regPhone,
                userType: regUserType
            };

            console.log("Enviando usuario:", nuevoUsuario);

            fetch(apiUsuario, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(nuevoUsuario)
            })
                .then((res) => {
                    if (!res.ok) {
                        throw new Error("Registro fallido");
                    }
                    return res.json();
                })
                .then(() => {
                    alertaGeneral("Registro exitoso", "Ya puede ir a Login e ingresar sus credenciales", "info");
                })
                .catch((error) => {
                    console.error("Error en el registro:", error);
                    alertaGeneral("Error", "No se pudo registrar el usuario", "error");
                });
        }
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
                        <option value="Docente">Docente</option>
                        <option value="Estudiante">Estudiante</option>
                        <option value="Administrador">Administrador</option>
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




