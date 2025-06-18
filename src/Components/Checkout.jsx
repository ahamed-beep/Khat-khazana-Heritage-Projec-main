import React, { useEffect, useState } from "react";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [shippingMethod, setShippingMethod] = useState("dpd");

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedItems);
  }, []);

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-white text-black p-4 md:p-8">
      <h1 className="text-4xl font-bold text-center text-[#f26322] mb-10">Checkout</h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Order Summary (Sticky) */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-6 text-[#f26322]">Your Order</h2>
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
              {cartItems.length > 0 ? (
                cartItems.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-md border"
                      />
                      <div>
                        <h4 className="font-medium text-sm">{item.name}</h4>
                        <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <div className="font-semibold text-[#f26322] text-sm">
                      Rs.{item.price * item.quantity}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-sm">No items in cart.</p>
              )}
            </div>

            <div className="mt-6 pt-4 text-lg font-bold flex justify-between border-t">
              <p>Total</p>
              <p className="text-[#f26322]">
                Rs.{getTotal() + (shippingMethod === "dpd" ? 250 : 0)}
              </p>
            </div>
          </div>
        </div>

        {/* Billing Info */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6 overflow-y-auto max-h-[calc(100vh-150px)]">
          <h2 className="text-2xl font-semibold mb-6 text-[#f26322]">Billing Information</h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 text-sm font-medium">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#f26322]"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Email Address</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#f26322]"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Phone Number</label>
              <input
                type="tel"
                placeholder="+92 300 1234567"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#f26322]"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Postal Code</label>
              <input
                type="text"
                placeholder="12345"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#f26322]"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block mb-1 text-sm font-medium">Address</label>
              <textarea
                rows="3"
                placeholder="Street, City, Country"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#f26322]"
              ></textarea>
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Shipping Method</label>
              <select
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#f26322]"
                value={shippingMethod}
                onChange={(e) => setShippingMethod(e.target.value)}
              >
                <option value="dpd">DPD Delivery - Rs.250</option>
                <option value="pickup">Store Pickup - Free</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Payment Method</label>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={() => setPaymentMethod("card")}
                    className="accent-[#f26322]"
                  />
                  Credit/Debit Card
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                    className="accent-[#f26322]"
                  />
                  Cash on Delivery
                </label>
              </div>
            </div>

            {paymentMethod === "card" && (
              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block mb-1 text-sm font-medium">Card Number</label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#f26322]"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium">Expiry Date</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#f26322]"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium">CVV</label>
                  <input
                    type="password"
                    placeholder="•••"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#f26322]"
                  />
                </div>
              </div>
            )}

            <div className="md:col-span-2 mt-6">
              <button
                type="submit"
                className="w-full bg-[#f26322] hover:bg-[#e35412] text-white py-3 rounded-xl text-lg font-semibold transition duration-200"
              >
                Place Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

