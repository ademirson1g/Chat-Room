import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/Home'
import Login from '../components/LoginRegistration/Login'
import Registration from '../components/LoginRegistration/Registration';
import Header from '../components/Header'
import About from '../components/About'
import Services from '../components/Services'
import Support from '../components/Support'
import SupportBot  from '../components/SupportBot/SupportBot';
import { Fragment } from 'react';
import Welcome from '../components/WelcomingPage/Welcome';
import Chatting from '../components/Chatting/Chatting';


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={
            <Fragment>
                <Header />
                <Home />
                <About/>
                <Services/>
                <Support/>
                <SupportBot/>
                
            </Fragment>
            } />
                <Route path="/services" element={<Services />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration/>} />
                <Route path="/welcome" element={<Welcome/>} />
                <Route path="/supportbot" element={<SupportBot/>} />
                <Route path="/chatting" element={<Chatting/>} />
                <Route
                    path="*"
                        element={
                            <div class="h-screen w-screen bg-gray-100 flex items-center">
                            <div class="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
                                   <div class="max-w-md">
                                      <div class="text-5xl font-dark font-bold">404</div>
                                    <p
                                      class="text-2xl md:text-3xl font-light leading-normal"
                                    >Sorry we couldn't find this page. </p>
                                  <p class="mb-8">But dont worry, you can find plenty of other things on our homepage.</p>
                                  <a href='/'>
                                  <button className="border-[2px] rounded-[10px] text-white bg-[#2E97A9] px-[25px] py-[7px] hover:cursor-pointer font-bold focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">Back to Homepage</button>
                                  </a>
                            </div>
                            
                          </div>
                        </div>
                }
            />
      </Routes>
      </BrowserRouter>
    )
}

export default AppRouter;
