import { useEffect, useState } from 'react'

function useCurrency(currency) {  
  const [data, setData] = useState('')
  
    useEffect(() => {
        async function getCurrency() {
          try {
            const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            const data = await response.json()
            console.log(data);                   
            setData(data[currency])

          } catch (error) {
            console.log(error);                
          }
        }
        getCurrency()
    }, [currency])
  return data
}

export default useCurrency