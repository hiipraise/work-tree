import { Link } from "react-router-dom";
import Spinner from "../components/spinner/spinner";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const payload = {
    email: email,
    password: password,
  };
  const { handleSubmit, isLoading } = useContext(AuthContext);
  return (
    <div className="w-[100%]  bg-itemgreen mx-auto py-10 relative top-20 flex flex-col items-center">
      <h1 className="text-white text-2xl font-extrabold text-center">Login</h1>
      <div className="w-[70%] justify-center items-center flex flex-col">
        <input
          type="email"
          className="w-[50%] p-6 rounded-md bg-white text-itemgreen outline-none mt-6"
          placeholder="example@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="w-[50%] p-6 rounded-md bg-white text-itemgreen outline-none mt-6"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {isLoading ? (
          <Spinner />
        ) : (
          <button
            onClick={(e) => {
              handleSubmit(e, payload);
            }}
            type="submit"
            className="w-[50%] bg-orange mt-6 p-2 text-white font-bold rounded-md"
          >
            Login
          </button>
        )}
        <p className="mt=4 text-white">
          Dont have an account?
          <Link to="/register">
            <span className="text-orange font-semibold text-xl">Register</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
