import { useEffect, useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const apiUsuario = "https://back-json-server-martes.onrender.com/usuarios";

const Login = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [getUser, setUser] = useState("");
    const [getPassword, setPassword] = useState("");
    const [getName, setName] = useState("");
    const [getPhone, setPhone] = useState("")
    const [getEmail, setEmail] = useState("");

    const redireccion = useNavigate();

    useEffect(() => {
        obtenerUsuarios();
    }, []);

    const obtenerUsuarios = () => {
        fetch(apiUsuario)
            .then(res => res.json())
            .then(data => setUsuarios(data))
            .catch(err => console.log("Error al obtener usuarios:", err));
    };

    const iniciarSesion = () => {
        if (!getUser || !getPassword) {
            alert("Por favor complete todos los campos");
            return;
        }

        const usuario = usuarios.find(
            u => u.usuario === getUser && u.contrasena === getPassword
        );

        if (usuario) {
            localStorage.setItem("token", "usuario-autenticado");
            localStorage.setItem("usuario", JSON.stringify(usuario));
            redireccion('/home');
        } else {
            alert("Credenciales incorrectas");
        }
    };
    const registrarUsuario = () => {
        if (!getUser || !getPassword || !getName || !getEmail) {
            alert("Todos los campos son obligatorios para el registro");
            return;
        }

        const existe = usuarios.some(
            u => u.usuario === getUser || u.correo === getEmail
        );

        if (existe) {
            alert("Este usuario o correo ya existe");
            return;
        }

        const nuevoUsuario = {
            nombre: getName,
            correo: getEmail,
            usuario: getUser,
            contrasena: getPassword,
        };

        fetch(apiUsuario, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(nuevoUsuario)
        })
            .then(() => {
                obtenerUsuarios(); // Actualizar lista
                alert("Usuario registrado con éxito. Ahora puede iniciar sesión.");
            })
            .catch(err => console.log("Error al registrar:", err));
    };

    return (
        <div className="container">
            <input id="signup_toggle" type="checkbox" />
            <form className="form" onSubmit={e => e.preventDefault()}>
                <div className="form_front">
                    <div className="form_details">Login</div>
                    <input
                        onChange={(e) => setUser(e.target.value)}
                        type="text"
                        className="input"
                        placeholder="Username"
                    />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className="input"
                        placeholder="Password"
                    />
                    <button onClick={iniciarSesion} type="button" className="btn">
                        Login
                    </button>
                    <span className="switch">
                        Don't have an account?
                        <label htmlFor="signup_toggle" className="signup_tog">
                            Sign Up
                        </label>
                    </span>
                </div>
                <div className="form_back">
                    <div className="form_details">SignUp</div>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        className="input"
                        placeholder="Firstname"
                    />
                    <input
                        onChange={(e) => setUser(e.target.value)}
                        type="text"
                        className="input"
                        placeholder="Username"
                    />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className="input"
                        placeholder="Password"
                    />
                    <input
                        onChange={(e) => setPhone(e.target.value)}
                        type="text"
                        className="input"
                        placeholder="Phone number"
                    />
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className="input"
                        placeholder="Email"
                    />
                    <button onClick={registrarUsuario} type="button" className="btn">
                        Signup
                    </button>
                    <span className="switch">
                        Already have an account?
                        <label htmlFor="signup_toggle" className="signup_tog">
                            Sign In
                        </label>
                    </span>
                </div>
            </form>
        </div>
    );
};

export default Login;