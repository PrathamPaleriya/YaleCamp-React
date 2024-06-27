import React, { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import authServices from "../../appwrite/authServices";
import { BarLoader } from "react-spinners"; // Import the spinner component

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");
  const [loading, setLoading] = useState(false); // Default to false
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    switch (e.target.type) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await authServices.login({ email, password });
      navigate("/home");
    } catch (error) {
      setAlert(error.message);
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="lg:flex lg:min-h-screen h-screen">
      <div className="min-w-[60%] lg:h-screen h-[70%] flex flex-col justify-center items-center px-8 py-10 lg:px-28 lg:py-10 relative">
        <div className="flex justify-between w-full absolute top-8 left-0 px-8 lg:px-28">
          <img src={Logo} alt="Logo" />
          <Link to="/home" className="text-cream-dark hover:text-rose-600">
            &#8592; &nbsp; Back to campgrounds
          </Link>
        </div>
        <div className="h-full flex my-10 lg:my-0 flex-col w-full md:w-[70%] lg:w-full justify-center">
          <h1 className="font-bold text-3xl md:text-4xl my-6 w-64 md:w-full">
            Start Exploring camps from all <br className="hidden md:block" />
            around the world.
          </h1>

          <form onSubmit={handleSubmit}>
            <div>
              <h3 className="text-cream-dark my-2">Email</h3>
              <label htmlFor="email"></label>
              <input
                className="bg-cream-box w-full py-4 px-5 mb-3"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleOnChange}
                required
              />
            </div>
            <div>
              <h3 className="text-cream-dark my-2">Password</h3>
              <label htmlFor="password"></label>
              <input
                name="password"
                className="bg-cream-box w-full py-4 px-5 mb-3"
                type="password"
                placeholder="Choose Password"
                value={password}
                onChange={handleOnChange}
                required
              />
            </div>
            <button
              type="submit"
              className={`text-white py-4 px-4 w-full my-3 ${
                alert ? "bg-red-400" : "bg-black"
              }`}
              disabled={loading}
            >
              {loading ? (<div className="flex justify-center items-center h-full py-2">
              <BarLoader color={"#fff"} loading={loading} width={100} speedMultiplier={3} />
            </div>) : (alert ? ("Try again") : ("login"))}
            </button>
          </form>
          {/* {loading && (
            <div className="flex justify-center items-center">
              <BarLoader color={"#000"} loading={loading} width={100} speedMultiplier={3} />
            </div>
          )} */}
          {alert && (
            <div className="text-red-500 my-3">
              <p>{alert}</p>
            </div>
          )}
          <p className="text-lg">
            Not a user yet?{" "}
            <Link
              to="/create-account"
              className="underline text-blue-600 hover:text-blue-400"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>

      <div className="bg-cream w-full flex justify-center items-center p-8 lg:h-screen h-[30%]">
        <div className="lg:w-[80%]">
          <p className="text-xl lg:text-3xl font-bold">
            “ There is a kind of magicness about going far away and then coming
            back all changed.”
          </p>
          <p className="text-sm lg:text-lg my-2 font-semibold text-cream-dark">
            {" "}
            - &nbsp; Kate Douglas Wiggin
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
