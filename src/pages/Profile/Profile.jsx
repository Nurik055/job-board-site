import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";


function Profile({jobs}) {
    const {user} = useContext(AuthContext);
    return(
        <div>
           <h1>Profile</h1>
           <p>Hello, {user.name}</p>
           <p>Email: {user.email}</p>
           <p>You have applied for {user.appliedJobs.length} jobs</p>
           <p>You have saved {user.savedJobs.length} jobs</p>
           <p>You can see jobs that you have saved and applied for in home page</p>
        </div>
    )
}
export default Profile