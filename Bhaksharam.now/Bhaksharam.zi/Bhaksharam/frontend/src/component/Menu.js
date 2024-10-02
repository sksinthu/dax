import React from 'react';
import { useCart } from '../component/CartContexrprovider'; 
import { useFood } from '../Context/Foodcontet'; 
import { ShoppingCart, Heart, Star } from 'lucide-react';
import '../css/Menu.css';

const FoodItem = ({ item }) => {
  const { addToCart } = useCart();
  const [isFavorite, setIsFavorite] = React.useState(false);
  const [isStarred, setIsStarred] = React.useState(false);

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">{item.name}</h2>
      </div>
      <div className="card-content">
        <img src={item.image} alt={item.name} className="food-image" />
        <p>Price: Rs {item.price}</p>
      </div>
      <div className="card-footer">
        <button onClick={() => addToCart(item)}>
          <ShoppingCart className="h-4" /> Add to Cart
        </button>
        <button className="outline" onClick={() => setIsFavorite((prev) => !prev)}>
          <Heart className={`h-4 ${isFavorite ? 'text-red-500' : ''}`} />
        </button>
        <button className="outline" onClick={() => setIsStarred((prev) => !prev)}>
          <Star className={`h-4 ${isStarred ? 'text-yellow-500' : ''}`} />
        </button>
      </div>
    </div>
  );
};

const Menu = () => {
  const { foodItems } = useFood();

  return (
    <div className="container">
      <h1>Food Delivery Service</h1>
      <div className="grid">
        {foodItems.map((item) => (
          <FoodItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
