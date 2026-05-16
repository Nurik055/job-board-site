import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import {user} from 


function Profile() {
    return(
        <div>
            <h1>Profile</h1>
            <h3>Name: {user.name}</h3>
        </div>
    )
}
export default Profile