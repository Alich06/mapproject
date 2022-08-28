import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Map from "./component/Map";
import { useState } from "react";

function App() {
  const [mapurl, setMapurl] = useState("lahore")
  
  return (
    
    <>  
    <BrowserRouter>
      <Routes>
          <Route path={'/map/' + mapurl } element={<Map/>} />
      </Routes>
    </BrowserRouter>
      
      <div style={{display:"none"}}>
        <Map 
         mapurl={mapurl}
         setMapurl={setMapurl}
         />
      </div>

      
      
    
  
          </>

  );
}

export default App;