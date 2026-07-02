import React from 'react'
import { useReducer } from 'react'
import { useContext,createContext } from 'react'
export const Cartcontext=createContext()
// const useMyContext=useContext(Cartcontext)

export function ContextProvider({children,reducer,initialState}) {
  return (
    <div>
        
<Cartcontext.Provider value={useReducer(reducer,initialState)}>
    {children}
</Cartcontext.Provider>

    </div>
  )
}

export default ContextProvider
