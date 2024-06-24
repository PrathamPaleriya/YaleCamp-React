import React, { useState } from 'react';
import Logo from '../../assets/Logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import authServices from '../../appwrite/authServices';
import { ClipLoader } from 'react-spinners'; // Import the spinner component

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState('');
  const [loading, setLoading] = useState(false); // Default to false
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    switch (e.target.type) {
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when submission starts

    const userName = email.split('@')[0];

    try {
      await authServices.createAccount({ email, password, name: userName });
      navigate('/home');
    } catch (error) {
      setAlert(error);
      console.log(error);
      setLoading(false); // Stop loading if there's an error
    }
  };

  return (
    <div className="lg:flex lg:min-h-screen">
      <div className="min-w-[60%] h-screen flex flex-col justify-center items-center px-28 py-10 relative">
        <div className="flex justify-between w-full absolute top-8 left-0 px-28">
          <img src={Logo} alt="Logo" />
          <Link to="/home" className="text-cream-dark hover:text-rose-600">
            &#8592; &nbsp; Back to campgrounds
          </Link>
        </div>
        <div className="h-full flex flex-col w-full justify-center">
          <h1 className="font-bold text-4xl my-6">
            Start Exploring camps from all <br className="hidden lg:block" />
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
            <button type="submit" className={`text-white py-4 px-4 w-full my-3 ${loading ? 'bg-blue-400' : 'bg-black'}`} disabled={loading}>
              {loading ? 'Creating account...' : 'Create an account'}
            </button>
          </form>
          {loading && (
            <div className="flex justify-center items-center">
              <ClipLoader color={'#000'} loading={loading} size={50} />
            </div>
          )}
          <p className="text-lg">
            Already a user? <Link to="/login" className="underline text-blue-600 hover:text-blue-400">Login</Link>
          </p>
        </div>
      </div>

      <div className="bg-cream w-full h-screen"></div>
    </div>
  );
}

export default Signin;