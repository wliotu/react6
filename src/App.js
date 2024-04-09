import './App.css';
import Card from './components/Carrd/Card';
import Home from './components/Home/Home';


function App() {
  const user = {
    name: 'OINBUG',
    age: 23789,
    country: 'Sbiylra'
  }

  const products = {
    product: 'milk',
    price: 8172964,
    from: 'Sbiylra'
  }
  return (
    <div className="App">
      <Card user = {user}/>
      <Home products = {products}/>
    </div>
  );
}

export default App;