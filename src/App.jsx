import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import "./App.css";
import Herosection from './components/Herosection';
 const App = () => {
   return (
     <>  
     <div className="app">
     <Header/>
     <Herosection />
     <Footer />
     </div>
     </>
   )
 }
 export default App;