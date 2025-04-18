import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, resetCart} from '../features/cartSlice'
import { toast } from 'react-hot-toast';

const CartPage = () => {
  const dispatch = useDispatch();
  const { cart, total, totalItems } = useSelector((state) => state.cart);
  console.log(cart)

  const handleRemove = (courseId) => {
    dispatch(removeFromCart(courseId));
  };

  const handleReset = () => {
    dispatch(resetCart());
    toast.success('Cart cleared successfully');
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-900 text-white py-10 px-5">
      <div className="max-w-6xl mx-auto bg-white text-gray-900 shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Your Cart</h1>

        {cart.length === 0 ? (
          <p className="text-gray-700 text-lg">Your cart is empty!</p>
        ) : (
          <>
            {/* Cart Items */}
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-sm"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.thumbnail}
                      alt={item.courseName}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div>
                      <h2 className="text-xl font-semibold">{item.courseName}</h2>
                      <p className="text-gray-600">Price: Rs. {item.price}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemove(item._id)}
                    className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="mt-8 border-t pt-6">
              <h2 className="text-2xl font-bold mb-4">Summary</h2>
              <p className="text-lg text-gray-700">Total Items: {totalItems}</p>
              <p className="text-lg text-gray-700">Total Price: Rs. {total}</p>
              <div className="flex justify-end space-x-4 mt-4">
                <button
                  onClick={handleReset}
                  className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
                >
                  Clear Cart
                </button>
                <button
                  className="bg-yellow-500 text-gray-900 py-2 px-4 rounded-lg hover:bg-yellow-600"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
    </div>
  );
};

export default CartPage;
