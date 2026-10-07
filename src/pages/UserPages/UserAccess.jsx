import Button from "../../components/Button/Button";
import { AuthContext } from "../../Context/Auth/AuthContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function UserAccess() {

    const {user} = useContext(AuthContext)
    console.log("UserAccess se renderizó");

    if (user) {
        return (
            <main className="flex flex-col justify-center items-center gap-14">

                <p className="text-xl font-bold">Hola, {user.displayName}</p>

                <div className="flex ">
                    <Button color="red">Cerrar sesión</Button>
                    
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
                        <Button color="blue">Acceder</Button>
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