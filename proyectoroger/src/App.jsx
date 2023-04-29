
import './App.css';
 import ItemListContainer from './components/ItemListContainer/ItemListContainer';
 import Navbar from './components/Navbar/Navbar';
 import ItemCount from './components/ItemCount/ItemCount';

function App() {
  const nombre = "React"
  return (
    <>
    <Navbar />    
    <ItemListContainer greeting="Hola, saludito por greeting" />
    <ItemCount />
    </>
   
  );
}

export default App;
