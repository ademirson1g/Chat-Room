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
                                  <button class="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">Back to Homepage</button>
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
