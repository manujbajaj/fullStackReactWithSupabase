import { useUser } from '@clerk/clerk-react'
import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const {isLoaded,isSignedIn,user}=useUser()
    const {pathname}=useLocation()

    if(!isSignedIn && isLoaded && isSignedIn!==undefined){
        return <Navigate to="/?sign-in=true"/>
    }
    else{
        return children;
    }

  
}

export default ProtectedRoute