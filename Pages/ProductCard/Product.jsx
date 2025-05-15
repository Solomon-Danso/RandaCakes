"use client";
import React, { useEffect, useRef, useState } from 'react';
import "./ProductCard.css";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import ProductCard from './ProductCard';
import FilteredSectionLoader from '@/Components/FilterSectionLoader';
import { useCartStore } from '@/Components/CartStore';
import { Categories, DummyProducts } from '@/Constants/data';

const Product = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { loadProducts, loadCategory, categoryList } = useCartStore();

  // Load products and categories once on mount
  useEffect(() => {
    loadProducts();
    loadCategory();
  }, []);

  // Filter products only when both DummyProducts and categoryList are available
  useEffect(() => {
    const bothLoaded = Categories.length > 0 && DummyProducts.length > 0;
    if (!bothLoaded) {
      setLoading(true);
      return;
    }

    setLoading(true);
    const filtered = DummyProducts.filter(
      (item) => item.category === Categories[activeIndex]?.name
    );
    setFilteredProducts(filtered);
    setLoading(false);
  }, [DummyProducts, Categories, activeIndex]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 130 * 4;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const monthName = new Date().toLocaleString('default', { month: 'long' });

  return (
    <div className="product-container">
      <div className="product-header">
        <div className="product-header-left">
          <div className='prd-Title'>Popular Products</div>
          <div>Do not miss the current offers until the end of {monthName}.</div>
        </div>

        <div className="product-header-right-wrapper">
          <FiChevronLeft className="scroll-btn left" size={30} color='black' onClick={() => scroll('left')} />

          <div className="product-header-right" ref={scrollRef}>
            {Categories.length > 0 &&
              Categories.slice(0, 7).map((data, index) => (
                <div
                  className={`category-item ${activeIndex === index ? 'active' : ''}`}
                  key={index}
                  onClick={() => setActiveIndex(index)}
                >
                  {data.name}
                </div>
              ))}
          </div>

          <FiChevronRight className="scroll-btn left" size={30} color='black' onClick={() => scroll('right')} />
        </div>
      </div>

      {/* Loader or Product Card */}
      {loading ? (
        <FilteredSectionLoader />
      ) : (
        <ProductCard product={filteredProducts} />
      )}
    </div>
  );
};

export default Product;
