import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';
function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greetings="Gracias por visitar nuestro sitio"/>
    </div>
  );
}

export default App;
