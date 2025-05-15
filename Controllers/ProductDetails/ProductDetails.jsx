"use client";

import React, { useState, useEffect, useRef } from 'react';
import './Products.css';
import { useRouter, useSearchParams } from 'next/navigation';
import Navbar from '@/Pages/Navbar/Navbar';
import Footer from '@/Pages/Footer/Footer';
import LastFooter from '@/Pages/Footer/LastFooter';
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

  console.log("ModalContent", modalContent)

  // Magnifier effect
  const handleMouseMove = (e) => {
    const magnifier = magnifierRef.current;
    const image = mainImageRef.current;
    if (!magnifier || !image) return;

    const rect = image.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const magnifierSize = 150;
    const zoom = 2;

    magnifier.style.left = `${x - magnifierSize / 2}px`;
    magnifier.style.top = `${y - magnifierSize / 2}px`;
    magnifier.style.backgroundImage = `url(${image.src})`;
    magnifier.style.backgroundRepeat = 'no-repeat';
    magnifier.style.backgroundSize = `${image.width * zoom}px ${image.height * zoom}px`;
    magnifier.style.backgroundPosition = `${(x / rect.width) * 100}% ${(y / rect.height) * 100}%`;
    magnifier.style.display = 'block';
  };

  const handleMouseLeave = () => {
    if (magnifierRef.current) magnifierRef.current.style.display = 'none';
  };

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
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
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
                <button onClick={() => updateCartQuantity(modalContent, -1)}>-</button>
                <input
                  type="text"
                  readOnly
                  value={cart.find(item => item.productId === modalContent.productId)?.quantity || 1}
                />
                <button onClick={() => updateCartQuantity(modalContent, 1)}>+</button>
              </div>
            ) : (
              <div className="add-to-cart-btn1" onClick={() => addToCartWithSize(modalContent, 1, selectedSize)}>
                <FiShoppingCart style={{ marginRight: '8px' }} />
                Add to Cart
              </div>
            )}
          </div>

          <div className="wishlist-compare">
            <div className="wishlist-item">
              {wishlist.find(item => item.productId === modalContent.productId) ? (
                <div onClick={() => deleteFromWishlist(modalContent.productId)}>
                  <FaHeart color="red" size={30} />
                  <span>Remove From Wishlist</span>
                </div>
              ) : (
                <div onClick={() => addToWishList(modalContent, 1)}>
                  <FiHeart size={30} />
                  <span>Add to Wishlist</span>
                </div>
              )}
            </div>

            <div className="wishlist-item">
              <PiRepeatOnceBold size={30} />
              <span>Add to Compare</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <LastFooter />
    </div>
  );
};

export default ProductDetails;
