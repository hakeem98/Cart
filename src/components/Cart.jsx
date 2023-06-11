import React, {useContext} from 'react';
import { CurrencyContext } from './CurrencyContext';

const Cart = (props) => {
  const { currency } = useContext(CurrencyContext);
  const{ cart } = props;

  const getTotalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.product.price * item.quantity;
    }
    );
    if(currency === "EUR"){
      total = Math.round(total /100) * 98 ;
    }else if ( currency === "IQD"){
      total = Math.round(total /100) * 130 ;
    }else{
      total = total * 1;
    }
    return total;
  }

  const displayPrice = (price, currency) => {
    if(currency === "EUR"){
      return (price /100) * 98;
    }else if ( currency === "IQD"){
      return (price /100) * 130;
    }else{
      return (price)
    }
  }

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((item,index) => (
          <li key={index}>
            <span>{item.product.name}</span>
            <span>{displayPrice(item.product.price, currency) * item.quantity} {currency}</span>
            <span className='quntity'>{item.quantity}</span>
          </li>
        ))}
      </ul>
      <p>Total Price: {getTotalPrice()} {currency}</p>
    </div>
  );
};

export default Cart;
