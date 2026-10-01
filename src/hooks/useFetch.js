import { useState, useEffect } from "react";



export function useFetch(fetchFunction) {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    
    useEffect(() => {
        async function loadData() {
            try {
                setLoading(true)
                const response = await fetchFunction()
                setData(response)


                
            } catch (err) {
                console.log(err, "/ Error obteniendo datos")
                setError(err)
                
                
            } finally {
                setLoading(false)
            }
            
        }
        
        loadData()

    }, [fetchFunction]);




    return { loading, error, data }
    
}