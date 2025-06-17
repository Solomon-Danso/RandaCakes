"use client";

import React, { useState, useEffect } from 'react';
import './Products.css';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/Pages/Navbar/Navbar';
import Footer from '@/Pages/Footer/Footer';
import LastFooter from '@/Pages/Footer/LastFooter';
import { Categories, DummyProducts } from '@/Constants/data';
import RowProduct from '@/Pages/ProductCard/RowProducts';
import { FaFilter, FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { useCartStore } from '@/Components/CartStore';
import { GrAscend } from 'react-icons/gr';

const SearchProducts = () => {
  
  const [checkedCategories, setCheckedCategories] = useState({});
  const [checkedRatings, setCheckedRatings] = useState({});
  const [priceRange, setPriceRange] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const { searchedProductsList } = useCartStore();

  const { loadProducts, productList, loadCategory, categoryList } = useCartStore();
  
    // Load products and categories once on mount
    useEffect(() => {
      loadProducts();
      loadCategory();
    }, []);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const productsToUse = searchedProductsList.length < 1 ? productList : searchedProductsList;

  useEffect(() => {
    const maxProductPrice = Math.max(...productsToUse.map(p => p.price));
    setMaxPrice(maxProductPrice + 10);
    setPriceRange(0);
  }, [productsToUse]);

  useEffect(() => {
    filterProducts();
  }, [checkedCategories, priceRange, checkedRatings, sortOption, searchedProductsList,productList]);

  const handleCheckboxChange = (categoryName) => {
    setCheckedCategories((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  const handleRatingChange = (rating) => {
    setCheckedRatings((prev) => ({
      ...prev,
      [rating]: !prev[rating],
    }));
  };

  const handlePriceChange = (e) => {
    setPriceRange(Number(e.target.value));
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const filterProducts = () => {
    let filtered = productsToUse.filter(product => product.price >= priceRange);

    const selectedCategories = Object.keys(checkedCategories).filter(key => checkedCategories[key]);
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product =>
        selectedCategories.includes(product.category) ||
        selectedCategories.includes(product.subCate) ||
        selectedCategories.includes(product.generalCategory)
      );
    }

    const selectedRatings = Object.keys(checkedRatings).filter(key => checkedRatings[key]);
    if (selectedRatings.length > 0) {
      filtered = filtered.filter(product =>
        selectedRatings.some(rating => {
          const min = Number(rating) - 0.5;
          const max = Number(rating) + 0.4;
          return product.starRating >= min && product.starRating <= max;
        })
      );
    }

    if (sortOption === "priceLowHigh") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === "priceHighLow") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortOption === "ratingHighLow") {
      filtered.sort((a, b) => b.starRating - a.starRating);
    } else if (sortOption === "ratingLowHigh") {
      filtered.sort((a, b) => a.starRating - b.starRating);
    }

    setFilteredProducts(filtered);
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} color="#FFD700" />
        ))}
        {hasHalfStar && <FaStarHalfAlt color="#FFD700" />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={`empty-${i}`} color="#FFD700" />
        ))}
      </>
    );
  };

  const { loadCart } = useCartStore();

  useEffect(() => {
    loadCart();
  }, []);

  const toggleFilterModal = () => setIsFilterModalOpen(prev => !prev);
  const closeFilterModal = () => setIsFilterModalOpen(false);

  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <Navbar />

      <div className='cateProducts'>
        <div className="cateProducts-Left">
          {/* PRICE FILTER */}
          <div className="cateProducts-Category">
            <div className="header">Filter By Price</div>
            <div className="price-filter">
              <input type="range" min={0} max={maxPrice} value={priceRange} onChange={handlePriceChange} className="slider" />
              <div className="price-values">
                <span>Min: GHC{priceRange.toFixed(2)}</span>
                <span>Max: GHC{maxPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>


        </div>

        <div className="cateProducts-Right">
          <div className='sortController'>
            <div>
              {filteredProducts.length} {filteredProducts.length === 1 ? "Product" : "Products"} Found
            </div>
            
          </div>

          <RowProduct product={filteredProducts} />
        </div>

        {/* Floating Filter Button */}
        <div className="floating-filter-button" onClick={toggleFilterModal}>
          <FaFilter />
        </div>

        {/* Mobile Filter Modal */}
        {isFilterModalOpen && (
          <div className="filter-modal-overlay">
            <div className="filter-modal-content">
              <button className="close-modal" style={{color:"red"}} onClick={closeFilterModal}>X</button>

              <div className="modal-filters">
                

                <div className="header">Filter By Price</div>
                <input type="range" min={0} max={maxPrice} value={priceRange} onChange={handlePriceChange} className="slider" />
                <div className="price-values">
                  <span>Min: GHC{priceRange.toFixed(2)}</span>
                  <span>Max: GHC{maxPrice.toFixed(2)}</span>
                </div>


              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
      <LastFooter />
    </div>
  );
};

export default SearchProducts;
