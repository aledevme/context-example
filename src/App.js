import './App.css';


//import context 
import {JetProvider} from './context/JetContext'
import Jets from './views/jets';
function App() {
  return <div className="h-screen w-screen">
    <JetProvider>
      <Jets/>
    </JetProvider>
  </div>
}

export default App;
