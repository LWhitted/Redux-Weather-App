import Home from './Home';
import CurrentCity from './CurrentCity';
import AirQuality from './AirQuality';
import SearchBar from './SearchBar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


const  App=() =>{
return (
  <>
  <Router>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/CurrentCity" element={<CurrentCity />} />
    <Route path="/AirQuality" element={<AirQuality />} />
    <Route path="/SearchBar" element={<SearchBar />} />
    </Routes>
  </Router>
  
  </>
)
}
export default App;
