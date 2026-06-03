import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import "../Profile/Profile.css"

function Profile({jobs}) {
    const {user} = useContext(AuthContext);
    return(
        <div className="profileContainer">
           <h1 className="profileh1" >Profile</h1>
           <p className="profileName">Hello, {user.name}</p>
           <p className="profileEmail">Email: {user.email}</p>
           <p className="profileApplied">You have applied for {user.appliedJobs.length} jobs</p>
           <p className="profileSaved">You have saved {user.savedJobs.length} jobs</p>
           <p className="profileTextNote">You can see jobs that you have saved and applied for in home page</p>
        </div>
    )
}
export default Profile