
import './App.css';
import NavBar from './components/CartWidgets/assets/NavBar/NavBar'
import ItemListContainer from './components/ServiciosListContainer/ServiciosListContainer'


function App() {
  return (
    <div className="BequiCM">
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos'}/>
    </div>
  );
}

export default App;
