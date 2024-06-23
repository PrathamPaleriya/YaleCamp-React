import React, { useState } from 'react'
import Logo from '../../assets/Logo.svg'
import { Link } from 'react-router-dom'

function Signin() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [alert, setAlert] = useState('');

    const handleOnChange = (e) =>{
      switch(e.target.type){
        case "email": 
          setEmail(e.target.value);
          break;
        case "password":
          setPassword(e.target.value)
          break;
      }
    }

    const handleSubmit = (e)  => {
      
    }



  return (
    <>
      <div className='lg:flex lg:h-screen'>

        <div className='min-w-[60%] h-full flex flex-col justify-center items-center px-28 py-10 relative'>
            <div className='flex justify-between w-full absolute top-8 left-0 px-28'>
                <img src={Logo} alt="" />
                <Link to="/home" className='text-cream-dark hover:text-rose-600'>&#8592; &nbsp; Back to campgrounds</Link>
            </div>
            <div className='h-full flex flex-col w-full justify-center'>
              <h1 className='font-bold text-4xl my-6'>Start Exploring camps from all <br className='hidden lg:block'/>around the world.</h1>

              <form onSubmit={handleSubmit}>
                <div>
                  <h3 className='text-cream-dark my-2'>Email</h3>
                  <label htmlFor="email"></label>
                  <input 
                    className='bg-cream-box w-full py-4 px-5 mb-3'
                    name='email'
                    type="email"
                    placeholder='Enter you email'
                    value={email}
                    onChange={handleOnChange}
                    required
                  />
                </div>
                <div>
                  <h3 className='text-cream-dark my-2'>Password</h3>
                  <label htmlFor="email"></label>
                  <input 
                    name='email'
                    className='bg-cream-box w-full py-4 px-5 mb-3'
                    type="password"
                    placeholder='Choose Password'
                    value={password}
                    onChange={handleOnChange}
                    required
                  />
                </div>
                <button type='submit' className='bg-black text-white py-4 px-4 w-full my-3'>Create an account</button>
              </form>
              <p className='text-lg'>Already a user? <Link to='/login' className='underline text-blue-600 hover:text-blue-400'>Login</Link></p>
            </div>
        </div>

        <div className='bg-cream w-full h-full'>

        </div>

      </div>
    </>
  )
}

export default Signin
