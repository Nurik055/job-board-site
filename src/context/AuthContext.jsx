import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  function login(userData) {
    setUser({
      name: userData.name,
      email: userData.email,
      savedJobs: [],
      appliedJobs: [],
    });
  }

  function logout() {
    setUser(null);
  }

  function saveJob(jobId) {
    {
      /* use the jobid from jobcard, the flow, in jobcards i passed job.id as parameter to savedJobs, so automatically (thing inisde here is job.id) and we just automatically created jobId whitch is === job.id*/
    }
    if (!user) return;

    setUser((prevUser) => {
      const isSaved = prevUser.savedJobs.includes(jobId);

      if (isSaved) {
        toast.error("Already saved!");
        return prevUser;
      }

      return {
        ...prevUser,
        savedJobs: [...prevUser.savedJobs, jobId],
      };
    });
  }

  function applyToJob(jobId) {
    if (!user) return;

    setUser((prevUser) => {
      const isApplied = prevUser.appliedJobs.includes(jobId);

      if (isApplied) {
        toast.error("Already applied!");
        return prevUser;
      }

      return {
        ...prevUser,
        appliedJobs: [...prevUser.appliedJobs, jobId],
      };
    });
  }

  function removeSavedJob(jobId) {
    setUser((prevUser) => {
      const savedJobs = [...prevUser.savedJobs];
      const result = savedJobs.filter((savedJob) => savedJob !== jobId);
      return {
        ...prevUser,
        savedJobs: result,
      };
    });
  }

  function removeAppliedJob(jobId) {
    setUser((prevUser) => {
      const appliedJobs = [...prevUser.appliedJobs];
      const result = appliedJobs.filter((appliedJob) => appliedJob !== jobId);
      return {
        ...prevUser,
        appliedJobs: result,
      };
    });
  }

  {
    /* i could also do the remove function as one, but with types, and then call like removeJob(job.id, "applied")  */
  }

  {
    /* STORAGE  */
  }

  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);
  {
    /* this [user] means run useEffect whenever something about user changes or updates*/
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        saveJob,
        applyToJob,
        removeSavedJob,
        removeAppliedJob,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
