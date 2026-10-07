import Button from "../../components/Button/Button";
import { AuthContext } from "../../Context/Auth/AuthContext";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { editUsername } from "../../services/editUsername";


function UserAccess() {

    const { user, logout, updateUserName } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleEditUsername = () => {
        editUsername(updateUserName);
    };
    

    if (user) {
        return (
            <main className="flex flex-col justify-center items-center gap-14">
                
                {/* Saludar al usuario si está logeado */}
                { ( user.displayName )
                    ? <p className="text-xl font-bold">Bienvenido. Su nombre de usuario es: {user.displayName}</p>
                    : <p className="text-xl font-bold">Bienvenido. Usted no posee nombre de usuario, su nombre de cuenta es: {user.email}</p>

                }
                
                

                <div className="flex gap-4">
                    <Button color="blue" onClick={() => navigate(-1)}>Volver</Button>
                    <Button onClick={handleEditUsername}>Editar nombre</Button>
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