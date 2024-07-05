import React, {useState} from 'react';
import UserContext from './UserContext';
const UserContextProvider =({children})=>{
    const [user1 , setUser]=useState(null);
    return(

        <UserContext.Provider value={{user1,setUser}}>
            {children}
        </UserContext.Provider>
    )
}


export default UserContextProvider