import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { saveUser } from '../services/UserService'


const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { getAccessTokenSilently } = useAuth0();

  
  
  useEffect(() => {
    
    const saveUserExtended = async (newUser) => {
  
      const accessToken = await getAccessTokenSilently();
      const data = await saveUser(accessToken, newUser)
  
      console.log(data)
    }
    
    if (user) {
      console.log("User is not null!")
      saveUserExtended(user)
    }

    
  }, [user, getAccessTokenSilently])



  if (isLoading) {
    return <div>Loading ...</div>;
  }


  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
}


export default Profile;