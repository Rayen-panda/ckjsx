
import './App.css';
import React from 'react';
import Namepr from "./Component/Profile/Name.js";
import Addresspr from "./Component/Profile/Address.js";
import Imgpr from "./Component/Profile/ProfilePhoto.js";
import FbLink from './Component/Profile/fb.js';

function App() {
  return (
    <div className="App">
      <div className='block'>
        <div className='bl'>
          <div className='imgblock'> <Imgpr/> </div>
          <div className='name'>
            <h3>Name :</h3>
            <p> <Namepr/> </p>
          </div>

        </div>
        <div className='address'>
          <h3>Address :</h3>
          <p><Addresspr/></p>
        </div>

        <div className='fb'>
          <h3>FbLink :</h3>
          <p className='link'><FbLink/></p>
        </div>
      
      </div>
    </div>
  );
}

export default App;
