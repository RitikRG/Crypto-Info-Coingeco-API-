import React from "react";
import axios from "axios";
import { ExternalLink } from 'react-external-link';
import {Routes, Route} from 'react-router-dom'
import Home from "./components/Home";
import './styles/generalstyle.css'
import ContactPage from "./Routes/ContactPage";
import FaqPage from "./Routes/FaqPage";
import FullFeaturedPage from "./Routes/FullFeaturedPage";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contactPage" element={<ContactPage/>}/>
      <Route path="/faqPage" element={<FaqPage/>}/>
      <Route path="/fullFeaturedPage" element={<FullFeaturedPage/>}/>
    </Routes>
    </>
  );
}

export default App;
