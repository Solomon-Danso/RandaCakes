"use client";

import React, { useState, useEffect, useRef } from 'react';
import './Products.css';
import { useRouter, useSearchParams } from 'next/navigation';
import Navbar from '@/Pages/Navbar/Navbar';
;

import { FaHeart, FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import { PiRepeatOnceBold } from 'react-icons/pi';
import ProductLoader from '@/Components/ProductLoader';
import { useCartStore } from '@/Components/CartStore';
import { apiMedia } from '@/Constants/data';

const ProductDetails = () => {
  const searchParams = useSearchParams();
  const productId = searchParams.get("productId");
  const router = useRouter();

  const {
    loadProducts, productList,
    loadCategory,
    cart, wishlist,
    loadCart, loadWishlist,
    updateCartQuantity, addToCartWithSize,
    addToWishList, deleteFromWishlist
  } = useCartStore();

  const [modalContent, setModalContent] = useState(null);
  const [activeImage, setActiveImage] = useState('');
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  const magnifierRef = useRef(null);
  const mainImageRef = useRef(null);

  // Load products/categories/cart/wishlist
  useEffect(() => {
    loadProducts();
    loadCategory();
    loadCart();
    loadWishlist();
  }, []);

  // When products are loaded, get the matching product
  useEffect(() => {
    if (productId && productList.length > 0) {
      const foundProduct = productList.find(p => p.productId === productId);
      setModalContent(foundProduct);
      setActiveImage(foundProduct?.mainPicture || '');
      setLoading(false);
    }
  }, [productId, productList]);


  
  const formatCurrency = (value) =>
    new Intl.NumberFormat('en-GH', {
      style: 'currency',
      currency: 'GHS',
      minimumFractionDigits: 2,
    }).format(value);

  const renderStars = (rating) => {
    if (!rating || isNaN(rating)) return null;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} color="#FFD700" />
        ))}
        {hasHalfStar && <FaStarHalfAlt key="half" color="#FFD700" />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={`empty-${i}`} color="#FFD700" />
        ))}
      </>
    );
  };

  if (loading || !modalContent) return <ProductLoader />;

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <Navbar />

      <div className="product-details-container">
        <div className="product-images">
          <div className="sub-images">
            {modalContent?.subPictures?.map((subImage, idx) => (
              <img
                key={idx}
                src={apiMedia+subImage}
                alt="Sub"
                className="sub-image-item"
                onMouseEnter={() => setActiveImage(subImage)}
              />
            ))}
          </div>

          <div className="main-image-container">
            {activeImage && (
              <img
                src={apiMedia+activeImage}
                alt="Main"
                className="main-image"
                ref={mainImageRef}
               
              />
            )}
            <div className="magnifier-glass" ref={magnifierRef}></div>
          </div>
        </div>

        <div className="product-info">
          <h1>{modalContent.title}</h1>

          <div className="product-meta">
            <span>Category: {modalContent.category}</span>
            <span className="rating">{renderStars(modalContent.starRating)}</span>
            <span>Review (3)</span>
          </div>

          <div className="product-price">

            {
              modalContent.discountPercent<1?
              <>
              <span className="new-price">{formatCurrency(modalContent.price)}</span>
              </>:
              <>
            <span className="old-price">{formatCurrency(modalContent.price)}</span>
            <span className="new-price">
              {formatCurrency(
                ((100 - modalContent.discountPercent) / 100) * modalContent.price
              )}
            </span>
              </>
            }
           
          </div>

          <div className="product-stock">
            Available In Stock: <span>{modalContent.quantity} {modalContent.quantity > 1 ? "items" : "item"}</span>
          </div>

          <p className="product-description">{modalContent.description}</p>


          {Array.isArray(modalContent.size) && modalContent.size.some(size => size) && (
  <div className="product-sizes">
    <span>SIZE: </span>
    <div className="size-options">
      {modalContent.size.map((size, idx) => (
        size && (
          <div
            key={idx}
            className={`size-option ${selectedSize === size ? "active" : ""}`}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </div>
        )
      ))}
    </div>
  </div>
)}


         

          <div className="shipping-info">
            Free Shipping (Est. Delivery Time 2-3 Days)
          </div>

          <div className="product-actions">
            {cart.find(item => item.productId === modalContent.productId) ? (
           

<div className="quantity-control">
    <button 
      className="quantity-btn-left" 
      onClick={() => updateCartQuantity(modalContent, -1)}
    >-</button>

    <input 
      type="text" 
      className="quantity-input" 
      value={cart.find(cartItem => cartItem.productId === modalContent.productId)?.quantity || 1} 
      readOnly
    />

    <button 
      className="quantity-btn-right" 
      onClick={() => updateCartQuantity(modalContent, 1)}
    >+</button>  {/* <-- HERE: corrected item, not item.productId, */}
  </div>

            ) : (
              <div className="add-to-cart-btn1" onClick={() => addToCartWithSize(modalContent, 1, selectedSize)}>
                <FiShoppingCart style={{ marginRight: '8px' }} />
                Add Basket
              </div>
            )}
          </div>

       
        </div>
      </div>


      
    </div>
  );
};

export default ProductDetails;
