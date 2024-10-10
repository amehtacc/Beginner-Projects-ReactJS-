import {useState, useEffect} from 'react'

const URL = 'https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=20'

export default function useProductDetails() {
    const [data, setData] = useState([])

    useEffect(() => {
        async function getProductDetail() {
            try {
                const response = await fetch(URL)
                const data = await response.json()
                setData(data.data)
            } catch (error) {
                console.log(error);
            }
        }
        getProductDetail()
    }, [])  

    return data
}