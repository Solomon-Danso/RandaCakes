"use client"
import React, { useEffect, useRef, useState } from 'react';
import "./ProductCard.css"
import { Categories, DummyProducts } from '@/Constants/data'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import ProductCard from './ProductCard';
import FilteredSectionLoader from '@/Components/FilterSectionLoader';
import { useCartStore } from '@/Components/CartStore';

const MultiProduct = ({ cate }) => {
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

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      const filtered = DummyProducts.filter(
        (item) => item.category === cate
      );
      setFilteredProducts(filtered);
      setLoading(false);
    }, 5000); // Simulate loading delay

    return () => clearTimeout(timeout);
  }, [DummyProducts, cate, activeIndex]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 130 * 4;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="product-container">
      <div className="product-header">
        <div className="product-header-left">
          <div className='prd-Title'>{cate}</div>
        </div>
      </div>

      {loading ? (
        <FilteredSectionLoader />
      ) : (
        <ProductCard product={filteredProducts} />
      )}
    </div>
  );
};

export default MultiProduct;
