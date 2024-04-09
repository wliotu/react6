import './App.css';
import Card from './components/Card';
import Home from './components/Home';


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