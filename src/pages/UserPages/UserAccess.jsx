import Button from "../../components/Button/Button";
import UserAccessButtons from "../../components/UserAccessButtons/UserAccessButtons";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/Auth/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { editUsername } from "../../services/editUsername";


function UserAccess() {

    const { user, logout, updateUserName } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleEditUsername = () => {
        editUsername(updateUserName);
    };
    const handleLogout = async () => {
        await logout();

        Swal.fire({
            title: "¡Sesión cerrada!",
            text: "Has cerrado sesión correctamente.",
            icon: "success",
            timer: 3500,
            showConfirmButton: true,
        });
    };
    

    if (user) {
        return (
            <main className="flex flex-1 w-full flex-col justify-center items-center gap-14 text-center px-4">
                
                {/* Saludar al usuario si está logeado */}
                { ( user.displayName )
                    ? <p className="text-xl font-bold">Bienvenido. Su nombre de usuario es: {user.displayName}</p>
                    : <p className="text-xl font-bold">Bienvenido. Usted no posee nombre de usuario, su nombre de cuenta es: {user.email}</p>

                }
                
                

                <div className="flex gap-4">
                    <Button color="blue" onClick={() => navigate(-1)}>Volver</Button>
                    <Button onClick={handleEditUsername}>Editar nombre</Button>
                    <Button color="red" onClick={handleLogout}>Cerrar sesión</Button>
                    
                </div>
                
                
            </main>

        )
    } 
    else {
        return ( 
            
            <main className="flex flex-col justify-center items-center gap-14 flex-1 w-full">

                <p className="text-xl font-bold p-4 text-center">Usted no tiene sesión activa</p>

                <UserAccessButtons />
                
                
            </main>

        );
    }
}

export default UserAccess;