import './App.css';
import Banner from './components/banner';


//import context 
import {FlightProvider} from './context/FlightContext'
import BaseFlights from './views/flights/base.flight';
function App() {
  return <div className="h-screen w-screen">
    <FlightProvider>
      <div className="container mx-auto bg-white h-full px-4 py-5">
        <Banner/>
        <BaseFlights/>
      </div>
    </FlightProvider>
  </div>
}

export default App;
