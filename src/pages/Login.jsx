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

    const cargarUsuarios = () => {
        fetch(apiUsuario)
            .then(res => res.json())
            .then(data => setUsuarios(data))
            .catch(err => console.error("Error cargando usuarios:", err));
    };

    useEffect(() => {
        cargarUsuarios();
    }, []);

    const iniciarSesion = () => {
        fetch(apiUsuario)
            .then(res => res.json())
            .then(data => {
                const usuario = data.find(
                    item => item.email === loginEmail.trim() && item.password === loginPassword.trim()
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
            .catch(err => {
                console.error("Error al intentar iniciar sesión:", err);
                alertaGeneral("Error", "No se pudo conectar al servidor", "error");
            });
    };

    const registrarUsuario = () => {
        if (!regName.trim() || !regEmail.trim() || !regPassword.trim() || !regPhone.trim() || !regUserType.trim()) {
            alertaGeneral("Error", "Todos los campos son obligatorios", "error");
            return;
        }

        const yaExiste = usuarios.some(user => user.email === regEmail.trim());
        if (yaExiste) {
            alertaGeneral("Error", "Usuario ya existe en la base de datos", "error");
            return;
        }

        const nuevoUsuario = {
            name: regName.trim(),
            email: regEmail.trim(),
            password: regPassword.trim(),
            phoneNumber: regPhone.trim(),
            userType: regUserType
        };

        fetch(apiUsuario, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(nuevoUsuario)
        })
            .then(res => {
                if (!res.ok) {
                    return res.text().then(text => { throw new Error(text); });
                }
                return res.json();
            })
            .then(() => {
                alertaGeneral("Registro exitoso", "Ya puede ir a Login e ingresar sus credenciales", "info");
                cargarUsuarios();
            })
            .catch(error => {
                console.error("Error en el registro:", error);
                alertaGeneral("Error", `No se pudo registrar el usuario. Detalles: ${error.message}`, "error");
            });
    };

    return (
        <div className="container">
            <input id="signup_toggle" type="checkbox" />
            <form className="form" onSubmit={e => e.preventDefault()}>

                {/* LOGIN */}
                <div className="form_front">
                    <div className="form_details">Login</div>
                    <input
                        onChange={e => setLoginEmail(e.target.value)}
                        type="email"
                        className="input"
                        placeholder="Email"
                    />
                    <input
                        onChange={e => setLoginPassword(e.target.value)}
                        type="password"
                        className="input"
                        placeholder="Password"
                    />
                    <button onClick={iniciarSesion} type="button" className="btn">Login</button>
                    <span className="switch">
                        Don't have an account?
                        <label htmlFor="signup_toggle" className="signup_tog">Sign Up</label>
                    </span>
                </div>

                {/* SIGN UP */}
                <div className="form_back">
                    <div className="form_details">SignUp</div>
                    <input
                        onChange={e => setRegName(e.target.value)}
                        type="text"
                        className="input"
                        placeholder="Name"
                    />
                    <input
                        onChange={e => setRegPassword(e.target.value)}
                        type="password"
                        className="input"
                        placeholder="Password"
                    />
                    <input
                        onChange={e => setRegPhone(e.target.value)}
                        type="text"
                        className="input"
                        placeholder="Phone number"
                    />
                    <input
                        onChange={e => setRegEmail(e.target.value)}
                        type="email"
                        className="input"
                        placeholder="Email"
                    />
                    <select
                        className="input"
                        value={regUserType}
                        onChange={e => setRegUserType(e.target.value)}
                    >
                        <option value="">Select user type</option>
                        <option value="Estudiante">Estudiante</option>
                        <option value="Docente">Docente</option>
                        <option value="Administrador">Administrador</option>
                    </select>
                    <button onClick={registrarUsuario} type="button" className="btn">Signup</button>
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




