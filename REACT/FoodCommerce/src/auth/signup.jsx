import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { notify } from "../hooks/toastconfig";
import Spinner from "../components/spinner/spinner";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const payload = {
    name: name,
    email: email,
    password: password,
  };
  // const BASE_URL = "https://60d5-197-210-8-200.ngrok-free.app";
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/v1/auth/signup`,
        payload
      );
      console.log(response.data);
      notify("registration successful, proceed to login");
      navigate("/login");
    } catch (err) {
      console.log(err.message);
      notify("registration failed");
      alert("Registration failed. Please try again");
    }
    setIsLoading(false);
  };
  return (
    <div className="w-[100%] bg-itemgreen mx-auto py-10 relative top-20 flex flex-col items-center">
      <h1 className="text-white text-2xl font-extrabold text-center">
        Register
      </h1>
      <div className="w-[100%] justify-center items-center flex flex-col">
        <input
          type="text"
          className="w-[50%] p-6 rounded-md bg-white text-itemgreen outline-none mt-6"
          placeholder="John Haltman"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          className="w-[50%] p-6 rounded-md bg-white text-itemgreen outline-none mt-6"
          placeholder="example@gmail.com"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="w-[50%] p-6 rounded-md bg-white text-itemgreen outline-none mt-6"
          required
          placeholder="password"
          onChange={(e) => setPassowrd(e.target.value)}
        />
        {isLoading ? (
          <Spinner />
        ) : (
          <button
            onClick={(e) => {
              handleSubmit(e);
            }}
            type="submit"
            className="w-[50%] bg-orange mt-6 p-2 text-white font-bold rounded-md"
          >
            Register
          </button>
        )}
        <br />
        <p className="mt=4 text-white">
          Already have an account? &nbsp;
          <Link to="/login">
            {" "}
            <span className="text-orange font-semibold text-xl">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
