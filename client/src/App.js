import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import Home from './components/Home/Home.jsx';
import './App.css';
import { PageNotFound } from './components/PageNotFound/PageNotFound.jsx';
import CreateRecipe from './components/CreateRecipe/CreateRecipe.jsx';
import RecipeDetails from './components/RecipeDetails/RecipeDetails.jsx';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
        
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/home" element={<Home/>} />                         
            <Route  path="/home/:id" element={<RecipeDetails/>}/>
            <Route  path="/recipe" element={<CreateRecipe/>}/>
            <Route path="*" element={<PageNotFound/>} /> 


          </Routes>
        </div>
      </BrowserRouter>
    </div>


  );
}

export default App;
