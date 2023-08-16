import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Homec from "./components/Home";
import LoginForm from "./components/LoginForm";
import IndiProduct from "./components/IndiProduct";
import Searchbar from "./components/Searchbar";
import Result from "./components/Result";
import Signup from "./components/Signup";
import Mobile from "./components/Mobile";
import Electronics from "./components/Electronics";
import Fashion from "./components/Fashion";
import HomeAppliances from "./components/HomeAppliances";
import Beauty from "./components/Beauty";
import Furniture from "./components/Furniture";
import Books from "./components/Books";
import AboutUs from "./components/AboutUs";
import Admin from "./components/Admin.js";
import Insert from "./components/Insert";

function App() {
  const [data, setData] = useState([]);
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(81, 87, 87)"; //optional color #212529.#042743
    } else {
      setMode("light");
      document.body.style.backgroundColor = "rgb(234,237,237)";
    }
  };
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginForm mode={mode} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/individual" element={<><Searchbar data={data} setData={setData} title="Compareverything" toggleMode={toggleMode} mode={mode}/><IndiProduct data={data}setData={setData}mode={mode}toggleMode={toggleMode}/></>}/>
          <Route path="/result" element={<><Searchbar data={data} setData={setData} title="Compareverything" toggleMode={toggleMode} mode={mode}/><Result mode={mode} toggleMode={toggleMode}/></>}/>
          <Route path="/mobile" element={<><Searchbar data={data} setData={setData} title="Compareverything" toggleMode={toggleMode} mode={mode} /><Mobile data={data} setData={setData} mode={mode} toggleMode={toggleMode}/></>}/>
          <Route path="/electronics" element={<> <Searchbar data={data} setData={setData} title="Compareverything" toggleMode={toggleMode} mode={mode} /><Electronics data={data} setData={setData} mode={mode}toggleMode={toggleMode}/></>}/>
          <Route path="/fashion"element={<><Searchbar data={data} setData={setData} title="Compareverything" toggleMode={toggleMode} mode={mode} /><Fashion data={data} setData={setData} mode={mode} toggleMode={toggleMode} /></>}/>
          <Route path="/HomeAppliances" element={<><Searchbar data={data} setData={setData} title="Compareverything" toggleMode={toggleMode} mode={mode}/><HomeAppliances data={data} setData={setData} mode={mode} toggleMode={toggleMode}/></>}/>
          <Route path="/Beauty"element={<><Searchbar data={data} setData={setData} title="Compareverything" toggleMode={toggleMode} mode={mode} /><Beauty data={data} setData={setData} mode={mode} toggleMode={toggleMode}/></>}/>
          <Route path="/furniture" element={<><Searchbar data={data} setData={setData} title="Compareverything" toggleMode={toggleMode} mode={mode}/><Furniture data={data} setData={setData} mode={mode} toggleMode={toggleMode}/></>}/>
          <Route path="/books" element={<><Searchbar data={data} setData={setData} title="Compareverything" toggleMode={toggleMode} mode={mode}/><Books data={data} setData={setData} mode={mode} toggleMode={toggleMode} /></> }/>
          <Route path="/AboutUs" element={<><Searchbar data={data} setData={setData} title="Compareverything" toggleMode={toggleMode} mode={mode}/><AboutUs data={data} setData={setData} mode={mode} toggleMode={toggleMode} /></> }/>
          <Route path="/Admin" element={<><Searchbar data={data} setData={setData} title="Compareverything" toggleMode={toggleMode} mode={mode}/><Admin data={data} setData={setData} mode={mode} toggleMode={toggleMode}/></>}/>
          <Route path="/Insert" element={<><Searchbar data={data} setData={setData} title="Compareverything" toggleMode={toggleMode} mode={mode}/><Insert data={data} setData={setData} mode={mode} toggleMode={toggleMode}/></>}/>
          <Route path="/" element={<><Searchbar data={data} setData={setData} title="Compareverything" toggleMode={toggleMode} mode={mode} /><Homec data={data} setData={setData} mode={mode} toggleMode={toggleMode} /></>}/>
        </Routes>
      </Router>
    </>
  );
}
export default App;
