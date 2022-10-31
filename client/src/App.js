import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import Home from './components/Home/Home.jsx';
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
        
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home/>} />
              
           
            {/* <Route path="/home/:id" element={<FoodDetails/>}/> */}

            {/* <Route path="/recipe" element={<Formulario/>}/> */}


          </Routes>
        </div>
      </BrowserRouter>
    </div>


  );
}

export default App;
