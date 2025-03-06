import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { notify } from "../hooks/toastconfig";
import { useNavigate } from "react-router-dom";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Initialize the context
const AuthContext = createContext();

// create a Provider component
const AuthProvider = ({ children }) => {
  const monthlyAllowance = 50000;
  const navigate = useNavigate();
  const [token, setToken] = useState(() => {
    const savedToken = localStorage.getItem("token");
    return savedToken ? JSON.parse(savedToken) : "";
  });

  useEffect(() => {
    // save to local storage
    localStorage.setItem("token", JSON.stringify(token));
  }, [token]);
  const [isLoading, setIsLoading] = useState(false); //setting your loading state to be boolean (false)

  // const BASE_URL = 'https://e7fd-102-216-183-116.ngrok-free.app'
  //the handle submit makes use of axios
  const handleSubmit = async (e, payload) => {
    e.preventDefault(); //it helps not to reuse the input you you've used
    console.log(payload);
    setIsLoading(true); //show the spinner
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/v1/auth/signin`,
        payload
      );
      console.log(response.data);
      if (response.data.message === "success") {
        setToken(response.data.token); //set the token
        notify("Login Successful");
        navigate("/");
      }
    } catch (err) {
      console.error(err);
      notify(`Login failed: ${err.message}`);
    }
    setIsLoading(false);
  };
  return (
    <AuthContext.Provider
      value={{ monthlyAllowance, handleSubmit, isLoading, token }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContext, AuthProvider };
