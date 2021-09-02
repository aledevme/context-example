import './App.css';


//import context 
import {JetProvider} from './context/JetContext'
import Jets from './views/jets';
function App() {
  return (
    <JetProvider>
      <Jets/>
    </JetProvider>
  );
}

export default App;
