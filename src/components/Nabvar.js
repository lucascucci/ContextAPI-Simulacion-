import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Navbar = () => {
console.log ('NavBar');

const { user ,login , logout } = useContext(UserContext);

//const user = null; 

    return (
        <nav className="navbar navbar-dark bg-dark mb-5"> 
            <div className="container">
                    <span className="navbar-brand">
                    <h2>{ user ? `Hola ${user.name}`: 'Bienvenido'}</h2>
                    </span>
                    {user
                        ?<buton className="btn btn-primary" onClick={logout} >Cerrar sesion</buton>
                        :<buton className="btn btn-primary" onClick={login} >Iniciar sesion</buton>
                    }
            </div>
        </nav>
    )
}

export default Navbar;