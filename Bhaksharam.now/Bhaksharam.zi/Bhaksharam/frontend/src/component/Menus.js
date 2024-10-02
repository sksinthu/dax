import React, { useState } from 'react';
import { useFood } from '../Context/Foodcontet'; // Correct import path

const AdminDashboard = () => {
  const { foodItems, addFoodItem, editFoodItem, deleteFoodItem } = useFood();
  const [newItem, setNewItem] = useState({ name: '', price: '', image: null });
  const [editItem, setEditItem] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleFileChange = (e) => {
    setNewItem({ ...newItem, image: e.target.files[0] });
  };

  const addNewItem = () => {
    if (newItem.name && newItem.price && newItem.image) {
      addFoodItem({ id: Date.now(), ...newItem });
      setNewItem({ name: '', price: '', image: null }); // Clear form
    }
  };

  const handleEditChange = (e) => {
    setEditItem({ ...editItem, [e.target.name]: e.target.value });
  };

  const saveEditItem = () => {
    editFoodItem(editItem);
    setEditItem(null); // Exit editing mode
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      <div className="add-new-item">
        <h2>Add New Food Item</h2>
        <input type="text" name="name" placeholder="Food Name" value={newItem.name} onChange={handleInputChange} />
        <input type="number" name="price" placeholder="Price" value={newItem.price} onChange={handleInputChange} />
        <input type="file" name="image" accept="image/*" onChange={handleFileChange} />
        <button onClick={addNewItem}>Add Food Item</button>
      </div>

      {editItem && (
        <div className="edit-item">
          <h2>Edit Food Item</h2>
          <input type="text" name="name" placeholder="Food Name" value={editItem.name} onChange={handleEditChange} />
          <input type="number" name="price" placeholder="Price" value={editItem.price} onChange={handleEditChange} />
          <button onClick={saveEditItem}>Save Changes</button>
        </div>
      )}

      <div className="food-items-list">
        <h2>Food Items</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {foodItems.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>Rs {item.price}</td>
                <td>
                  <button onClick={() => setEditItem(item)}>Edit</button>
                  <button onClick={() => deleteFoodItem(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
