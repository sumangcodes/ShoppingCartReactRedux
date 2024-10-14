import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from './reducers/cartReducer';

function ShoppingCart() {
  const items = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    const items = [
      { id: 1, name: 'Quantum Entanglement T-shirt', price: 25 },
      { id: 2, name: 'Pi Day Mug', price: 15 },
      { id: 3, name: 'Binary Code Socks', price: 10 },
      { id: 4, name: 'Star Wars Action Figure', price: 30 },
      { id: 5, name: 'Periodic Table Poster', price: 20 },
    ];
    const newItem = items[Math.floor(Math.random() * items.length)];
    dispatch(addItem(newItem));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem({ id }));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Shopping Cart</h1>
      <button onClick={handleAddItem}>Add Geeky Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ₹{item.price}
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h2>Total Amount: ₹{totalAmount}</h2>
    </div>
  );
}

export default ShoppingCart;
