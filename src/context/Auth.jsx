import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const authContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authStatus, setAuthStatus] = useState(false);
  const [loading, setLoading] = useState(true);
  const backendUrl =
    import.meta.env.MODE === "production"
      ? import.meta.env.VITE_SERVER
      : import.meta.env.VITE_BACKEND_URL;
  console.log("mode", import.meta.env.MODE);
  console.log(backendUrl);

  //this request will redirect to consent screen
  const googleAuth = async () => {
    try {
      window.open(`${backendUrl}/user/google`, "_self");
      //_self allows to open the page in current tab
    } catch (error) {
      console.error(error.message);
    }
  };

  //this req will verified if user is authenticated or not
  const verified = async () => {
    try {
      const response = await axios.get(`${backendUrl}/user/verified`, {
        //axios.req(url,data,config)
        withCredentials: true,
      });
      //console.log(response.data.data);
      if (response.data.success) {
        setUser(response.data.data);
        setAuthStatus(true);
      }
    } catch (error) {
      if (error.response?.status === 401) {
        console.log("refreshing tokens");
        try {
          const response = await axios.post(
            `${backendUrl}/user/refresh-tokens`,
            {},
            {
              withCredentials: true,
            }
          );
          if (response.data.success) {
            setUser(response.data.data);
            setAuthStatus(true);
          } else {
            setUser(null);
            setAuthStatus(false);
          }
        } catch (error) {
          setUser(null);
          setAuthStatus(false);
        }
      } else {
        setUser(null);
        setAuthStatus(false);
      }
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = async () => {
    try {
      await axios.post(
        `${backendUrl}/user/logout`,
        {},
        {
          withCredentials: true,
        }
      );
      setUser(null);
      setAuthStatus(false);
    } catch (error) {
      console.log(error);
    }
  };

  const value = {
    user,
    loading,
    backendUrl,
    googleAuth,
    authStatus,
    logoutUser,
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      verified();
    }, 800); // give cookies time to attach (mobile)

    return () => clearTimeout(timer);
  }, []);
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export function useAuthContext() {
  return useContext(authContext);
}
