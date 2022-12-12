import logo from './logo.svg';
import './App.css';
import { Usuario } from './screen/Usuario';
import { JerarquiaProvider } from './context/jerarquiaContext';

const AppState = ({ children }) => {
    return(
      <JerarquiaProvider>
        { children }
      </JerarquiaProvider>
    )
}

function App() {
  return (
    <div className="">
      <AppState>
        <Usuario />
      </AppState>
      
    </div>
  );
}

export default App;
