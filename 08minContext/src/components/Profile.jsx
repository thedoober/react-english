import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user1}=useContext(UserContext)

    if(!user1) return <h1>Not Logged in</h1>
  return (
    <div>
       
        
        <h1> Profile : {user1.username}</h1>
         </div>
  )
}

export default Profile