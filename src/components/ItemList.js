import { useDispatch, useSelector } from "react-redux";
import { CDN_URL_ITEM_IMAGE } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem({ id: item.card.info.id }));
  };

  // Find the quantity of an item in the cart
  const getItemQuantity = (id) => {
    const cartItem = cartItems.find((item) => item.card.info.id === id);
    return cartItem ? cartItem.quantity : 0;
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex flex-col sm:flex-row items-center">
          <div className="w-full sm:w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span> - Rs {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-full sm:w-3/12 p-4 relative flex justify-center items-center">
            <img src={CDN_URL_ITEM_IMAGE + item.card.info.imageId} className="w-20 h-20 sm:w-full sm:h-auto" alt={item.card.info.name} />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 mt-2">
              <button
                className="p-2 rounded-lg bg-black text-white shadow-lg"
                onClick={() => handleAddItem(item)}
              >
                +
              </button>
              <span className="p-2">{getItemQuantity(item.card.info.id)}</span>
              <button
                className="p-2 rounded-lg bg-black text-white shadow-lg"
                onClick={() => handleRemoveItem(item)}
              >
                -
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
