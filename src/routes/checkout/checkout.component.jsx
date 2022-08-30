import { useContext } from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { CartContext } from '../../contexts/cart.context';

import './checkout.styles.scss';

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Товар</span>
        </div>
        <div className='header-block'>
          <span>Деталі</span>
        </div>
        <div className='header-block'>
          <span>Кількість</span>
        </div>
        <div className='header-block'>
          <span>Ціна</span>
        </div>
        <div className='header-block'>
          <span>Видалити</span>
        </div>
      </div>
      <h1>I am the checkout page</h1>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className='total'>Усього: {cartTotal} ГРН</span>
    </div>
  );
};

export default Checkout;
