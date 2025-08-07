"use client"
import React, { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { AES, enc } from 'crypto-js';
import { useCartStore } from '@/Components/CartStore';
import './Navbar.css'

// Icons
import { GrFavorite } from "react-icons/gr";
import { IoIosSearch, IoMdArrowDropdown, IoMdPerson } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi";
import { RiMenu2Fill } from "react-icons/ri";
import { IoHome, IoRocketOutline } from "react-icons/io5";
import { LuClipboardCheck } from "react-icons/lu";
import { FiShoppingCart } from 'react-icons/fi';

// Components
import CateMsg from '@/Components/Message/CateMsg';
import CartMsg from '@/Components/Message/CartMsg';
import FooterNavCard from '@/Components/Message/FooterNavCard';
import Wishlist from '@/Components/Message/Wishlist';

// Constants
import { apiMedia, apiServer, Categories } from '@/Constants/data';

const Navbar = () => {
  // State management
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [hoveredSubcategory, setHoveredSubcategory] = useState(null);
  const [isCategoryHovered, setIsCategoryHovered] = useState(false);
  const [msgOpen, setmsgOpen] = useState(false);
  const [cartOpen, setcartOpen] = useState(false);
  const [toggleNavFooter, setToggleNavFooter] = useState(false);
  const [searchCardOpen, setsearchCardOpen] = useState(false);
  const [WishlistCardOpen, setWishlistCardOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [person, setPerson] = useState({});
  const [imageLoaded, setImageLoaded] = useState(false);

  // Hooks and store
  const router = useRouter();
  const { 
    loadProducts, 
    productList, 
    loadCategory, 
    categoryList,
    cart, 
    loadCart,
    setSearchTerm, 
    searchedProducts,
    saveCart,
    addToCart,
    deleteFromCart,
    updateCartQuantity,
    clearCart, 
    wishlist, 
    addToWishList, 
    deleteFromWishlist, 
    loadWishlist 
  } = useCartStore();

  // Effects
  useEffect(() => {
    loadProducts();
    loadCategory();
    loadCart();
    loadWishlist();
  }, []);

  useEffect(() => {
    try {
      const encryptedData = sessionStorage.getItem("userDataEnc");
      const encryptionKey = '$2a$11$3lkLrAOuSzClGFmbuEAYJeueRET0ujZB2TkY9R/E/7J1Rr2u522CK';
      const decryptedData = AES.decrypt(encryptedData, encryptionKey);
      const decryptedString = decryptedData.toString(enc.Utf8);
      const parsedData = JSON.parse(decryptedString);
      setUserInfo(parsedData);
    } catch (error) {
      console.error("Error decrypting user data:", error);
    }
  }, []);

  useEffect(() => {
    const formData = new FormData();
    fetch(apiServer + "WebsiteDetails", {
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(data => setPerson(data))
      .catch(err => console.error(err));
  }, []);

  // Handlers
  const navigate = (path) => {
    router.push(path);
  };

  const openCategoryModal = (category) => {
    setSelectedCategory(category);
    setHoveredSubcategory(null);
  };

  const closeModal = () => {
    setSelectedCategory(null);
    setHoveredSubcategory(null);
  };

  const theMsg = () => {
    setmsgOpen(!msgOpen);
    toggleZIndex();
  };

  const theCart = () => {
    setcartOpen(!cartOpen);
    toggleZIndex();
  };

  const toggleZIndex = () => {
    setToggleNavFooter(msgOpen || cartOpen);
  };

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    searchedProducts();
  };

  const theSearchCard = () => {
    setsearchCardOpen(!searchCardOpen);
    toggleZIndex();
  };

  const theWishlistCard = () => {
    setWishlistCardOpen(!WishlistCardOpen);
    toggleZIndex();
  };

  return (
    <div>
      <div className={`navbar ${isCategoryHovered ? "navbar-long" : ""}`}>
        {/* Modals */}
        <CateMsg mobileOpen={msgOpen} toggler={theMsg} />
        <CartMsg mobileOpen={cartOpen} toggler={theCart} />
        <FooterNavCard mobileOpen={searchCardOpen} toggler={theSearchCard} />
        <Wishlist mobileOpen={WishlistCardOpen} toggler={theWishlistCard} />

        <div className="section-2">
          <div 
            className="icon viewer" 
            style={{ backgroundColor: "white" }} 
            onClick={theMsg}
          >
            <RiMenu2Fill size={25} />
          </div>
          <img
            src={"/randa.jpg"}
            alt="Logo"
            className={`${!imageLoaded ? 'invisible' : ''}`}
            onClick={() => navigate('/')}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageLoaded(false)}
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              color: "white",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              fontSize: "50px",
              fontWeight: "bold"
            }}
          />

          <div className="search remover" onClick={() => navigate("/search")}>
            <input
              type="text"
              placeholder="What do you want?"
              className="search-input"
              onChange={handleSearch}
            />
            <div className="search-icon">
              <IoIosSearch color="#000000" size={20} />
            </div>
          </div>

          <div className="user-actions">
            <div 
              className="user-profile remover" 
              onClick={() => userInfo.UserId ? navigate("/profile") : navigate("/")}
            >
              <div className="icon">
                <IoMdPerson size={20} />
              </div>
              <div className="user-info">
                <div>{userInfo.FullName}</div>
                <div>{userInfo.Email}</div>
              </div>
            </div>

            <div 
              className="icon" 
              style={{ backgroundColor: "white" }} 
              onClick={theCart}
            >
              <GiShoppingCart size={25} />
              <span style={{ color: "red", fontFamily: "Hydot-Bold" }}>
                {cart.length}
              </span>
            </div>
          </div>
        </div>
        <hr />
      </div>

      <div className={`navbar-Footer`}>
        <div 
          style={{ 
            display: "flex", 
            alignItems: "center", 
            flexDirection: 'column', 
            gap: '5px', 
            paddingLeft: "10px" 
          }} 
          onClick={() => navigate("/")}
        >
          <IoHome size={22}/>
          <div style={{ fontSize: "0.8rem" }}>Home</div>
        </div>

        <div 
          style={{ 
            display: "flex", 
            alignItems: "center", 
            flexDirection: 'column', 
            gap: '5px', 
            paddingLeft: "10px" 
          }} 
          onClick={theSearchCard}
        >
          <IoIosSearch size={22}/>
          <div style={{ fontSize: "0.8rem" }}>Search</div>
        </div>

        <div 
          style={{ 
            display: "flex", 
            alignItems: "center", 
            flexDirection: 'column', 
            gap: '5px', 
            paddingLeft: "10px" 
          }} 
          onClick={() => navigate("/favourite")}
        >
          <GrFavorite size={22}/>
          <div style={{ fontSize: "0.8rem" }}>Wishlist</div>
        </div>

        <div 
          style={{ 
            display: "flex", 
            alignItems: "center", 
            flexDirection: 'column', 
            gap: '5px', 
            paddingLeft: "10px" 
          }} 
          onClick={() => navigate("/myOrders")}
        >
          <LuClipboardCheck size={22}/>
          <div style={{ fontSize: "0.8rem" }}>Orders</div>
        </div>

        <div 
          style={{ 
            display: "flex", 
            alignItems: "center", 
            flexDirection: 'column', 
            gap: '5px', 
            paddingLeft: "10px" 
          }} 
          onClick={() => userInfo.UserId ? navigate("/profile") : navigate("/")}
        >
          <IoMdPerson size={22}/>
          <div style={{ fontSize: "0.8rem" }}>Account</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;