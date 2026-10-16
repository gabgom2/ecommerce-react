import { Link } from "react-router-dom";
import Button from "../Button/Button";

function UserAccessButtons() {
    return (                 
                <div className="flex gap-6">
                    <Link to="/user-access/login">
                        <Button color="blue">Iniciar Sesión</Button>
                    </Link>
                    <Link to="/user-access/register">
                        <Button color="blue">Registrarse</Button>
                    </Link>
                </div> 
            );
}

export default UserAccessButtons;