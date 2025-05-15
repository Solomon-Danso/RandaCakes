"use client";
import React, { useState, useEffect } from 'react';
import './Hero.css';
import "@/Components/Loader.css"; // Uses your existing shimmer styles

const Hero = () => {
  const [slides, setSlides] = useState([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchSlides = async () => {
    // Simulated API delay
    setTimeout(() => {
      setSlides([
        { id: 1, image: "/assets/images/1.jpg" },
        { id: 2, image: "/assets/images/2.jpg" },
        { id: 3, image: "/assets/images/3.jpg" },
        { id: 4, image: "/assets/images/4.jpg" },
      ]);
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    fetchSlides();
  }, []);

  useEffect(() => {
    if (!loading) {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [loading, current, slides.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  if (loading) {
    return (
      <div className="hero-container">
        <div className="normal-loader__card hero-loader-skeleton">
          <div className="shimmer hero-skeleton-image"></div>
        </div>
      </div>
    );
  }
  

  return (
    <div className="hero-container">
      {slides.map((slide, index) => (
        <div
          className={`slide ${index === current ? 'active' : ''}`}
          key={slide.id}
        >
          {index === current && (
            <img src={slide.image} alt={`Slide ${slide.id}`} className="slide-image" />
          )}
        </div>
      ))}
      <button className="left-arrow" onClick={prevSlide}>&#10094;</button>
      <button className="right-arrow" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default Hero;
