import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { useState, useEffect } from "react";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleCartClear = () => {
        dispatch(clearCart());
    };

    const [total, setTotal] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        const newTotal = cartItems.reduce((sum, item) => {
            return sum + (item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100) * item.quantity;
        }, 0);
        setTotal(newTotal);

        const newTotalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
        setTotalItems(newTotalItems);
    }, [cartItems]);

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <button
                    className="p-2 m-2 bg-black text-white rounded-lg"
                    onClick={handleCartClear}
                >
                    Clear Cart
                </button>
                {cartItems.length === 0 ? (
                    <h1>Cart is Empty. Add items to cart</h1>
                ) : (
                    <>
                        <ItemList items={cartItems} />
                        <p>Total: Rs-{total.toFixed(2)}</p>
                        <p>Total Items: {totalItems}</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;
