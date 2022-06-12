// import React from "react";
// import Ademir from "../../images/ademir.jpeg";
// import User from "../../images/user.png"

// const Welcome = () => {

//     return (

//       <div className="flex">
//         {/* Section - 1 TODO */}
//         <div className="w-4/12 h-screen bg-gray-100">
//           {/* TODO: Top Panel */}
//           <div className="flex">
//             <div className="flex-grow">
//                 <img src={Ademir} alt="" className="rounded-full w-16 h-16 ml-5 mt-7 border-2 border-pink-400" />
//             </div>
//             <div className="flex-grow mt-8">
//               <div className="text-2xl text-blue-500 font-semibold">
//                 <h1>Ademir Ahmetovic</h1>
//               </div>
//               <div className="text-sm text-gray-400 font-thin">Student</div>
//             </div>
            
//           </div>
//           {/* TODO: Search Panel */}
//           <div className="flex px-4 mx-5 mt-4 mb-1 items-center rounded-full bg-white">
//             <div className="w-12 p-2">
//               <img src="./assets/img/search_black_24dp.svg" alt="" />
//             </div>
//             <input className="flex-grow py-2 outline-none placeholder-gray-300 placeholder-font-thin text-blue-500" type="text" placeholder="Search Friends" />
//           </div>
//           {/* TODO: Listing of members */}
//           <div className="overflow-y-scroll h-3/4">
//             {/* TODO List-1 */}
//             <div className="flex mt-6 mx-5">
//               <div className="flex-grow">
//                 <img src="./assets/avatars/cute_woman.jpg" alt="" className="rounded-full w-14 h-12 mt-1" />
//               </div>
//               <div className="flex-grow">
//                 <div className="ml-4">
//                   <div className="text-blue-500 text-lg font-semibold">
//                     Merima Muhovic
//                   </div>
//                   <div className="text-xs text-gray-500">
//                     Then ok. Let's meeting with client Tommorow.
//                   </div>
//                 </div>
//               </div>
//               <div className="flex-grow text-gray-400">
//                 <span className="text-xs">10:34&nbsp;AM</span>
//                 <span className="text-xs bg-blue-500 text-white rounded-full h-4 w-4 flex items-center justify-center float-right mt-3">1</span>
//               </div>
//             </div>
//             {/* TODO List-2 */}
//             <div className="flex mt-6 mx-5">
//               <div className="flex-grow">
//                 <img src="./assets/avatars/america.png" alt="" className="rounded-full w-14 h-12 mt-1" />
//               </div>
//               <div className="flex-grow">
//                 <div className="ml-4">
//                   <div className="text-blue-500 text-lg font-semibold">
//                     Amar Mujagic
//                   </div>
//                   <div className="text-xs text-gray-500">
//                     Then ok. Let's meeting with Tommorow again..
//                   </div>
//                 </div>
//               </div>
//               <div className="flex-grow text-gray-400">
//                 <span className="text-xs">10:34&nbsp;AM</span>
//                 <span className="text-xs bg-blue-500 text-white rounded-full h-4 w-4 flex items-center justify-center float-right mt-3">1</span>
//               </div>
//             </div>
//             {/* TODO List 3 */}
//             <div className="flex mt-6 mx-5">
//               <div className="flex-grow">
//                 <img src="./assets/avatars/cute_girl.jpg" alt="" className="rounded-full w-14 h-12 mt-1" />
//               </div>
//               <div className="flex-grow">
//                 <div className="ml-4">
//                   <div className="text-blue-500 text-lg font-semibold">
//                     Muhamed Begic
//                   </div>
//                   <div className="text-xs text-gray-500">
//                     Then ok. Let's meeting with client Tommorow.
//                   </div>
//                 </div>
//               </div>
//               <div className="flex-grow text-gray-400">
//                 <span className="text-xs">10:34&nbsp;AM</span>
//                 <span className="text-xs float-right mt-3">
//                   <img src="./assets/img/check_black_24dp.svg" alt="" />
//                 </span>
//               </div>
//             </div>
//             {/* TODO List 4 */}
//             <div className="flex mt-6 mx-5">
//               <div className="flex-grow">
//                 <img src="./assets/avatars/red_cute_girl.jpg" alt="" className="rounded-full w-14 h-12 mt-1" />
//               </div>
//               <div className="flex-grow">
//                 <div className="ml-4">
//                   <div className="text-blue-500 text-lg font-semibold">
//                     Haris Hukara
//                   </div>
//                   <div className="text-xs text-gray-500">
//                     Then ok. Let's meeting with client Tommorow.
//                   </div>
//                 </div>
//               </div>
//               <div className="flex-grow text-gray-400">
//                 <span className="text-xs">10:34&nbsp;AM</span>
//                 <span className="text-xs float-right mt-3">
//                   <img src="./assets/img/check_black_24dp.svg" alt="" />
//                 </span>
//               </div>
//             </div>
//             {/* TODO List 5 */}
//             <div className="flex mt-6 mx-5">
//               <div className="flex-grow">
//                 <img src="./assets/avatars/india.png" alt="" className="rounded-full w-14 h-12 mt-1" />
//               </div>
//               <div className="flex-grow">
//                 <div className="ml-4">
//                   <div className="text-blue-500 text-lg font-semibold">
//                     Haris Ahmetovic
//                   </div>
//                   <div className="text-xs text-gray-500">
//                     Then ok. Let's meeting with client Tommorow.
//                   </div>
//                 </div>
//               </div>
//               <div className="flex-grow text-gray-400">
//                 <span className="text-xs">10:34&nbsp;AM</span>
//                 <span className="text-xs bg-blue-500 text-white rounded-full h-4 w-4 flex items-center justify-center float-right mt-3">1</span>
//               </div>
//             </div>
//             {/* TODO List 6 */}
//             <div className="flex mt-6 mx-5">
//               <div className="flex-grow">
//                 <img src="./assets/avatars/canada.png" alt="" className="rounded-full w-14 h-12 mt-1" />
//               </div>
//               <div className="flex-grow">
//                 <div className="ml-4">
//                   <div className="text-blue-500 text-lg font-semibold">
//                     Muhamed Avdic
//                   </div>
//                   <div className="text-xs text-gray-500">
//                     Then ok. Let's meeting with client Tommorow.
//                   </div>
//                 </div>
//               </div>
//               <div className="flex-grow text-gray-400">
//                 <span className="text-xs">10:34&nbsp;AM</span>
//                 <span className="text-xs bg-blue-500 text-white rounded-full h-4 w-4 flex items-center justify-center float-right mt-3">1</span>
//               </div>
//             </div>
//             {/* TODO List 7 */}
//             <div className="flex mt-6 mx-5">
//               <div className="flex-grow">
//                 <img src="./assets/avatars/nepal.png" alt="" className="rounded-full w-14 h-12 mt-1" />
//               </div>
//               <div className="flex-grow">
//                 <div className="ml-4">
//                   <div className="text-blue-500 text-lg font-semibold">
//                     Merima Avdic
//                   </div>
//                   <div className="text-xs text-gray-500">
//                     Then ok. Let's meeting with client Tommorow.
//                   </div>
//                 </div>
//               </div>
//               <div className="flex-grow text-gray-400">
//                 <span className="text-xs">10:34&nbsp;AM</span>
//                 <span className="text-xs bg-blue-500 text-white rounded-full h-4 w-4 flex items-center justify-center float-right mt-3">1</span>
//               </div>
//             </div>
//             {/* TODO List 8 */}
//             <div className="flex mt-6 mx-5">
//               <div className="flex-grow">
//                 <img src="./assets/avatars/saudi_arbia.png" alt="" className="rounded-full w-14 h-12 mt-1" />
//               </div>
//               <div className="flex-grow">
//                 <div className="ml-4">
//                   <div className="text-blue-500 text-lg font-semibold">
//                     Basil Bosnjak
//                   </div>
//                   <div className="text-xs text-gray-500">
//                     Then ok. Let's meeting with client Tommorow.
//                   </div>
//                 </div>
//               </div>
//               <div className="flex-grow text-gray-400">
//                 <span className="text-xs">10:34&nbsp;AM</span>
//                 <span className="text-xs bg-blue-500 text-white rounded-full h-4 w-4 flex items-center justify-center float-right mt-3">1</span>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Section - 2 TODO */}
//         <div className="w-8/12 h-screen flex flex-col">
//           {/* TODO: Part - 1  */}
//           <div className="w-full h-20">
//             <div className="flex mt-4 border-b-2 border-gray-100 mx-6 justify-center items-center">
//               <div className="mb-2">
//                 <img src="./assets/avatars/cute_girl.jpg" alt="" className="rounded-full w-12 h-12 border-2 border-blue-400" />
//               </div>
//               <div className="ml-4 mb-2">
//                 <div className="flex">
//                   <div className="flex text-gray-500 text-2xl font-medium">
//                     Dianne Vanhorn
//                   </div>
//                   <div className="m-2 bg-green-400 rounded-full h-3 w-3" />
//                 </div>
//               </div>
//               <div className="flex-grow mb-2">
//                 <div className="flex float-right">
//                   <img src="./assets/img/search_black_24dp.svg" alt="" className="w-8 h-8 mr-1" />
//                   <img src="./assets/img/favorite_border_black_24dp.svg" alt="" className="w-8 h-8 mr-1" />
//                   <img src="./assets/img/notifications_none_black_24dp.svg" alt="" className="w-8 h-8 mr-1" />
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* TODO: Part - 2  */}
//           <div className="overflow-y-auto">
//             <div className="h-4" />
//             <div className="w-full flex-grow">
//               <div className="divide-y divide-light-blue-400">
//                 <div className="text-center border-b-2 mt-2">
//                   <span className="bg-gray-50 px-2 py-2 text-gray-300 font-thin">Yesterday</span>
//                 </div>
//               </div>
//               <div className="flex items-end w-3/6 m-8">
//                 <img className="w-8 h-6 rounded-full border-2 border-pink-500" src="./assets/img/subham.png" alt="" />
//                 <div className="mx-3 p-2 bg-red-50 font-thin text-gray-500 rounded-tl-lg rounded-tr-lg rounded-br-lg">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   <span className="float-right text-xs mt-2 text-gray-700"> 8 min ago</span>
//                 </div>
//               </div>
//               <div className="flex justify-end">
//                 <div className="flex items-end w-3/6 m-8">
//                   <div className="mx-3 p-2 bg-blue-500 font-thin text-white rounded-tl-lg rounded-tr-lg rounded-bl-lg">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     <span className="float-right text-xs mt-2 text-white"> 8 min ago</span>
//                   </div>
//                   <img className="w-8 h-6 rounded-full border-2 border-blue-500" src="./assets/avatars/cute_girl.jpg" alt="" />
//                 </div>
//               </div>
//             </div>
//             <div className="h-4" />
//             <div className="w-full flex-grow">
//               <div className="divide-y divide-light-blue-400">
//                 <div className="text-center border-b-2 mt-2">
//                   <span className="bg-gray-50 px-2 py-2 text-gray-300 font-thin">Today</span>
//                 </div>
//               </div>
//               <div className="flex items-end w-3/6 m-8">
//                 <img className="w-8 h-6 rounded-full border-2 border-pink-500" src="./assets/img/subham.png" alt="" />
//                 <div className="mx-3 p-2 bg-red-50 font-thin text-gray-500 rounded-tl-lg rounded-tr-lg rounded-br-lg">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   <span className="float-right text-xs mt-2 text-gray-700"> 8 min ago</span>
//                 </div>
//               </div>
//               <div className="flex items-end w-3/6 m-8">
//                 <img className="w-8 h-6 rounded-full border-2 border-pink-500" src="./assets/img/subham.png" alt="" />
//                 <div className="mx-3 p-2 bg-red-50 font-thin text-gray-500 rounded-tl-lg rounded-tr-lg rounded-br-lg">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   <span className="float-right text-xs mt-2 text-gray-700"> 8 min ago</span>
//                 </div>
//               </div>
//               <div className="flex justify-end">
//                 <div className="flex items-end w-3/6 m-8">
//                   <div className="mx-3 p-2 bg-blue-500 font-thin text-white rounded-tl-lg rounded-tr-lg rounded-bl-lg">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     <span className="float-right text-xs mt-2 text-white"> 8 min ago</span>
//                   </div>
//                   <img className="w-8 h-6 rounded-full border-2 border-blue-500" src="./assets/avatars/cute_girl.jpg" alt="" />
//                 </div>
//               </div>
//             </div>
//             <div className="h-96" />
//           </div>
//           {/* TODO: Part - 3  */}
//           <div className="w-full h-14 mb-4">
//             <div className="border-gray-200 border-t-2 mb-4" />
//             <div className="flex px-3">
//               <div className="flex rounded-bl-full rounded-tl-full bg-gray-50">
//                 <img src="./assets/img/keyboard_voice_black_24dp.svg" alt="" className="h-8 ml-4 mt-2" />
//               </div>
//               <input type="text" className="flex-grow focus:outline-none bg-gray-50 p-3 text-blue-500" placeholder="Write Something" />
//               <div className="flex rounded-br-full rounded-tr-full bg-gray-50">
//                 <img src="./assets/img/attach_file_black_24dp.svg" alt="" className="h-8 mr-1 mt-2" />
//                 <img src="./assets/img/photo_camera_black_24dp.svg" alt="" className="h-8 mr-1 mt-2" />
//                 <img src="./assets/img/sentiment_satisfied_black_24dp.svg" alt="" className="h-8 mr-1 mt-2" />
//                 <img src="./assets/img/send_black_24dp.svg" alt="" className="w-12 h-12 rounded-full bg-blue-500 p-3" />
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Section - 3 TODO */}
//         <div className="w-4/12 h-screen bg-gray-100">
//           {/* TODO: Search Panel */}
//           <div className="flex px-4 mx-5 mt-4 mb-1 items-center rounded-full bg-white">
//             <div className="w-12 p-2">
//               <img src="./assets/img/search_black_24dp.svg" alt="" />
//             </div>
//             <input className="flex-grow py-2 outline-none placeholder-gray-300 placeholder-font-thin text-blue-500" type="text" placeholder="Search People" />
//           </div>
//           {/* TODO: Top Panel */}
//           <div className="overflow-y-scroll h-5/6 mt-1">
//             <img src="./assets/avatars/cute_girl.jpg" alt="" className="rounded-full w-32 h-32 ml-24 mt-7 border-2 border-blue-400" />
//             <div className="text-3xl text-gray-500 font-normal text-center my-1">
//               Dianne Vanhorn
//             </div>
//             <div className="text-xl text-gray-400 font-thin text-center my-1">Junior Developer</div>
//             <div className="flex justify-center items-center my-4">
//               <div className="w-16 h-16 rounded-full bg-green-100 float-left p-2">
//                 <img src="./assets/img/chatbubble.svg" alt="" className="w-12 h-12" />
//                 <div className="text-sm text-gray-400 mt-3 text-center">Chat</div>
//               </div>
//               <div className="mx-8 h-20 border-r-2 border-gray-200" />
//               <div className="w-16 h-16 rounded-full bg-green-100 float-right p-2">
//                 <img src="./assets/img/videocam.svg" alt="" className="w-12 h-12" />
//                 <div className="text-sm text-gray-400 text-center mt-3">Video&nbsp;Call</div>
//               </div>
//             </div>
//             {/* TODO: View FRIENDS AND ADD TO FAVORITE */}
//             <div className="mx-2">
//               <div className="flex">
//                 <div className="mt-4">
//                   <img src="./assets/img/person_outline_black_24dp.svg" alt="" />
//                 </div>
//                 <div className="mt-4 ml-2 text-gray-400 text-medium font-thin">
//                   View Friends
//                 </div>
//               </div>
//               <div className="flex">
//                 <div className="mt-2">
//                   <img src="./assets/img/favorite_border_black_24dp.svg" alt="" />
//                 </div>
//                 <div className="mt-2 ml-2 text-gray-400 text-medium font-thin">
//                   Add to Favorite
//                 </div>
//               </div>
//             </div>
//             {/* TODO: Attachment */}
//             <div className="m-2">
//               <div className="ml-2 my-4 text-gray-800 text-medium font-semibold">
//                 Attachments
//               </div>
//               <div className="flex justify-between mx-2">
//                 <div className="w-16 h-16 bg-green-100 rounded-lg">
//                   <div className="text-blue-500 p-5 text-sm">PDF</div>
//                 </div>
//                 <div className="w-16 h-16 bg-green-100 rounded-lg">
//                   <div className="text-blue-500  py-5 px-4 text-sm">Video</div>
//                 </div>
//                 <div className="w-16 h-16 bg-green-100 rounded-lg">
//                   <div className="text-blue-500 p-5 text-sm">MP3</div>
//                 </div>
//                 <div className="w-16 h-16 bg-green-100 rounded-lg">
//                   <div className="text-blue-500 py-5 px-4 text-sm">Image</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="text-center my-2">
//             <button className="outline-none bg-transparent hover:bg-blue-500 text-blue-500 font-sm hover:text-white px-4 border border-blue-500 hover:border-transparent rounded-full">View
//               All</button>
//           </div>
//           <a href="/">
//           <button>Log Out</button>
//           </a>
//         </div>
//       </div>
//     );
//   }

//   export default Welcome;