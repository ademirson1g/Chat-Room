import React, { useState , useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import OCR_white from '../../images/OCR_white.png';

const Registration = () => {
  let history = useNavigate();
  const [data,setData] = useState({
    first_name:"",
    last_name:"",
    email:"",
    password:""
  })

  const initialValues = {first_name : "", last_name : "",email : "", password: ""};
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

    if(!values.first_name) {
      errors.first_name = "First name is required!";
    }

    if(!values.last_name) {
      errors.last_name = "Last name is required!";
    }
    if(!values.email) {
      errors.email ="Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email="This is not a Valid E mail Format!";
    }
    if(!values.password) {
      errors.password ="Password is required!";
    } else if (values.password < 4) {
      errors.password="Password needs to have more then 6 characters";
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
    <div class="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">Sign In</div>
    <a href='/chatting' class="relative mt-6 border rounded-md py-2 text-sm text-black text-center">
    <button >
    <span>Sign In With Gmail</span>
    </button>
    </a>
    <div class="relative mt-10 h-px bg-gray-300">
      <div class="absolute left-0 top-0 flex justify-center w-full -mt-2">
        <span class="bg-white px-4 text-xs text-gray-500 uppercase">Or Register</span>
      </div>
    </div>
    <div class="mt-10">
      <form action="#" onSubmit={handleSubmit}>
        <div class="flex flex-col mb-6">
          <label for="email" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">First Name:</label>
          <div class="relative">
            <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
              <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>              </svg>
            </div>

            <input 
            autoComplete='off'
            id="email" 
            type="email" 
            name="email" 
            class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 text-black" 
            placeholder="First Name"
            onChange={handleChange}
            value={formValues.first_name}
            />
          </div>
          <p className='text-black'>{formErrors.first_name}</p>
          </div>

          <div class="flex flex-col mb-6">
          <label for="email" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Last Name:</label>
          <div class="relative">
            <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
              <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>              </svg>
            </div>

            <input 
            autoComplete='off'
            id="email" 
            type="email" 
            name="email" 
            class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 text-black" 
            placeholder="Last Name"
            onChange={handleChange}
            value={formValues.last_name}
            />
          </div>
          <p className='text-black'>{formErrors.last_name}</p>
        </div>

        <div class="flex flex-col mb-6">
          <label for="email" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Email:</label>
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
            placeholder="Email"
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
          <p className='text-black'>{formErrors.password}</p>

        </div>

        

        <div class="flex w-full">
          <button type="submit" class="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in">
            <span class="mr-2 uppercase">Register</span>
          </button>   
        </div>

      </form>
    </div>
    <div class="flex justify-center items-center mt-6">
      <a href="#" target="_blank" class="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center">
        <a href='/login'>
        <span class="ml-2">Already have an account?? <br/> Login</span>
        </a>
      </a>
    </div>
  </div>
</div>
  
  )
}

export default Registration