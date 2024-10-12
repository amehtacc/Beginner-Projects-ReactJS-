import React from 'react'
import UserContext from './UserContext'
import useUserData from '../hooks/useUserData'

function UserContextProvider({children}) {
    const { data } = useUserData()

  return (
    <UserContext.Provider value={{data}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider