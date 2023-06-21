import React, { createContext, useState } from 'react'

export const GeneralContext = createContext();

export const GeneralContextProvider = ({children}) => {

    const [isCreatPostOpen, setIsCreatePostOpen] = useState(false);
    const [isNotificationsOpen, setNotificationsOpen] = useState(false);

  return (
    <GeneralContext.Provider value={{isCreatPostOpen, setIsCreatePostOpen, isNotificationsOpen, setNotificationsOpen}}>{children}</GeneralContext.Provider>
  )
}
