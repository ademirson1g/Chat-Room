import React, { useEffect } from 'react';
import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import AppRouter from './routes/routes';

function App() {

    useEffect(() => {
      Aos.init({
        once:true,
      })
    })
  

  return (
    
   <div className="App overflow-hidden text-white">
     <div data-aos="fade-down" data-aos-duration="800">
     <AppRouter/>
     </div>
    
   </div>
   
   
  );
}

export default App;
