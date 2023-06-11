import React, { useContext, useState } from 'react';
import { CurrencyContext } from './CurrencyContext';

const ProductList = (props) => {
  const { currency } = useContext(CurrencyContext);
  const [products, setProducts] = useState([
    { id: 1, name: 'Dr. Dre Headphones', price: 100 },
    { id: 2, name: 'DJI4 Drone Camera', price: 500 },
    { id: 3, name: 'iPhone 17 Pro 64GB', price: 700 },
  ]);

  const handleAddToCart = (product, quantity) => {
    const item = { product, quantity };
    props.onAddToCart(item);
  };

  const displayPrice = (currency,itemPrice) => {
    if(currency === "EUR"){
      console.log("price" , itemPrice, "currency", currency)
      return (itemPrice/100) * 98;
    }else if(currency === "IQD"){
      return(itemPrice/100 * 130);
    }else{
      return itemPrice
    }

  }

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product, i) => (
          <li key={product.id}>
            <span>{product.name}</span>
            <span>{displayPrice(currency,product.price)} {currency}</span>
            <input
              type="number"
              min="1"
              value={product.quantity || 1}
              onChange={(e) => {
                const newProducts = [...products];
                newProducts[i] = {
                  ...newProducts[i],
                  quantity: parseInt(e.target.value),
                };
                setProducts(newProducts);
              }}
            />
            <button
              onClick={() => handleAddToCart(product, product.quantity || 1)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
