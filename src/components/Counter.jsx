import { addItem, removeCart, removeItem } from "../features/CartSlicer";
import { useDispatch, useSelector } from "react-redux";
const products = useSelector((state) => state.cart.items);
const dispatch = useDispatch();

export const Counter = () => {
  return (
    <div className="flex items-center">
      <button
        onClick={() => dispatch(removeItem(products))}
        className="px-3 py-1 border border-gray-300 rounded-lg"
      >
        -
      </button>
      <span className="mx-2">{products.quantity}</span>
      <button
        onClick={() => dispatch(addItem(products))}
        className="px-3 py-1 border border-gray-300 rounded-lg"
      >
        +
      </button>
    </div>
  );
};
