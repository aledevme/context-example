import './App.css';
import Banner from './components/banner';


//import context 
import {JetProvider} from './context/JetContext'
import BaseJets from './views/base.jets';
function App() {
  return <div className="h-screen w-screen">
    <JetProvider>
      <div className="container mx-auto bg-white h-full px-4 py-5">
        <Banner/>
        <BaseJets/>
      </div>
    </JetProvider>
  </div>
}

export default App;
