"use client";
import React, { useState, useEffect } from 'react';
import './Hero.css';
import "@/Components/Loader.css"; // Your shimmer/loader styles
import { apiMedia, apiServer } from '@/Constants/data';

const Hero = () => {
  const [person, setPerson] = useState(null);
  const [slides, setSlides] = useState([]);
  const [current, setCurrent] = useState(0);

  // Fetch person object from API
  useEffect(() => {
    const formData = new FormData();

    fetch(apiServer + "WebsiteDetails", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        setPerson(data);

        try {
          const parsedHeroList = JSON.parse(data.HeroList || '[]');
          const formattedSlides = parsedHeroList.map((img, idx) => ({
            id: idx + 1,
            image: apiMedia + img,
          }));
          setSlides(formattedSlides);
        } catch (err) {
          console.error("Error parsing HeroList:", err);
          setSlides([]);
        }
      })
      .catch((err) => console.error("Error fetching website details:", err));
  }, []);

  // Auto-slide
  useEffect(() => {
    if (slides.length > 0) {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [slides]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Show loader if person not yet loaded or no slides
  if (!person || slides.length === 0) {
    return (
      <div className="hero-container shimmer hero-skeleton-image1">
        <div className="normal-loader__card hero-loader-skeleton">
         
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
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="slide-image"
             
            />
          )}
        </div>
      ))}
      <button className="left-arrow" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="right-arrow" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Hero;
