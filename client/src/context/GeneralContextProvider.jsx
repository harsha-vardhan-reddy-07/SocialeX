import React, { createContext, useState } from 'react'
import socketIoClient from 'socket.io-client';

export const GeneralContext = createContext();


const WS = 'http://localhost:6001';

const socket = socketIoClient(WS);

export const GeneralContextProvider = ({children}) => {

    const [isCreatPostOpen, setIsCreatePostOpen] = useState(false);
    const [isNotificationsOpen, setNotificationsOpen] = useState(false);

    const [notifications, setNotifications] = useState([]);

  return (
    <GeneralContext.Provider value={{socket, isCreatPostOpen, setIsCreatePostOpen, isNotificationsOpen, setNotificationsOpen, notifications, setNotifications}}>{children}</GeneralContext.Provider>
  )
}
