import Swal from "sweetalert2";

export async function editUsername(updateUserName) {
    const { value: newUserName } = await Swal.fire({
        title: "Ingrese su nuevo nombre de usuario",
        input: "text",
        inputLabel: "Nombre de usuario",
        inputPlaceholder: "Ingrese su nuevo nombre",
        inputAttributes: {
            maxlength: "30",
            autocapitalize: "off",
            autocorrect: "off"
        },
        showCancelButton: true,
        confirmButtonText: "Guardar",
        cancelButtonText: "Cancelar"
    });

    if (!newUserName?.trim()) {
        return;
    }

    try {
        await updateUserName(newUserName.trim());

        await Swal.fire({
            title: "¡Nombre actualizado!",
            text: `Tu nuevo nombre es ${newUserName.trim()}`,
            icon: "success"
        });

    } catch (error) {
        console.error("Error actualizando nombre:", error);

        await Swal.fire({
            title: "Error",
            text: "No se pudo actualizar el nombre de usuario.",
            icon: "error"
        });
    }
}
