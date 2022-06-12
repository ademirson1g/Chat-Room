import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaBeer } from 'react-icons/fa';


const Login = () => {
  let history = useNavigate();
  const [data,setData] = useState({
    first_name:"",
    last_name:"",
    email:"",
    password:""
  })

  const initialValues = {email : "", password: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange=(e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    const {name, value} = e.target;
    setFormValues({...formValues , [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors])

  // Validation of Login
  const validate = (values) => {
    const errors = {}
    const regex= /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!values.email) {
      errors.email ="Email is required!";
    } 
    if(!values.password) {
      errors.password ="Password is required!";
    } else if (values.password < 4) {
      errors.email="Password needs to have more then 6 characters";
    }
    return errors;

  };


//   const submitForm=(e) => {
//     e.preventDefault();
//     const sendData = {
//       first_name:data.first_name,
//       last_name:data.last_name,
//       email:data.email,
//       password:data.password
//     }

//     axios.post('http://localhost/chatroom/registration.php',sendData)
//     .then((result) => {
//       if (result.data.Status == 'Invalid')
//       alert('Invalid User');
//       else {

//         history(`/welcome`);
//       }
//     })
// }


  return (
   
<div class="min-h-screen flex flex-col items-center justify-center bg-[#2e97a9]">
  <div class="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
    <div class="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">Login To Your Account</div>
    <button class="relative mt-6 border rounded-md py-2 text-sm text-black">
      <span class="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-blue-500"><i class="fab fa-facebook-f"></i></span>
      <a href='/chatting'>
      <span>Login with Gmail</span>
      </a>
    </button>
    <div class="relative mt-10 h-px bg-gray-300">
      <div class="absolute left-0 top-0 flex justify-center w-full -mt-2">
        <span class="bg-white px-4 text-xs text-gray-500 uppercase">Or Login With Email</span>
      </div>
    </div>
    <div class="mt-10">
      <form action="#" onSubmit={handleSubmit}>
        <div class="flex flex-col mb-6">
          <label for="email" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">E-Mail Address:</label>
          <div class="relative">
            <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
              <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
            </div>

            <input 
            autoComplete='off'
            id="email" 
            type="email" 
            name="email" 
            class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 text-black" 
            placeholder="E-Mail Address"
            onChange={handleChange}
            value={formValues.email}
            />
          </div>
          <p className='text-black'>{formErrors.email}</p>

        </div>
        <div class="flex flex-col mb-6">
          <label for="password" class="mb-1 text-xs sm:text-sm tracking-wide text-black">Password:</label>
          <div class="relative">
            <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
              <span>
                <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
            </div>

            <input 
            id="password" 
            type="password" 
            name="password" 
            class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 text-black" 
            placeholder="Password"
            onChange={handleChange}
            value={formValues.password} />
          </div>
        </div>
        <p className='text-black'>{formErrors.password}</p>

        <div class="flex items-center mb-6 -mt-4">
          <div class="flex ml-auto">
            <a href="#" class="inline-flex text-xs font-bold sm:text-sm text-[#2E97A9] hover:text-blue-700">Forgot Your Password?</a>
          </div>
        </div>
        

        <div class="flex w-full justify-center">
          <button type="submit" 
          class="border-[2px] rounded-[10px] bg-[#2E97A9] px-[25px] py-[7px] hover:cursor-pointer font-bold focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            <span class="mr-2 uppercase">Login</span>
          </button>   

        </div>
        

      </form>
    </div>
    <div class="flex justify-center items-center mt-6">
      <a href="#" target="_blank" class="inline-flex items-center font-bold text-[#2E97A9] hover:text-blue-700 text-xs text-center">
        <a href='/registration'>
        <span class="ml-2">You don't have an account? <br/> Register</span>
        </a>
      </a>
    </div>
  </div>
</div>

  )
}

export default Login