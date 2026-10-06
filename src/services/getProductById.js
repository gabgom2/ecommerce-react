import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export async function getProductById(productId) {

    console.log("productId:", productId);
    console.log("tipo:", typeof productId);
    const productRef = doc(db, "productos", productId);

    const snapshot = await getDoc(productRef);

    if (!snapshot.exists()) {
        throw new Error("Producto no encontrado");
    }

    return {
        id: snapshot.id,
        ...snapshot.data(),
    };
}

