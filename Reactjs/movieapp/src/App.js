import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./component/Home/home";
import Header from "./component/Header/header";
import Footer from "./component/Footer/footer";
import pageNotFound from "./component/PageNotFound/PageNotFound";
import MovieDetail from "./component/MovieDetail/movieDetail";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path="/movie/:omdbID" element={<MovieDetail/>} />
            <Route element={<pageNotFound/>} />
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
