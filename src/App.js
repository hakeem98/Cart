import './App.css'
import { CurrencyProvider } from './components/CurrencyContext';
import { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import CurrencySelector from './components/SelectCurrency';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <CurrencyProvider>
      <div>
        <CurrencySelector />
        <ProductList onAddToCart={item => setCart([...cart, item])} />
        <Cart cart={cart} />
      </div>
    </CurrencyProvider>
  );
}

export default App;
