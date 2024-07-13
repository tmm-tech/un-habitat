
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './Pages/Home';
import RegionCountries from './Pages/Region_Countries';
import LoginPage from './Pages/Login';
function App() {
  const images = [
    {
        src: 'https://images.unsplash.com/photo-1484861671664-4ebd42ced711?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJ1aWxkaW5nfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        alt: 'Image One'
    },
    {
        src: 'https://images.unsplash.com/photo-1462396240927-52058a6a84ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1aWxkaW5nfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        alt: 'Image Two'
    },
    {
        src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVpbGRpbmd8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60',
        alt: 'Image Three'
    }
];
  return (
    <div className="App">
       <Routes>
     <Route path="/" element={<Home images = {images} />} />
     <Route path="/region&countries" element={<RegionCountries/>} />
     <Route path="/login" element={<LoginPage/>} />
     </Routes>
    </div>
  );
}

export default App;
