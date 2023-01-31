import './App.css';

import React from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
// import About from './Components/About';
// import NewsItems from './Components/NewsItems';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Components/About';
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';

const App = () => {
  const [mode, setMode] = useState("light");
  const [progress, setProgress] = useState(10);
  
  const ProgressFunc = (prog) => {
    setProgress(prog);
  }

    const darkMode = () => {
      if (mode === "light") {
        setMode("dark");
        document.body.style.background = "#585756";
      }
      else {
        setMode("light");
        document.body.style.background = "white";
      }
    }
    
    const pageSize = 10;
    const ky = process.env.REACT_APP_NEWS_API;
    const country = 'in';

    return (
      <Router>
        <Navbar mode={mode} toggle={darkMode} />
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route exact path='/' element={<News setProg = {ProgressFunc} key='general' pageSize={pageSize} country={country} category='general' ky={ky} mode={mode} badgeColor='danger' />} />
          <Route exact path='/business' element={<News setProg = {ProgressFunc} key='business' pageSize={pageSize} country={country} category='business' ky={ky} mode={mode} badgeColor='success' />} />
          <Route exact path='/entertainment' element={<News setProg = {ProgressFunc} key='entertainment' pageSize={pageSize} country={country} category='entertainment' ky={ky} mode={mode} badgeColor='info' />} />
          <Route exact path='/health' element={<News setProg = {ProgressFunc} key='health' pageSize={pageSize} country={country} category='health' ky={ky} mode={mode} badgeColor='warning' />} />
          <Route exact path='/science' element={<News setProg = {ProgressFunc} key='science' pageSize={pageSize} country={country} category='science' ky={ky} mode={mode} badgeColor='dark' />} />
          <Route exact path='/sports' element={<News setProg = {ProgressFunc} key='sports' pageSize={pageSize} country={country} category='sports' ky={ky} mode={mode} badgeColor='secondary' />} />
          <Route exact path='/technology' element={<News setProg = {ProgressFunc} key='technology' pageSize={pageSize} country={country} category='technology' ky={ky} mode={mode} badgeColor='primary' />} />
          <Route exact path='/about' element={<About mode={mode} />} />
        </Routes>
      </Router>
    )
  
}

export default App;