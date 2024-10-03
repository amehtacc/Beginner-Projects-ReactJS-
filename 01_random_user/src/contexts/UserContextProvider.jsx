import React from 'react'
import useUserData from '../hooks/useUserData'
import UserContext from './UserContext'

export function UserContextProvider({children}) {
    const {data} = useUserData()

    return (
        <UserContext.Provider value={{data}}>
            {children}
        </UserContext.Provider>

    )
}

export default UserContextProvider