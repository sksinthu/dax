import React, { useState } from 'react';
import axios from 'axios';

const OrderForm = () => {
    const [customerName, setCustomerName] = useState('');
    const [foodItem, setFoodItem] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const price = 10; // Set a fixed price or calculate based on item

        const orderData = { 
            customerName, 
            items: [{ itemName: foodItem, quantity, price }], 
            totalAmount: quantity * price 
        };

        try {
            const response = await axios.post('http://localhost:5004/api/orders', orderData); // Send orderData
            setSuccess('Order placed successfully!');
            setCustomerName('');
            setFoodItem('');
            setQuantity(1);
        } catch (err) {
            console.error('Error placing order:', err.response ? err.response.data : err.message);
            setError('Could not place order.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Place Order</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
            <label>
                Customer Name:
                <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    required
                />
            </label>
            <label>
                Food Item:
                <input
                    type="text"
                    value={foodItem}
                    onChange={(e) => setFoodItem(e.target.value)}
                    required
                />
            </label>
            <label>
                Quantity:
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    min="1"
                    required
                />
            </label>
            <button type="submit">Submit Order</button>
        </form>
    );
};

export default OrderForm;
