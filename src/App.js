import Home from './Home';
import CurrentCity from './CurrentCity';
import AirQuality from './AirQuality';
import SearchBar from './SearchBar';
import Navbar from './Navbar';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'


const  App=() =>{
return (
  // <>
  // <Router>
  // <div className="App">
  //       <Navbar />
  //       <div className="content">
  //   <Routes>
  //   <Route path="/Home" element={<Home />} />
  //   <Route path="/CurrentCity" element={<CurrentCity />} />
  //   <Route path="/AirQuality" element={<AirQuality />} />
  //   <Route path="/SearchBar" element={<SearchBar />} />
  //   <Route path="/" element={<Login />} />
  //   </Routes>
  //   </div>
  //   </div>
  // </Router>
  
  // </>
  <Login />
)
}
export default App;
