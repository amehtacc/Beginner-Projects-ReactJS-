import { useState, useEffect } from "react"

const URL = "https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=5"

export default function useUserData() {
    const [data, setData] = useState({})    

    useEffect(() => {
        async function getData() {
            try {
                const response = await fetch(URL)
                const data = await response.json()
                setData(data.data.data)
                
            } catch (error) {
                console.log(error);
            }
        }
        getData()
        
    }, [])
    
    return {data}
}