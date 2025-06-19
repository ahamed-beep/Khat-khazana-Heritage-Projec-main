import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { ShoppingCartIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Nax from "./Nax";

const thumbnails = [
  "https://books.lettersofnote.com/cdn/shop/products/hem1_1024x1024@2x.jpg?v=1676471014",
  "https://books.lettersofnote.com/cdn/shop/products/hemframed3_1024x1024@2x.png?v=1676471014",
  "https://books.lettersofnote.com/cdn/shop/products/hem3_1024x1024@2x.jpg?v=1676553988",
  "https://books.lettersofnote.com/cdn/shop/products/credit_1024x1024@2x.jpg?v=1676553988"
];

const recommendations = [
  {
    title: "Letters of Note: War",
    price: "Rs.5,100.00",
    image: "https://books.lettersofnote.com/cdn/shop/products/war_540x.jpg?v=1613929268"
  },
  {
    title: "Letters of Note: Grief",
    price: "Rs.5,100.00",
    image: "https://books.lettersofnote.com/cdn/shop/products/GRIEF_540x.jpg?v=1620291133"
  },
  {
    title: "Letters of Note: Love",
    price: "Rs.5,100.00",
    image: "https://books.lettersofnote.com/cdn/shop/products/sqlove_540x.jpg?v=1613925763"
  },
  {
    title: "Letters of Note: Cats",
    price: "Rs.5,100.00",
    image: "https://books.lettersofnote.com/cdn/shop/products/cats_1024x1024@2x.jpg?v=1613927321"
  }
];

const Productviewpage = () => {
  const navigate = useNavigate();
  const [mainImage, setMainImage] = useState(thumbnails[0]);
  const [quantity, setQuantity] = useState(1);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(totalCount);
  }, []);

  const handleAddToCart = () => {
    if (quantity < 1) return;

    const product = {
      id: 1,
      name: "Limited edition Ernest Hemingway print, designed by Stanley Chow",
      price: 11800,
      quantity,
      image: mainImage
    };

    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const index = existingCart.findIndex(item => item.id === product.id);

    if (index !== -1) {
      existingCart[index].quantity += quantity;
    } else {
      existingCart.push(product);
    }

    localStorage.setItem("cartItems", JSON.stringify(existingCart));

    const totalCount = existingCart.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(totalCount);

    alert("Product added to cart!");
  };

  return (
    <div>
<Nax/>
    <div className="relative font-sans bg-white text-black min-h-screen px-4 py-10 md:px-20 md:py-16">

      {/* Fixed Corner Navbar */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-4">
        <button className="hover:text-[#f26322]">
          <MagnifyingGlassIcon className="h-6 w-6 text-gray-800" />
        </button>
        <button onClick={() => navigate("/cart")} className="relative">
          <ShoppingCartIcon className="h-7 w-7 text-gray-800" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Product Display Section */}
      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <img
            src={mainImage}
            alt="Ernest Hemingway Print"
            className="max-w-full h-[400px] object-contain border mb-4"
          />
          <div className="flex gap-3 mt-2">
            {thumbnails.map((thumb, index) => (
              <img
                key={index}
                src={thumb}
                onClick={() => setMainImage(thumb)}
                className={`w-20 h-24 object-cover border cursor-pointer ${
                  mainImage === thumb ? "border-black" : "border-gray-300"
                }`}
                alt={`Thumbnail ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-4xl font-semibold leading-snug">
            Limited edition Ernest Hemingway print, designed by Stanley Chow
          </h1>
          <p className="text-xl font-bold">Rs.11,800.00</p>
          <p className="text-gray-500 text-sm">plus postage</p>

          <div className="flex items-center gap-4">
            <input
              type="number"
              value={quantity}
              min={1}
              onChange={e => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              className="border border-gray-300 w-16 px-3 py-2 text-center rounded"
            />
            <button
              onClick={handleAddToCart}
              className="bg-[#f26322] text-white font-semibold px-6 py-2 uppercase tracking-wider"
            >
              Add to Basket
            </button>
          </div>

          <p className="text-base">
            Exclusively designed print by{" "}
            <a href="#" className="underline">Stanley Chow</a>,
            featuring a quote from a letter of advice written by Ernest Hemingway to F. Scott Fitzgerald:
          </p>

          <blockquote className="italic text-gray-700 text-lg mt-4">
            "I write one page of masterpiece to ninety-one pages of shit. I try to
            put the shit in the wastebasket."
          </blockquote>

          <p className="text-sm text-gray-700 mt-6">
            Limited edition of 500, each hand-numbered and signed by Stanley Chow. <br />
            Giclée print on 300gsm Matte Satin Archival Quality paper. <br />
            Available in A3 only.
          </p>
        </div>
      </div>

      {/* Recommendations */}
      <div className="mt-20">
        <h2 className="text-2xl font-semibold mb-8 text-center">YOU MAY ALSO LIKE</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {recommendations.map((item, idx) => (
            <div key={idx} className="text-center">
              <img src={item.image} alt={item.title} className="w-full h-[280px] object-cover mb-3" />
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="text-sm font-bold text-gray-700">{item.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 pt-10 border-t text-sm text-gray-800">
        <div>
          <h3 className="font-bold mb-2">Get in touch</h3>
          <p>shop@lettersofnote.com</p>
          <p>Letters of Note, PO Box 338,<br />Manchester, M21 3EF</p>
        </div>
        <div>
          <h3 className="font-bold mb-2">Information</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Shipping</a></li>
            <li><a href="#" className="hover:underline">Returns Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Sign up for spam-free emails about our new books</h3>
          <div className="flex border border-gray-300 rounded overflow-hidden max-w-md">
            <input
              type="email"
              placeholder="Email address"
              className="px-4 py-2 flex-1 outline-none"
            />
            <button className="bg-[#f26322] text-white px-4 py-2 font-semibold">SUBSCRIBE</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Productviewpage;


