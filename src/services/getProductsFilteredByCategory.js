import { db } from "../config/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

export async function getProductsFilteredByCategory(category = "all") {
    const refProductos = collection(db, "productos")
    
    
    const q =
        category === "all"
            ? refProductos
            : query(refProductos, where("category", "==", category));

    const snapshot = await getDocs(q)

    const productos = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    if (productos.length === 0) {
        return null;
    }

    return productos;

}











