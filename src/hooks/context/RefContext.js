import React, { createContext, useRef } from 'react'

export const RefContext = createContext()

export const RefContextProvider = ({ children }) => {

    const landingPage = useRef(null)
    const aboutPage = useRef(null)
    const serverListPage = useRef(null)
  
    return <RefContext.Provider value={{ landingPage, aboutPage, serverListPage }}>{ children }</RefContext.Provider>
}
