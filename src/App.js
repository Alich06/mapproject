import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Map from "./component/Map";
import { useState } from "react";

function App() { 
  return (
    
    <>  
    <BrowserRouter>
    <Routes>
        <Route path='/map' element={<Map/>} >
          <Route path=":location"/>
        </Route>
        </Routes>
      </BrowserRouter>

  
          </>

  );
}

export default App;