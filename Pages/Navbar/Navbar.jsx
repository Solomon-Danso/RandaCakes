"use client"
import React, { useState, useRef, useEffect } from 'react'
import './Navbar.css'
import Logo from "@/public/assets/images/logo.png"
import { GrFavorite } from "react-icons/gr";
import { IoIosSearch, IoMdArrowDropdown, IoMdPerson } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi";
import { RiMenu2Fill } from "react-icons/ri";
import { Categories } from '@/Constants/data';
import { IoHome, IoRocketOutline } from "react-icons/io5";
import CateMsg from '@/Components/Message/CateMsg';
import CartMsg from '@/Components/Message/CartMsg';
import { LuClipboardCheck } from "react-icons/lu";
import { useRouter } from 'next/navigation';
import { FaFilter } from 'react-icons/fa';
import CryptoJS from 'crypto-js';
import { useCartStore } from '@/Components/CartStore';
import FooterNavCard from '@/Components/Message/FooterNavCard';
import Wishlist from '@/Components/Message/Wishlist';

const Navbar = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [hoveredSubcategory, setHoveredSubcategory] = useState(null);
  const [isCategoryHovered, setIsCategoryHovered] = useState(false);

  const { loadProducts, productList, loadCategory, categoryList } = useCartStore();
  
    useEffect(() => {
      loadProducts(); // Initial fetch on mount
      loadCategory();
    }, []);

const router = useRouter();
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

  const [msgOpen, setmsgOpen] = useState(false)
  const theMsg = () => {
    setmsgOpen(!msgOpen);
    toggleZIndex()
  };

  const [cartOpen, setcartOpen] = useState(false)
  const theCart = () => {
    setcartOpen(!cartOpen);
    toggleZIndex()
  };

  const [toggleNavFooter, setToggleNavFooter] = useState(false)
  const toggleZIndex = () =>{
    if(msgOpen == true || cartOpen ==true){
      setToggleNavFooter(true)
    }
    else{
      setToggleNavFooter(false)
    }
  }
const { cart, loadCart } = useCartStore();

useEffect(() => {
  loadCart();
}, []);

const { setSearchTerm, searchedProducts } = useCartStore();

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    searchedProducts(); // trigger the filtering based on the current search term
  };


  const [searchCardOpen, setsearchCardOpen] = useState(false)
  const theSearchCard = () => {
    setsearchCardOpen(!searchCardOpen);
    toggleZIndex()
  };

  const [WishlistCardOpen, setWishlistCardOpen] = useState(false)
  const theWishlistCard = () => {
    setWishlistCardOpen(!WishlistCardOpen);
    toggleZIndex()
  };


const {saveCart,addToCart,deleteFromCart,updateCartQuantity,clearCart, wishlist, addToWishList, deleteFromWishlist, loadWishlist } = useCartStore();

  useEffect(() => {
    loadCart();
    loadWishlist()
  }, []);

  
  return (
<div>

<div className={`navbar ${isCategoryHovered ? "navbar-long" : ""}`}>
      
      <CateMsg mobileOpen={msgOpen} toggler={()=>{theMsg()}}/>
      <CartMsg mobileOpen={cartOpen} toggler={()=>{theCart()}}/>
      <FooterNavCard mobileOpen={searchCardOpen} toggler={()=>{theSearchCard()}}/>
      <Wishlist mobileOpen={WishlistCardOpen} toggler={()=>{theWishlistCard()}}/>

     

      <div className="section-1">
        <div>Get up to 50% off new season styles, limited time only</div>
        <div className="section-1-links">
          <div>Help Center</div>
          <div>Order Tracking</div>
        </div>
      </div>
      

      <div className="section-2">
      <div className="icon viewer" style={{ backgroundColor: "white" }} onClick={()=>theMsg()}> <RiMenu2Fill size={25} /> </div>

        <img
          src={Logo.src}
          alt="Logo"
          className='logo'
          onClick={() => navigate('/')}
        />
        
       <div className="search remover" onClick={()=>navigate("/search")}>
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
          <div className="user-profile remover" onClick={()=>navigate("/profile")}>
            <div className="icon"> <IoMdPerson size={20} /> </div>
            <div className="user-info">
              <div>Solomon Danso</div>
              <div>solomondanso2023@gmail.com</div>
            </div>
          </div>

          <div className="icon remover" style={{ backgroundColor: "white" }} onClick={()=>navigate("/favourite")}> <GrFavorite size={25} /> <span style={{color:"red", fontFamily:"Hydot-Bold"}}>{wishlist.length}</span>
          </div>
          <div className="icon" style={{ backgroundColor: "white" }} onClick={()=>theCart()}> 
            <GiShoppingCart size={25} /> 
            <span style={{color:"red", fontFamily:"Hydot-Bold"}}>{cart.length}</span>
            
            </div>
        </div>
      </div>
      <hr />

      <div className="section-3">

        <div className="shop-by-category remover" onClick={()=>theMsg()}>
          <RiMenu2Fill size={20} />
          <div className="shop-by-category-text">
            Shop By Categories
          </div>
          <IoMdArrowDropdown />
        </div>

        <div className="categories-container">
          {categoryList.slice(0, 7).map((category) => (
            <div
              key={category.id}
              className="category-item-wrapper"
              onMouseEnter={() => 
              {setSelectedCategory(category);
              setIsCategoryHovered(true)}
              }
              onMouseLeave={() => {
                setSelectedCategory(null);
                setHoveredSubcategory(null);
                setIsCategoryHovered(false);
              }}
              >
              <div className="category-item" onClick={()=>navigate(`/products?category=${category.name}`)}
              >
                {category.name}
              </div>
            
              {/* Dropdown Modal for Each Category */}
              {selectedCategory?.id === category.id && (
                <div className="dropdown-modal">
                  <div className="dropdown-body">
                    <div className="modal-subcategories">
                      <h4>Subcategories</h4>
                      <ul>
                        {category.subcategories.map((subcategory) => (
                          <li
                            key={subcategory.id}
                            className={hoveredSubcategory?.name === subcategory.name ? "active" : ""}
                            onMouseEnter={() => setHoveredSubcategory(subcategory)}
                            onClick={() => navigate(`/products?category=${category.name}&subcategory=${subcategory.name}`)}
  >
                            {subcategory.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="modal-general-categories">
                      <h4>
                        {hoveredSubcategory
                          ? `${category.name} > ${hoveredSubcategory.name}`
                          : `Popular in ${category.name}`}
                      </h4>
                      <div className="general-categories-grid">
                        {(hoveredSubcategory
                          ? category.generalCategory.filter(item => item.subCate === hoveredSubcategory.name)
                          : category.generalCategory
                        ).map((item, index) => (
                          <div key={index} className="general-category-item" onClick={() => navigate(`/products?category=${category.name}&subcategory=${hoveredSubcategory.name}&generalCategory=${item.title}`)}>
                          
                            {item.title}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <hr />

        <div style={{ display: "flex", alignItems: "center", flexDirection:'row', gap:'5px', paddingLeft:"10px"}}>

        <IoRocketOutline />
        <div style={{ whiteSpace: "nowrap"}}>Free International Delivery</div>

        </div>



      </div>






</div>


<div className={`navbar-Footer`}>

<div style={{ display: "flex", alignItems: "center", flexDirection:'column', gap:'5px', paddingLeft:"10px"}} onClick={()=>{navigate("/")}}>
<IoHome size={22}/>
<div style={{fontSize:"0.8rem"}}>Home</div>

</div>




<div style={{ display: "flex", alignItems: "center", flexDirection:'column', gap:'5px', paddingLeft:"10px"}} onClick={()=>theSearchCard()}>
<IoIosSearch size={22}/>
<div style={{fontSize:"0.8rem"}}>Search</div>

</div>

<div style={{ display: "flex", alignItems: "center", flexDirection:'column', gap:'5px', paddingLeft:"10px"}} onClick={()=>navigate("/favourite")}>
<GrFavorite size={22}/>
<div style={{fontSize:"0.8rem"}}>Wishlist</div>

</div>

<div style={{ display: "flex", alignItems: "center", flexDirection:'column', gap:'5px', paddingLeft:"10px"}} onClick={()=>navigate("/myOrders")}>
<LuClipboardCheck size={22}/>
<div style={{fontSize:"0.8rem"}}>Orders</div>

</div>


<div style={{ display: "flex", alignItems: "center", flexDirection:'column', gap:'5px', paddingLeft:"10px"}} onClick={()=>navigate("/profile")}>
<IoMdPerson size={22}/>
<div style={{fontSize:"0.8rem"}}>Account</div>

</div>




</div>


</div>
)
}

export default Navbar;