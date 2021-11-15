import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Card from './components/Card';
import Footer from './components/Footer';
import data from './seedData';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch as Routes } from 'react-router-dom';
import ShowCard from './components/ShowCard';

function App() {
  return (
    <Router>
    <>
          <Routes>
            <Route exact path="/">
              <Navbar/>
              <Banner/>
                <img className="parachute" src="../assets/parachute.png" alt="" />
                <div className="container-fluid"> 
                  <div className="card-container row">

                    {data.map((e,i)=> { 
                      return (
                      <div className="col-lg-3 col-md-6 col-sm-12 " key = {e.key}>
                        <Card info = {e}  /> 
                      </div>
                      )
                    })}

                  </div>
                </div> 
              <Footer/>         
            </Route>
            <Route exact path = "/show"  >
              <Navbar/>
              <ShowCard/>
              <Footer/>
            </Route> 
          </Routes>

    </>
    </Router>
  );
}

export default App;
