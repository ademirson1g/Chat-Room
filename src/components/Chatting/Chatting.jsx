import React from 'react';
import {useAuthState} from '../Hooks/hooks';
import Channel from './Channel';
import Loader from '../Chatting/Loader';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import OCR from '../../images/OCR2.png'
import SupportBot from '../SupportBot/SupportBot'


firebase.initializeApp({
  apiKey: "AIzaSyCUx7Sa6Mri5G9-Ax9sgLKSDpMBcvujnHk",
  authDomain: "chatroom-342cb.firebaseapp.com",
  projectId: "chatroom-342cb",
  storageBucket: "chatroom-342cb.appspot.com",
  messagingSenderId: "1006114834535",
  appId: "1:1006114834535:web:1cf64814e8c229734d6cc2",
});


function Chatting() {
  const { user, initializing } = useAuthState(firebase.auth());

  const signInWithGoogle = async () => {
    // Retrieve Google provider object
    const provider = new firebase.auth.GoogleAuthProvider();
    // Set language to the default browser preference
    firebase.auth().useDeviceLanguage();
    // Start sign in process
    try {
      await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      console.log(error.message);
    }
  };

  const signOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.log(error.message);
    }
  };

  const renderContent = () => {
    if (initializing) {
      return (
        <div className="flex items-center justify-center h-full bg-[#2e97a9]">
          <Loader size="lg" />
        </div>
      );
    }

    if (user) return <Channel user={user} />;

    return (
     
      <div className="flex items-center justify-center shadow-md h-full ">
        <div className="flex flex-col items-center justify-center max-w-xl w-full mx-4 p-8 rounded-md shadow-card text-black dark:bg-coolDark-600 transition-all">
          <h2 className="mb-2 text-3xl flex items-center text-black">
            Online Chat Room
          </h2>
          <p className="mb-8 text-lg text-center">
            The best and safest way of communication
          </p>
          <p className="mb-8 text-lg text-center">
            Please Continue By Clicking the Sign in with Google Button
          </p>
          <button
            onClick={signInWithGoogle}
            className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700"> 
            Sign in with Google 
            </button>
          
          <a href='/'>
          <button class="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">Back to Homepage</button>
          </a>
        </div>
      </div>
    );
  };

  // After Login Screen //
  return (
    <div className="flex flex-col h-full bg-white dark:bg-coolDark-500 dark:text-black transition-colors ">
      <header
        className="flex-shrink-0 flex items-center justify-between px-4 sm:px-8 shadow-md"
        style={{ height: 'var(--topbar-height)' }}
      >
        <a href="/chatting">
          <img src={OCR} width={65} />
        </a>
        <div className="flex items-center">
        <a href='/'>
          {user ? (
            <button
              onClick={signOut}
              className="uppercase text-sm font-medium text-black text-primary-500 hover:text-white tracking-wide hover:bg-primary-500 bg-transparent rounded py-2 px-4 mr-4 focus:outline-none focus:ring focus:ring-primary-500 focus:ring-opacity-75 transition-all"
            >
              Sign out
            </button>
          ) : null}
          </a>
        </div>
      </header>
      
      <main
        className="flex-1"
        style={{ maxHeight: 'calc(100% - var(--topbar-height))' }}
      >
        {renderContent()}
      </main>
    </div>
    
  );
}

export default Chatting;
