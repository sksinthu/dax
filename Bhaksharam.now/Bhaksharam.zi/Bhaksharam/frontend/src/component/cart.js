import React from 'react';
import { useCart } from '../component/CartContexrprovider'; // Correct path
import { useNavigate } from 'react-router-dom';
import "../css/cart.css";

const CartPage = () => {
  const { cart, removeFromCart, getTotalCartAmount } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/order');
  };

  const removeItem = (id) => {
    removeFromCart(id);
  };

  const totalAmount = getTotalCartAmount();

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-orange-600 mb-8">Cart</h1>
      {cart.length === 0 ? (
        <h1 className="text-lg text-gray-600">Your cart is empty.</h1>
      ) : (
        <main>
          <h2 className="text-xl font-semibold mb-4">Items</h2>
          <table className="w-full mb-8">
            <thead>
              <tr className="border-b">
                <th className="text-left pb-2">Title</th>
                <th className="text-right pb-2">Price</th>
                <th className="text-right pb-2">Total</th>
                <th className="text-right pb-2">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item.id} className="border-b">
                  <td className="text-left py-2">{item.name}</td>
                  <td className="text-right py-2">₹{item.price}</td>
                  <td className="text-right py-2">₹{item.price}</td>
                  <td className="text-right py-2">
                    <button onClick={() => removeItem(item.id)} className="text-red-500">
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 className="text-xl font-semibold mb-4">Cart Totals</h2>
          <div className="space-y-4 mb-8">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <p>{totalAmount.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <p>Rs 2.00</p>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <b>{(totalAmount + 2).toFixed(2)}</b>
            </div>
          </div>

          <button
            className="w-full bg-orange-500 text-white py-3 rounded"
            onClick={handleCheckout}
          >
            PROCEED TO CHECKOUT
          </button>
        </main>
      )}
    </div>
  );
};

export default CartPage;
