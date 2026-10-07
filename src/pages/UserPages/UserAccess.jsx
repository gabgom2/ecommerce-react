import Button from "../../components/Button/Button";
import { AuthContext } from "../../Context/Auth/AuthContext";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

function UserAccess() {

    const {user, logout} = useContext(AuthContext)
    const navigate = useNavigate()
    

    if (user) {
        return (
            <main className="flex flex-col justify-center items-center gap-14">
                
                {/* Saludar al usuario si está logeado */}
                { ( user.displayName )
                    ? <p className="text-xl font-bold">Hola, {user.displayName}</p>
                    : <p className="text-xl font-bold">Hola, {user.email}</p>

                }
                
                

                <div className="flex gap-4">
                    <Button color="blue" onClick={() => navigate(-1)}>Volver</Button>
                    <Button color="red" onClick={logout}>Cerrar sesión</Button>
                    
                </div>
                
                
            </main>

        )
    } 
    else {
        return ( 
            
            <main className="flex flex-col justify-center items-center gap-14">

                <p className="text-xl font-bold">Usted no se encuentra registrado en la base de usuarios</p>

                <div className="flex gap-6">
                    <Link to="/user-access/login">
                        <Button color="blue">Iniciar Sesión</Button>
                    </Link>
                    <Link to="/user-access/register">
                        <Button color="blue">Registrarse</Button>
                    </Link>
                </div>
                
                
            </main>

        );
    }
}

export default UserAccess;