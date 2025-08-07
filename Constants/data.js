export const apiServer = "";
export const apiMedia = ""; //Live 
export const apiAInML = ""
 




const isLocalhost = typeof window !== "undefined" && window.location.hostname != "localhost";
export const ShortName = ""

import Hb1 from "@/public/assets/images/hb-1.png"
import Hb2 from "@/public/assets/images/hb-2.png"
import Hb3 from "@/public/assets/images/hb-3.png"
import Hb4 from "@/public/assets/images/hb-4.png"
import Hb5 from "@/public/assets/images/hb-5.png"
import Hb6 from "@/public/assets/images/hb-6.png"
import Hb7 from "@/public/assets/images/hb-7.png"
import Hb8 from "@/public/assets/images/hb-8.png"

import Hp1 from "@/public/assets/images/hp-1.jpg"
import Hp2 from "@/public/assets/images/hp-2.webp"
import Hp3 from "@/public/assets/images/hp-3.jpg"
import Hp4 from "@/public/assets/images/hp-4.webp"
import Hp5 from "@/public/assets/images/hp-5.webp"
import Hp6 from "@/public/assets/images/hp-6.webp"
import Hp7 from "@/public/assets/images/hp-7.jpg"
import Hp8 from "@/public/assets/images/hp-8.jpeg"

import Ban1 from "@/public/assets/images/banner1.webp"
import Ban2 from "@/public/assets/images/banner2.webp"
import Ban3 from "@/public/assets/images/banner3.webp"
import Ban4 from "@/public/assets/images/banner4.webp"

import { TbTruckDelivery } from "react-icons/tb";
import { PiKeyReturnLight } from "react-icons/pi";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaFacebook, FaGift, FaInstagramSquare, FaShoppingBag, FaTiktok } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { IoLogoYoutube } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { CiCreditCard1, CiLocationOn } from "react-icons/ci";
import { FiHeart } from "react-icons/fi";


export const Categories = [
    {
        id: 1,
        name: "Electronics",
        image: Hb1.src,
        subcategories: [
            { id: 1, name: "Mobile Phones" },
            { id: 2, name: "Laptops" },
            { id: 3, name: "Tablets" },
            { id: 4, name: "Cameras" },
            { id: 5, name: "Headphones" },
        ],
        generalCategory:[
            {subCate:"Mobile Phones", title: "Apple"},
            {subCate:"Mobile Phones", title: "Samsung"},
            {subCate:"Mobile Phones", title: "Tecno"},
            {subCate:"Mobile Phones", title: "Infinix"},
            {subCate:"Mobile Phones", title: "Nokia"},
            {subCate:"Laptops", title: "MacBook"},
            {subCate:"Laptops", title: "Dell"},
            {subCate:"Laptops", title: "HP"},
            {subCate:"Laptops", title: "Lenovo"},
            {subCate:"Tablets", title: "Sony"},
            {subCate:"Tablets", title: "Samsung"},
            {subCate:"Tablets", title: "Apple"},
        ]
    },
    {
        id: 2,
        name: "Fashion",
        image: Hb2.src,
        subcategories: [
            { id: 1, name: "Men" },
            { id: 2, name: "Women" },
            { id: 3, name: "Kids" },
        ],
        generalCategory: [
            {subCate: "Men", title: "T-Shirts"},
            {subCate: "Men", title: "Jeans"},
            {subCate: "Women", title: "Dresses"},
            {subCate: "Women", title: "Handbags"},
            {subCate: "Kids", title: "Tops"},
            {subCate: "Kids", title: "Shorts"},
        ]
    },
    {
        id: 3,
        name: "Kitchen",
        image: Hb3.src,
        subcategories: [
            { id: 1, name: "Appliances" },
            { id: 2, name: "Furniture" },
            { id: 3, name: "Decor" },
        ],
        generalCategory: [
            {subCate: "Appliances", title: "Blenders"},
            {subCate: "Appliances", title: "Microwaves"},
            {subCate: "Furniture", title: "Sofas"},
            {subCate: "Furniture", title: "Beds"},
            {subCate: "Decor", title: "Curtains"},
            {subCate: "Decor", title: "Wall Art"},
        ]
    },
    {
        id: 4,
        name: "Health",
        image: Hb4.src,
        subcategories: [
            { id: 1, name: "Skincare" },
            { id: 2, name: "Makeup" },
            { id: 3, name: "Haircare" },
        ],
        generalCategory: [
            {subCate: "Skincare", title: "Moisturizers"},
            {subCate: "Skincare", title: "Cleansers"},
            {subCate: "Makeup", title: "Lipsticks"},
            {subCate: "Makeup", title: "Foundations"},
            {subCate: "Haircare", title: "Shampoos"},
            {subCate: "Haircare", title: "Conditioners"},
        ]
    },
    {
        id: 5,
        name: "Sports",
        image: Hb5.src,
        subcategories: [
            { id: 1, name: "Fitness" },
            { id: 2, name: "Cycling" },
            { id: 3, name: "Camping" },
        ],
        generalCategory: [
            {subCate: "Fitness", title: "Treadmills"},
            {subCate: "Fitness", title: "Dumbbells"},
            {subCate: "Cycling", title: "Mountain Bikes"},
            {subCate: "Cycling", title: "Helmets"},
            {subCate: "Camping", title: "Tents"},
            {subCate: "Camping", title: "Sleeping Bags"},
        ]
    },
    {
        id: 6,
        name: "Stationery",
        image: Hb6.src,
        subcategories: [
            { id: 1, name: "Fiction" },
            { id: 2, name: "Non-fiction" },
            { id: 3, name: "Stationery" },
        ],
        generalCategory: [
            {subCate: "Fiction", title: "Novels"},
            {subCate: "Fiction", title: "Comics"},
            {subCate: "Non-fiction", title: "Biographies"},
            {subCate: "Non-fiction", title: "Self-help"},
            {subCate: "Stationery", title: "Pens"},
            {subCate: "Stationery", title: "Notebooks"},
        ]
    },
    {
        id: 7,
        name: "Games",
        image: Hb7.src,
        subcategories: [
            { id: 1, name: "Educational" },
            { id: 2, name: "Action Figures" },
            { id: 3, name: "Board Games" },
        ],
        generalCategory: [
            {subCate: "Educational", title: "Puzzle Toys"},
            {subCate: "Educational", title: "Math Games"},
            {subCate: "Action Figures", title: "Superheroes"},
            {subCate: "Action Figures", title: "Transformers"},
            {subCate: "Board Games", title: "Chess"},
            {subCate: "Board Games", title: "Monopoly"},
        ]
    },
    {
        id: 8,
        name: "Automotive",
        image: Hb8.src,
        subcategories: [
            { id: 1, name: "Car Accessories" },
            { id: 2, name: "Motorbike Accessories" },
            { id: 3, name: "Tools & Equipment" },
        ],
        generalCategory: [
            {subCate: "Car Accessories", title: "Seat Covers"},
            {subCate: "Car Accessories", title: "Air Fresheners"},
            {subCate: "Motorbike Accessories", title: "Helmets"},
            {subCate: "Motorbike Accessories", title: "Gloves"},
            {subCate: "Tools & Equipment", title: "Wrenches"},
            {subCate: "Tools & Equipment", title: "Jacks"},
        ]
    },
   
   
];


export const DummyProducts = [
  {
    mainPicture: Hp1.src,
    productId: 1,
    secondPicture: Hp2.src,
    subPictures: [Hp3.src, Hp4.src, Hp5.src, Hp6.src, Hp7.src],
    title: "HydroFit Pro Bottle",
    description: "Insulated stainless steel bottle for daily hydration.",
    discountPercent: 10,
    category: "Sports",
    subCate:"Fitness",
    generalCategory:"Treadmills",
    price:78.99,
    quantity:40,
    size:["S","M","L"],
    starRating: 1.2,
  },
  {
    mainPicture: Hp2.src,
    productId: 2,
    secondPicture: Hp3.src,
    subPictures: [Hp1.src],
    title: "EcoGym Towel",
    description: "Sweat-absorbent and quick-dry microfiber towel.",
    discountPercent: 15,
     category: "Health",
  price: 35.69,
    starRating: 4.5,
  },
  
  {
    mainPicture: Hp3.src,
    productId: 3,
    secondPicture: Hp4.src,
    subPictures: [Hp2.src, Hp5.src,Hp2.src, Hp5.src, Hp6.src],
    title: "Smart Water Tracker",
    description: "Tracks your daily water intake via mobile app. Tracks your daily water intake via mobile app. Tracks your daily water intake via mobile app. Tracks your daily water intake via mobile app. Tracks your daily water intake via mobile app. Tracks your daily water intake via mobile app. Tracks your daily water intake via mobile app. Tracks your daily water intake via mobile app.",
    discountPercent: 20,
    category: "Electronics",
    price: 29.99,
    starRating: 3.9,
    quantity:20,
    size:["S","M","L"],
  },
  {
    mainPicture: Hp4.src,
    productId: 4,
    secondPicture: Hp1.src,
    subPictures: [Hp5.src],
    title: "Hydration Reminder Band",
    description: "Vibrates every hour to remind you to drink water.",
    discountPercent: 5,
    category: "Electronics",
    price: 29.99,
    starRating: 4.7,
    quantity:20,
  },
  {
    mainPicture: Hp5.src,
    productId: 5,
    secondPicture: Hp6.src,
    subPictures: [Hp1.src, Hp2.src, Hp3.src],
    title: "Hydrate+ Shaker",
    description: "Shaker bottle with smart blend technology.",
    discountPercent: 12,
    category: "Kitchen",
    price: 43.90,
    starRating: 4.1,
  },
  {
    mainPicture: Hp6.src,
    productId: 6,
    secondPicture: Hp2.src,
    subPictures: [Hp3.src, Hp4.src, Hp5.src],
    title: "HydroSmart Jug",
    description: "Jug with time markers and Bluetooth reminders.",
    discountPercent: 25,
    category: "Kitchen",
    price: 43.90,
    starRating: 4.8,
  },
  {
    mainPicture: Hp7.src,
    productId: 7,
    secondPicture: Hp1.src,
    subPictures: [Hp3.src],
    title: "AquaStyle Cap",
    description: "Stylish cap with built-in water mister.",
    discountPercent: 18,
     category: "Fashion",
  price: 120.90,
    starRating: 4.0,
  },
  {
    mainPicture: Hp8.src,
    productId: 8,
    secondPicture: Hp3.src,
    subPictures: [Hp1.src, Hp2.src],
    title: "HydroFlash Cup",
    description: "Double-walled thermal cup for hot/cold drinks.",
    discountPercent: 8,
     category: "Kitchen",
  price: 43.90,
    starRating: 3.7,
  },
  {
    mainPicture: Hp2.src,
    productId: 9,
    secondPicture: Hp5.src,
    subPictures: [Hp6.src],
    title: "Active Water Belt",
    description: "Holds water bottles for runners.",
    discountPercent: 10,
    category: "Sports",
    price:178.99,
    quantity:40,
    size:["S","M","L"],
    starRating: 2.6,
  },
  {
    mainPicture: Hp3.src,
    productId: 10,
    secondPicture: Hp7.src,
    subPictures: [Hp1.src, Hp2.src, Hp4.src],
    title: "Hydration Tracking Mat",
    description: "Yoga mat with hydration tracking sensors.",
    discountPercent: 22,
     category: "Health",
  price: 35.69,
    starRating: 4.3,
  },
  {
    mainPicture: Hp4.src,
    productId: 11,
    secondPicture: Hp6.src,
    subPictures: [Hp7.src, Hp8.src],
    title: "Smart Mist Fan",
    description: "Personal fan with hydration mist feature.",
    discountPercent: 30,
    category: "Electronics",
    price: 29.99,
    starRating: 4.4,
    quantity:20,
  },
  {
    mainPicture: Hp5.src,
    productId: 12,
    secondPicture: Hp1.src,
    subPictures: [Hp2.src, Hp3.src],
    title: "Cycling Helmet",
    description: "Lightweight and aerodynamic helmet for safety.",
    discountPercent: 20,
    category: "Sports",
    price:278.99,
    quantity:40,
    size:["S","M","L"],
    starRating: 3.5,
  },
  // From here down, generate more variations
  {
    mainPicture: Hp6.src,
    productId: 13,
    secondPicture: Hp7.src,
    subPictures: [Hp1.src, Hp4.src],
    title: "Portable Blender",
    description: "USB-powered blender for on-the-go smoothies.",
    discountPercent: 18,
     category: "Kitchen",
  price: 43.90,
    starRating: 4.0,
  },
  {
    mainPicture: Hp7.src,
    productId: 14,
    secondPicture: Hp3.src,
    subPictures: [Hp5.src],
    title: "Wireless Keyboard",
    description: "Ergonomic keyboard with silent typing.",
    discountPercent: 25,
    category: "Electronics",
    price: 29.99,
    starRating: 4.6,
    quantity:20,
  },
  {
    mainPicture: Hp8.src,
    productId: 15,
    secondPicture: Hp1.src,
    subPictures: [Hp3.src, Hp6.src],
    title: "Gaming Mouse",
    description: "High DPI customizable RGB mouse.",
    discountPercent: 12,
     category: "Games",
  price: 67.98,
    starRating: 4.3,
  },
  {
    mainPicture: Hp1.src,
    productId: 16,
    secondPicture: Hp2.src,
    subPictures: [Hp4.src],
    title: "Notebook Set",
    description: "Premium A5 notebooks with smooth paper.",
    discountPercent: 10,
     category: "Stationery",
  price: 12.54,
    starRating: 4.1,
  },
  {
    mainPicture: Hp2.src,
    productId: 17,
    secondPicture: Hp3.src,
    subPictures: [Hp6.src, Hp8.src],
    title: "Office Pen Set",
    description: "Metallic gel pens for professional use.",
    discountPercent: 8,
     category: "Stationery",
  price: 12.54,
    starRating: 4.5,
  },
  {
    mainPicture: Hp3.src,
    productId: 18,
    secondPicture: Hp4.src,
    subPictures: [Hp1.src, Hp5.src],
    title: "Car Vacuum Cleaner",
    description: "Compact and powerful cleaner for car interiors.",
    discountPercent: 20,
     category: "Automotive",
  price: 98.54,
    starRating: 4.2,
  },
  {
    mainPicture: Hp4.src,
    productId: 19,
    secondPicture: Hp5.src,
    subPictures: [Hp2.src],
    title: "Bluetooth FM Transmitter",
    description: "Stream music in your car wirelessly.",
    discountPercent: 15,
     category: "Automotive",
  price: 98.54,
    starRating: 4.4,
  },
  {
    mainPicture: Hp5.src,
    productId: 20,
    secondPicture: Hp6.src,
    subPictures: [Hp3.src, Hp7.src],
    title: "Fashion Tote Bag",
    description: "Trendy handbag for everyday use.",
    discountPercent: 18,
     category: "Fashion",
  price: 120.90,
    starRating: 4.3,
  },
  {
    mainPicture: Hp6.src,
    productId: 21,
    secondPicture: Hp7.src,
    subPictures: [Hp4.src, Hp1.src],
    title: "Casual Sneakers",
    description: "Comfortable shoes for daily wear.",
    discountPercent: 20,
     category: "Fashion",
  price: 120.90,
    starRating: 4.6,
  },
  {
    mainPicture: Hp7.src,
    productId: 22,
    secondPicture: Hp8.src,
    subPictures: [Hp1.src, Hp2.src],
    title: "Foldable Headphones",
    description: "Compact design with deep bass sound.",
    discountPercent: 22,
    category: "Electronics",
    price: 29.99,
    starRating: 4.2,
    quantity:20,
  },
  {
    mainPicture: Hp8.src,
    productId: 23,
    secondPicture: Hp1.src,
    subPictures: [Hp3.src],
    title: "Fitness Resistance Bands",
    description: "Multi-strength bands for full-body workouts.",
    discountPercent: 17,
     category: "Health",
  price: 35.69,
    starRating: 4.0,
  },
  {
    mainPicture: Hp1.src,
    productId: 24,
    secondPicture: Hp4.src,
    subPictures: [Hp6.src, Hp7.src],
    title: "Detox Infuser Bottle",
    description: "Fruit infuser bottle for clean hydration.",
    discountPercent: 10,
     category: "Health",
  price: 35.69,
    starRating: 4.3,
  },
  {
    mainPicture: Hp2.src,
    productId: 25,
    secondPicture: Hp5.src,
    subPictures: [Hp8.src, Hp3.src],
    title: "Gamepad Controller",
    description: "Bluetooth controller for console and mobile.",
    discountPercent: 19,
     category: "Games",
  price: 67.98,
    starRating: 4.5,
  },
  {
    mainPicture: Hp3.src,
    productId: 26,
    secondPicture: Hp6.src,
    subPictures: [Hp1.src],
    title: "HydroVibe Speaker",
    description: "Waterproof speaker for poolside music.",
    discountPercent: 14,
    category: "Electronics",
    price: 29.99,
    starRating: 4.1,
    quantity:20,
  },
  {
    mainPicture: Hp4.src,
    productId: 27,
    secondPicture: Hp7.src,
    subPictures: [Hp2.src, Hp5.src],
    title: "Ergonomic Laptop Stand",
    description: "Adjustable stand for improved posture.",
    discountPercent: 12,
     category: "Stationery",
  price: 12.54,
    starRating: 4.4,
  },
  {
    mainPicture: Hp5.src,
    productId: 28,
    secondPicture: Hp8.src,
    subPictures: [Hp6.src],
    title: "Men’s Training Shorts",
    description: "Moisture-wicking shorts with zipper pockets.",
    discountPercent: 20,
     category: "Fashion",
  price: 120.90,
    starRating: 4.6,
  },
  {
    mainPicture: Hp6.src,
    productId: 29,
    secondPicture: Hp1.src,
    subPictures: [Hp7.src, Hp3.src],
    title: "Multipurpose Blender",
    description: "5-speed kitchen blender with glass jar.",
    discountPercent: 25,
     category: "Kitchen",
  price: 43.90,
    starRating: 4.7,
  },
  {
    mainPicture: Hp7.src,
    productId: 30,
    secondPicture: Hp2.src,
    subPictures: [Hp4.src, Hp5.src],
    title: "Drawing Tablet",
    description: "Professional pen tablet with pressure sensitivity.",
    discountPercent: 18,
    category: "Electronics",
    price: 29.99,
    starRating: 4.5,
    quantity:20,
  },
  {
    mainPicture: Hp8.src,
    productId: 31,
    secondPicture: Hp3.src,
    subPictures: [Hp1.src, Hp6.src],
    title: "Waterproof Playing Cards",
    description: "Durable and waterproof plastic cards.",
    discountPercent: 15,
     category: "Games",
  price: 67.98,
    starRating: 4.0,
  },
  {
    mainPicture: Hp1.src,
    productId: 32,
    secondPicture: Hp5.src,
    subPictures: [Hp8.src, Hp3.src],
    title: "Car Seat Organizer",
    description: "Storage for car essentials with cup holders.",
    discountPercent: 22,
     category: "Automotive",
  price: 98.54,
    starRating: 4.3,
  },
  {
    mainPicture: Hp2.src,
    productId: 33,
    secondPicture: Hp6.src,
    subPictures: [Hp7.src],
    title: "Wireless Charger Pad",
    description: "Fast-charging pad for multiple devices.",
    discountPercent: 10,
    category: "Electronics",
    price: 29.99,
    starRating: 4.2,
    quantity:20,
  },
  {
    mainPicture: Hp3.src,
    productId: 34,
    secondPicture: Hp7.src,
    subPictures: [Hp2.src, Hp4.src],
    title: "Minimalist Notebook",
    description: "Clean design, premium build, great for journaling.",
    discountPercent: 8,
     category: "Stationery",
  price: 12.54,
    starRating: 4.4,
  },
  {
    mainPicture: Hp4.src,
    productId: 35,
    secondPicture: Hp8.src,
    subPictures: [Hp1.src, Hp5.src],
    title: "Jump Rope Pro",
    description: "Weighted handles and adjustable length.",
    discountPercent: 20,
    category: "Sports",
    price:378.99,
    quantity:40,
    size:["S","M","L"],
    starRating: 4.6,
  },
  {
    mainPicture: Hp5.src,
    productId: 36,
    secondPicture: Hp1.src,
    subPictures: [Hp6.src],
    title: "Digital Kitchen Scale",
    description: "High-precision scale with LCD display.",
    discountPercent: 17,
     category: "Kitchen",
  price: 43.90,
    starRating: 4.1,
  },
  {
    mainPicture: Hp6.src,
    productId: 37,
    secondPicture: Hp2.src,
    subPictures: [Hp3.src, Hp7.src],
    title: "Car Air Purifier",
    description: "Cleans air inside the vehicle using HEPA filter.",
    discountPercent: 23,
     category: "Automotive",
  price: 98.54,
    starRating: 4.3,
  },
  {
    mainPicture: Hp7.src,
    productId: 38,
    secondPicture: Hp3.src,
    subPictures: [Hp1.src],
    title: "Fitness Tracker Band",
    description: "Tracks steps, heart rate, and hydration.",
    discountPercent: 12,
     category: "Health",
  price: 35.69,
    starRating: 4.4,
  },
  {
    mainPicture: Hp8.src,
    productId: 39,
    secondPicture: Hp4.src,
    subPictures: [Hp6.src],
    title: "Wireless Earbuds",
    description: "Noise-canceling earbuds with mic.",
    discountPercent: 18,
    category: "Electronics",
    price: 29.99,
    starRating: 4.5,
    quantity:20,
    
  },
  {
    mainPicture: Hp1.src,
    productId: 40,
    secondPicture: Hp6.src,
    subPictures: [Hp2.src, Hp5.src],
    title: "Luxury Pen",
    description: "Smooth ink flow and metallic body.",
    discountPercent: 10,
     category: "Stationery",
  price: 12.54,
    starRating: 4.6,
  },
  {
    mainPicture: Hp2.src,
    productId: 41,
    secondPicture: Hp7.src,
    subPictures: [Hp4.src],
    title: "Tabletop Ring Light",
    description: "LED light for photos and video calls.",
    discountPercent: 14,
    category: "Electronics",
    price: 29.99,
    starRating: 4.4,
    quantity:20,
  },
  {
    mainPicture: Hp3.src,
    productId: 42,
    secondPicture: Hp8.src,
    subPictures: [Hp1.src, Hp6.src],
    title: "Women’s Sport Bra",
    description: "Supportive fit with breathable fabric.",
    discountPercent: 20,
     category: "Fashion",
  price: 120.90,
    starRating: 4.3,
  },
  {
    mainPicture: Hp4.src,
    productId: 43,
    secondPicture: Hp1.src,
    subPictures: [Hp2.src],
    title: "Car Phone Holder",
    description: "Mount your phone securely in any car.",
    discountPercent: 15,
     category: "Automotive",
  price: 98.54,
    starRating: 4.5,
  },
  {
    mainPicture: Hp5.src,
    productId: 44,
    secondPicture: Hp2.src,
    subPictures: [Hp3.src, Hp7.src],
    title: "Gaming Headset",
    description: "Surround sound headset with mic.",
    discountPercent: 18,
     category: "Games",
  price: 67.98,
    starRating: 4.6,
  },
  {
    mainPicture: Hp6.src,
    productId: 45,
    secondPicture: Hp3.src,
    subPictures: [Hp4.src],
    title: "Stainless Steel Straw Set",
    description: "Reusable straws with cleaning brush.",
    discountPercent: 8,
     category: "Kitchen",
  price: 43.90,
    starRating: 4.2,
  },
  {
    mainPicture: Hp7.src,
    productId: 46,
    secondPicture: Hp4.src,
    subPictures: [Hp5.src, Hp6.src],
    title: "Smart Notebook",
    description: "Reusable notebook with app sync.",
    discountPercent: 22,
     category: "Stationery",
  price: 12.54,
    starRating: 4.7,
  },
  {
    mainPicture: Hp8.src,
    productId: 47,
    secondPicture: Hp5.src,
    subPictures: [Hp2.src],
    title: "Hydration Tracker Sticker Pack",
    description: "Stickers to label and track your water intake.",
    discountPercent: 5,
     category: "Health",
  price: 35.69,
    starRating: 4.0,
  },
  {
    mainPicture: Hp1.src,
    productId: 48,
    secondPicture: Hp6.src,
    subPictures: [Hp3.src],
    title: "Desk Organizer Tray",
    description: "Neatly arrange your stationery items.",
    discountPercent: 10,
     category: "Stationery",
  price: 12.54,
    starRating: 4.3,
  },
  {
    mainPicture: Hp2.src,
    productId: 49,
    secondPicture: Hp7.src,
    subPictures: [Hp1.src, Hp8.src],
    title: "Car Tire Pressure Gauge",
    description: "Digital reader for tire pressure checks.",
    discountPercent: 12,
     category: "Automotive",
  price: 98.54,
    starRating: 4.2,
  },

  
];


export const BannerImages = [
  Ban1.src,
  Ban2.src,
  Ban3.src,
  Ban4.src,
]
  
export const FooterBannerIcons = [
 {
  icon: <TbTruckDelivery style={{width:"50px", height:"50px"}}/>,
  title: "Faster Delivery",
  description: "Nationwide Delivery",
 },
 {
  icon: <PiKeyReturnLight style={{width:"50px", height:"50px"}} />,
  title: "30 Days Returns",
  description: "For an Exchange Product",
 },

 {
  icon: <RiSecurePaymentFill style={{width:"50px", height:"50px"}} />,
  title: "Secured Payment",
  description: "Payment Cards Accepted",
 },

 {
  icon: <FaGift style={{width:"50px", height:"50px"}} />,
  title: "Special Gifts",
  description: "Our First Product Order",
 },

 {
  icon: <BiSupport style={{width:"50px", height:"50px"}} />,
  title: "Support 24/7",
  description: "Contact us Anytime",
 },





]

export const Socials = [
  {
   icon: <FaFacebook style={{width:"30px", height:"30px"}}/>,
   url: "https://www.facebook.com/",
  },
  {
    icon: <FaInstagramSquare style={{width:"30px", height:"30px"}}/>,
    url: "https://www.facebook.com/",
   },
   {
    icon: <FaTiktok style={{width:"30px", height:"30px"}}/>,
    url: "https://www.facebook.com/",
   },
   
  
 
 
 
 
 
 ]


export const Accounts = [
  {
    icon: <IoPerson />,
    text:"My Profile",
    url:"/profile"
  },

  {
    icon: <FaShoppingBag />,
    text:"My Orders",
    url:"/myOrders"
  },

  
  



]

export const Countries = [
  {
    "name": "Afghanistan",
    "flag": "🇦🇫",
    "code": "AF",
    "dial_code": "+93"
  },
  {
    "name": "Åland Islands",
    "flag": "🇦🇽",
    "code": "AX",
    "dial_code": "+358"
  },
  {
    "name": "Albania",
    "flag": "🇦🇱",
    "code": "AL",
    "dial_code": "+355"
  },
  {
    "name": "Algeria",
    "flag": "🇩🇿",
    "code": "DZ",
    "dial_code": "+213"
  },
  {
    "name": "American Samoa",
    "flag": "🇦🇸",
    "code": "AS",
    "dial_code": "+1684"
  },
  {
    "name": "Andorra",
    "flag": "🇦🇩",
    "code": "AD",
    "dial_code": "+376"
  },
  {
    "name": "Angola",
    "flag": "🇦🇴",
    "code": "AO",
    "dial_code": "+244"
  },
  {
    "name": "Anguilla",
    "flag": "🇦🇮",
    "code": "AI",
    "dial_code": "+1264"
  },
  {
    "name": "Antarctica",
    "flag": "🇦🇶",
    "code": "AQ",
    "dial_code": "+672"
  },
  {
    "name": "Antigua and Barbuda",
    "flag": "🇦🇬",
    "code": "AG",
    "dial_code": "+1268"
  },
  {
    "name": "Argentina",
    "flag": "🇦🇷",
    "code": "AR",
    "dial_code": "+54"
  },
  {
    "name": "Armenia",
    "flag": "🇦🇲",
    "code": "AM",
    "dial_code": "+374"
  },
  {
    "name": "Aruba",
    "flag": "🇦🇼",
    "code": "AW",
    "dial_code": "+297"
  },
  {
    "name": "Australia",
    "flag": "🇦🇺",
    "code": "AU",
    "dial_code": "+61"
  },
  {
    "name": "Austria",
    "flag": "🇦🇹",
    "code": "AT",
    "dial_code": "+43"
  },
  {
    "name": "Azerbaijan",
    "flag": "🇦🇿",
    "code": "AZ",
    "dial_code": "+994"
  },
  {
    "name": "Bahamas",
    "flag": "🇧🇸",
    "code": "BS",
    "dial_code": "+1242"
  },
  {
    "name": "Bahrain",
    "flag": "🇧🇭",
    "code": "BH",
    "dial_code": "+973"
  },
  {
    "name": "Bangladesh",
    "flag": "🇧🇩",
    "code": "BD",
    "dial_code": "+880"
  },
  {
    "name": "Barbados",
    "flag": "🇧🇧",
    "code": "BB",
    "dial_code": "+1246"
  },
  {
    "name": "Belarus",
    "flag": "🇧🇾",
    "code": "BY",
    "dial_code": "+375"
  },
  {
    "name": "Belgium",
    "flag": "🇧🇪",
    "code": "BE",
    "dial_code": "+32"
  },
  {
    "name": "Belize",
    "flag": "🇧🇿",
    "code": "BZ",
    "dial_code": "+501"
  },
  {
    "name": "Benin",
    "flag": "🇧🇯",
    "code": "BJ",
    "dial_code": "+229"
  },
  {
    "name": "Bermuda",
    "flag": "🇧🇲",
    "code": "BM",
    "dial_code": "+1441"
  },
  {
    "name": "Bhutan",
    "flag": "🇧🇹",
    "code": "BT",
    "dial_code": "+975"
  },
  {
    "name": "Bolivia",
    "flag": "🇧🇴",
    "code": "BO",
    "dial_code": "+591"
  },
  {
    "name": "Bosnia and Herzegovina",
    "flag": "🇧🇦",
    "code": "BA",
    "dial_code": "+387"
  },
  {
    "name": "Botswana",
    "flag": "🇧🇼",
    "code": "BW",
    "dial_code": "+267"
  },
  {
    "name": "Bouvet Island",
    "flag": "🇧🇻",
    "code": "BV",
    "dial_code": "+47"
  },
  {
    "name": "Brazil",
    "flag": "🇧🇷",
    "code": "BR",
    "dial_code": "+55"
  },
  {
    "name": "British Indian Ocean Territory",
    "flag": "🇮🇴",
    "code": "IO",
    "dial_code": "+246"
  },
  {
    "name": "Brunei Darussalam",
    "flag": "🇧🇳",
    "code": "BN",
    "dial_code": "+673"
  },
  {
    "name": "Bulgaria",
    "flag": "🇧🇬",
    "code": "BG",
    "dial_code": "+359"
  },
  {
    "name": "Burkina Faso",
    "flag": "🇧🇫",
    "code": "BF",
    "dial_code": "+226"
  },
  {
    "name": "Burundi",
    "flag": "🇧🇮",
    "code": "BI",
    "dial_code": "+257"
  },
  {
    "name": "Cambodia",
    "flag": "🇰🇭",
    "code": "KH",
    "dial_code": "+855"
  },
  {
    "name": "Cameroon",
    "flag": "🇨🇲",
    "code": "CM",
    "dial_code": "+237"
  },
  {
    "name": "Canada",
    "flag": "🇨🇦",
    "code": "CA",
    "dial_code": "+1"
  },
  {
    "name": "Cape Verde",
    "flag": "🇨🇻",
    "code": "CV",
    "dial_code": "+238"
  },
  {
    "name": "Cayman Islands",
    "flag": "🇰🇾",
    "code": "KY",
    "dial_code": "+1345"
  },
  {
    "name": "Central African Republic",
    "flag": "🇨🇫",
    "code": "CF",
    "dial_code": "+236"
  },
  {
    "name": "Chad",
    "flag": "🇹🇩",
    "code": "TD",
    "dial_code": "+235"
  },
  {
    "name": "Chile",
    "flag": "🇨🇱",
    "code": "CL",
    "dial_code": "+56"
  },
  {
    "name": "China",
    "flag": "🇨🇳",
    "code": "CN",
    "dial_code": "+86"
  },
  {
    "name": "Christmas Island",
    "flag": "🇨🇽",
    "code": "CX",
    "dial_code": "+61"
  },
  {
    "name": "Cocos (Keeling) Islands",
    "flag": "🇨🇨",
    "code": "CC",
    "dial_code": "+61"
  },
  {
    "name": "Colombia",
    "flag": "🇨🇴",
    "code": "CO",
    "dial_code": "+57"
  },
  {
    "name": "Comoros",
    "flag": "🇰🇲",
    "code": "KM",
    "dial_code": "+269"
  },
  {
    "name": "Congo",
    "flag": "🇨🇬",
    "code": "CG",
    "dial_code": "+242"
  },
  {
    "name": "Congo, The Democratic Republic of the Congo",
    "flag": "🇨🇩",
    "code": "CD",
    "dial_code": "+243"
  },
  {
    "name": "Cook Islands",
    "flag": "🇨🇰",
    "code": "CK",
    "dial_code": "+682"
  },
  {
    "name": "Costa Rica",
    "flag": "🇨🇷",
    "code": "CR",
    "dial_code": "+506"
  },
  {
    "name": "Côte d'Ivoire",
    "flag": "🇨🇮",
    "code": "CI",
    "dial_code": "+225"
  },
  {
    "name": "Croatia",
    "flag": "🇭🇷",
    "code": "HR",
    "dial_code": "+385"
  },
  {
    "name": "Cuba",
    "flag": "🇨🇺",
    "code": "CU",
    "dial_code": "+53"
  },
  {
    "name": "Cyprus",
    "flag": "🇨🇾",
    "code": "CY",
    "dial_code": "+357"
  },
  {
    "name": "Czech Republic",
    "flag": "🇨🇿",
    "code": "CZ",
    "dial_code": "+420"
  },
  {
    "name": "Denmark",
    "flag": "🇩🇰",
    "code": "DK",
    "dial_code": "+45"
  },
  {
    "name": "Djibouti",
    "flag": "🇩🇯",
    "code": "DJ",
    "dial_code": "+253"
  },
  {
    "name": "Dominica",
    "flag": "🇩🇲",
    "code": "DM",
    "dial_code": "+1767"
  },
  {
    "name": "Dominican Republic",
    "flag": "🇩🇴",
    "code": "DO",
    "dial_code": "+1849"
  },
  {
    "name": "Ecuador",
    "flag": "🇪🇨",
    "code": "EC",
    "dial_code": "+593"
  },
  {
    "name": "Egypt",
    "flag": "🇪🇬",
    "code": "EG",
    "dial_code": "+20"
  },
  {
    "name": "El Salvador",
    "flag": "🇸🇻",
    "code": "SV",
    "dial_code": "+503"
  },
  {
    "name": "Equatorial Guinea",
    "flag": "🇬🇶",
    "code": "GQ",
    "dial_code": "+240"
  },
  {
    "name": "Eritrea",
    "flag": "🇪🇷",
    "code": "ER",
    "dial_code": "+291"
  },
  {
    "name": "Estonia",
    "flag": "🇪🇪",
    "code": "EE",
    "dial_code": "+372"
  },
  {
    "name": "Ethiopia",
    "flag": "🇪🇹",
    "code": "ET",
    "dial_code": "+251"
  },
  {
    "name": "Falkland Islands (Malvinas)",
    "flag": "🇫🇰",
    "code": "FK",
    "dial_code": "+500"
  },
  {
    "name": "Faroe Islands",
    "flag": "🇫🇴",
    "code": "FO",
    "dial_code": "+298"
  },
  {
    "name": "Fiji",
    "flag": "🇫🇯",
    "code": "FJ",
    "dial_code": "+679"
  },
  {
    "name": "Finland",
    "flag": "🇫🇮",
    "code": "FI",
    "dial_code": "+358"
  },
  {
    "name": "France",
    "flag": "🇫🇷",
    "code": "FR",
    "dial_code": "+33"
  },
  {
    "name": "French Guiana",
    "flag": "🇬🇫",
    "code": "GF",
    "dial_code": "+594"
  },
  {
    "name": "French Polynesia",
    "flag": "🇵🇫",
    "code": "PF",
    "dial_code": "+689"
  },
  {
    "name": "French Southern Territories",
    "flag": "🇹🇫",
    "code": "TF",
    "dial_code": "+262"
  },
  {
    "name": "Gabon",
    "flag": "🇬🇦",
    "code": "GA",
    "dial_code": "+241"
  },
  {
    "name": "Gambia",
    "flag": "🇬🇲",
    "code": "GM",
    "dial_code": "+220"
  },
  {
    "name": "Georgia",
    "flag": "🇬🇪",
    "code": "GE",
    "dial_code": "+995"
  },
  {
    "name": "Germany",
    "flag": "🇩🇪",
    "code": "DE",
    "dial_code": "+49"
  },
  {
    "name": "Ghana",
    "flag": "🇬🇭",
    "code": "GH",
    "dial_code": "+233"
  },
  {
    "name": "Gibraltar",
    "flag": "🇬🇮",
    "code": "GI",
    "dial_code": "+350"
  },
  {
    "name": "Greece",
    "flag": "🇬🇷",
    "code": "GR",
    "dial_code": "+30"
  },
  {
    "name": "Greenland",
    "flag": "🇬🇱",
    "code": "GL",
    "dial_code": "+299"
  },
  {
    "name": "Grenada",
    "flag": "🇬🇩",
    "code": "GD",
    "dial_code": "+1473"
  },
  {
    "name": "Guadeloupe",
    "flag": "🇬🇵",
    "code": "GP",
    "dial_code": "+590"
  },
  {
    "name": "Guam",
    "flag": "🇬🇺",
    "code": "GU",
    "dial_code": "+1671"
  },
  {
    "name": "Guatemala",
    "flag": "🇬🇹",
    "code": "GT",
    "dial_code": "+502"
  },
  {
    "name": "Guernsey",
    "flag": "🇬🇬",
    "code": "GG",
    "dial_code": "+44"
  },
  {
    "name": "Guinea",
    "flag": "🇬🇳",
    "code": "GN",
    "dial_code": "+224"
  },
  {
    "name": "Guinea-Bissau",
    "flag": "🇬🇼",
    "code": "GW",
    "dial_code": "+245"
  },
  {
    "name": "Guyana",
    "flag": "🇬🇾",
    "code": "GY",
    "dial_code": "+592"
  },
  {
    "name": "Haiti",
    "flag": "🇭🇹",
    "code": "HT",
    "dial_code": "+509"
  },
  {
    "name": "Heard Island and Mcdonald Islands",
    "flag": "🇭🇲",
    "code": "HM",
    "dial_code": "+672"
  },
  {
    "name": "Holy See (Vatican City State)",
    "flag": "🇻🇦",
    "code": "VA",
    "dial_code": "+379"
  },
  {
    "name": "Honduras",
    "flag": "🇭🇳",
    "code": "HN",
    "dial_code": "+504"
  },
  {
    "name": "Hong Kong",
    "flag": "🇭🇰",
    "code": "HK",
    "dial_code": "+852"
  },
  {
    "name": "Hungary",
    "flag": "🇭🇺",
    "code": "HU",
    "dial_code": "+36"
  },
  {
    "name": "Iceland",
    "flag": "🇮🇸",
    "code": "IS",
    "dial_code": "+354"
  },
  {
    "name": "India",
    "flag": "🇮🇳",
    "code": "IN",
    "dial_code": "+91"
  },
  {
    "name": "Indonesia",
    "flag": "🇮🇩",
    "code": "ID",
    "dial_code": "+62"
  },
  {
    "name": "Iran",
    "flag": "🇮🇷",
    "code": "IR",
    "dial_code": "+98"
  },
  {
    "name": "Iraq",
    "flag": "🇮🇶",
    "code": "IQ",
    "dial_code": "+964"
  },
  {
    "name": "Ireland",
    "flag": "🇮🇪",
    "code": "IE",
    "dial_code": "+353"
  },
  {
    "name": "Isle of Man",
    "flag": "🇮🇲",
    "code": "IM",
    "dial_code": "+44"
  },
  {
    "name": "Israel",
    "flag": "🇮🇱",
    "code": "IL",
    "dial_code": "+972"
  },
  {
    "name": "Italy",
    "flag": "🇮🇹",
    "code": "IT",
    "dial_code": "+39"
  },
  {
    "name": "Jamaica",
    "flag": "🇯🇲",
    "code": "JM",
    "dial_code": "+1876"
  },
  {
    "name": "Japan",
    "flag": "🇯🇵",
    "code": "JP",
    "dial_code": "+81"
  },
  {
    "name": "Jersey",
    "flag": "🇯🇪",
    "code": "JE",
    "dial_code": "+44"
  },
  {
    "name": "Jordan",
    "flag": "🇯🇴",
    "code": "JO",
    "dial_code": "+962"
  },
  {
    "name": "Kazakhstan",
    "flag": "🇰🇿",
    "code": "KZ",
    "dial_code": "+7"
  },
  {
    "name": "Kenya",
    "flag": "🇰🇪",
    "code": "KE",
    "dial_code": "+254"
  },
  {
    "name": "Kiribati",
    "flag": "🇰🇮",
    "code": "KI",
    "dial_code": "+686"
  },
  {
    "name": "Korea, Democratic People's Republic of Korea",
    "flag": "🇰🇵",
    "code": "KP",
    "dial_code": "+850"
  },
  {
    "name": "Korea, Republic of South Korea",
    "flag": "🇰🇷",
    "code": "KR",
    "dial_code": "+82"
  },
  {
    "name": "Kosovo",
    "flag": "🇽🇰",
    "code": "XK",
    "dial_code": "+383"
  },
  {
    "name": "Kuwait",
    "flag": "🇰🇼",
    "code": "KW",
    "dial_code": "+965"
  },
  {
    "name": "Kyrgyzstan",
    "flag": "🇰🇬",
    "code": "KG",
    "dial_code": "+996"
  },
  {
    "name": "Laos",
    "flag": "🇱🇦",
    "code": "LA",
    "dial_code": "+856"
  },
  {
    "name": "Latvia",
    "flag": "🇱🇻",
    "code": "LV",
    "dial_code": "+371"
  },
  {
    "name": "Lebanon",
    "flag": "🇱🇧",
    "code": "LB",
    "dial_code": "+961"
  },
  {
    "name": "Lesotho",
    "flag": "🇱🇸",
    "code": "LS",
    "dial_code": "+266"
  },
  {
    "name": "Liberia",
    "flag": "🇱🇷",
    "code": "LR",
    "dial_code": "+231"
  },
  {
    "name": "Libyan Arab Jamahiriya",
    "flag": "🇱🇾",
    "code": "LY",
    "dial_code": "+218"
  },
  {
    "name": "Liechtenstein",
    "flag": "🇱🇮",
    "code": "LI",
    "dial_code": "+423"
  },
  {
    "name": "Lithuania",
    "flag": "🇱🇹",
    "code": "LT",
    "dial_code": "+370"
  },
  {
    "name": "Luxembourg",
    "flag": "🇱🇺",
    "code": "LU",
    "dial_code": "+352"
  },
  {
    "name": "Macao",
    "flag": "🇲🇴",
    "code": "MO",
    "dial_code": "+853"
  },
  {
    "name": "Macedonia",
    "flag": "🇲🇰",
    "code": "MK",
    "dial_code": "+389"
  },
  {
    "name": "Madagascar",
    "flag": "🇲🇬",
    "code": "MG",
    "dial_code": "+261"
  },
  {
    "name": "Malawi",
    "flag": "🇲🇼",
    "code": "MW",
    "dial_code": "+265"
  },
  {
    "name": "Malaysia",
    "flag": "🇲🇾",
    "code": "MY",
    "dial_code": "+60"
  },
  {
    "name": "Maldives",
    "flag": "🇲🇻",
    "code": "MV",
    "dial_code": "+960"
  },
  {
    "name": "Mali",
    "flag": "🇲🇱",
    "code": "ML",
    "dial_code": "+223"
  },
  {
    "name": "Malta",
    "flag": "🇲🇹",
    "code": "MT",
    "dial_code": "+356"
  },
  {
    "name": "Marshall Islands",
    "flag": "🇲🇭",
    "code": "MH",
    "dial_code": "+692"
  },
  {
    "name": "Martinique",
    "flag": "🇲🇶",
    "code": "MQ",
    "dial_code": "+596"
  },
  {
    "name": "Mauritania",
    "flag": "🇲🇷",
    "code": "MR",
    "dial_code": "+222"
  },
  {
    "name": "Mauritius",
    "flag": "🇲🇺",
    "code": "MU",
    "dial_code": "+230"
  },
  {
    "name": "Mayotte",
    "flag": "🇾🇹",
    "code": "YT",
    "dial_code": "+262"
  },
  {
    "name": "Mexico",
    "flag": "🇲🇽",
    "code": "MX",
    "dial_code": "+52"
  },
  {
    "name": "Micronesia, Federated States of Micronesia",
    "flag": "🇫🇲",
    "code": "FM",
    "dial_code": "+691"
  },
  {
    "name": "Moldova",
    "flag": "🇲🇩",
    "code": "MD",
    "dial_code": "+373"
  },
  {
    "name": "Monaco",
    "flag": "🇲🇨",
    "code": "MC",
    "dial_code": "+377"
  },
  {
    "name": "Mongolia",
    "flag": "🇲🇳",
    "code": "MN",
    "dial_code": "+976"
  },
  {
    "name": "Montenegro",
    "flag": "🇲🇪",
    "code": "ME",
    "dial_code": "+382"
  },
  {
    "name": "Montserrat",
    "flag": "🇲🇸",
    "code": "MS",
    "dial_code": "+1664"
  },
  {
    "name": "Morocco",
    "flag": "🇲🇦",
    "code": "MA",
    "dial_code": "+212"
  },
  {
    "name": "Mozambique",
    "flag": "🇲🇿",
    "code": "MZ",
    "dial_code": "+258"
  },
  {
    "name": "Myanmar",
    "flag": "🇲🇲",
    "code": "MM",
    "dial_code": "+95"
  },
  {
    "name": "Namibia",
    "flag": "🇳🇦",
    "code": "NA",
    "dial_code": "+264"
  },
  {
    "name": "Nauru",
    "flag": "🇳🇷",
    "code": "NR",
    "dial_code": "+674"
  },
  {
    "name": "Nepal",
    "flag": "🇳🇵",
    "code": "NP",
    "dial_code": "+977"
  },
  {
    "name": "Netherlands",
    "flag": "🇳🇱",
    "code": "NL",
    "dial_code": "+31"
  },
  {
    "name": "Netherlands Antilles",
    "flag": "",
    "code": "AN",
    "dial_code": "+599"
  },
  {
    "name": "New Caledonia",
    "flag": "🇳🇨",
    "code": "NC",
    "dial_code": "+687"
  },
  {
    "name": "New Zealand",
    "flag": "🇳🇿",
    "code": "NZ",
    "dial_code": "+64"
  },
  {
    "name": "Nicaragua",
    "flag": "🇳🇮",
    "code": "NI",
    "dial_code": "+505"
  },
  {
    "name": "Niger",
    "flag": "🇳🇪",
    "code": "NE",
    "dial_code": "+227"
  },
  {
    "name": "Nigeria",
    "flag": "🇳🇬",
    "code": "NG",
    "dial_code": "+234"
  },
  {
    "name": "Niue",
    "flag": "🇳🇺",
    "code": "NU",
    "dial_code": "+683"
  },
  {
    "name": "Norfolk Island",
    "flag": "🇳🇫",
    "code": "NF",
    "dial_code": "+672"
  },
  {
    "name": "Northern Mariana Islands",
    "flag": "🇲🇵",
    "code": "MP",
    "dial_code": "+1670"
  },
  {
    "name": "Norway",
    "flag": "🇳🇴",
    "code": "NO",
    "dial_code": "+47"
  },
  {
    "name": "Oman",
    "flag": "🇴🇲",
    "code": "OM",
    "dial_code": "+968"
  },
  {
    "name": "Pakistan",
    "flag": "🇵🇰",
    "code": "PK",
    "dial_code": "+92"
  },
  {
    "name": "Palau",
    "flag": "🇵🇼",
    "code": "PW",
    "dial_code": "+680"
  },
  {
    "name": "Palestinian Territory, Occupied",
    "flag": "🇵🇸",
    "code": "PS",
    "dial_code": "+970"
  },
  {
    "name": "Panama",
    "flag": "🇵🇦",
    "code": "PA",
    "dial_code": "+507"
  },
  {
    "name": "Papua New Guinea",
    "flag": "🇵🇬",
    "code": "PG",
    "dial_code": "+675"
  },
  {
    "name": "Paraguay",
    "flag": "🇵🇾",
    "code": "PY",
    "dial_code": "+595"
  },
  {
    "name": "Peru",
    "flag": "🇵🇪",
    "code": "PE",
    "dial_code": "+51"
  },
  {
    "name": "Philippines",
    "flag": "🇵🇭",
    "code": "PH",
    "dial_code": "+63"
  },
  {
    "name": "Pitcairn",
    "flag": "🇵🇳",
    "code": "PN",
    "dial_code": "+64"
  },
  {
    "name": "Poland",
    "flag": "🇵🇱",
    "code": "PL",
    "dial_code": "+48"
  },
  {
    "name": "Portugal",
    "flag": "🇵🇹",
    "code": "PT",
    "dial_code": "+351"
  },
  {
    "name": "Puerto Rico",
    "flag": "🇵🇷",
    "code": "PR",
    "dial_code": "+1939"
  },
  {
    "name": "Qatar",
    "flag": "🇶🇦",
    "code": "QA",
    "dial_code": "+974"
  },
  {
    "name": "Romania",
    "flag": "🇷🇴",
    "code": "RO",
    "dial_code": "+40"
  },
  {
    "name": "Russia",
    "flag": "🇷🇺",
    "code": "RU",
    "dial_code": "+7"
  },
  {
    "name": "Rwanda",
    "flag": "🇷🇼",
    "code": "RW",
    "dial_code": "+250"
  },
  {
    "name": "Reunion",
    "flag": "🇷🇪",
    "code": "RE",
    "dial_code": "+262"
  },
  {
    "name": "Saint Barthelemy",
    "flag": "🇧🇱",
    "code": "BL",
    "dial_code": "+590"
  },
  {
    "name": "Saint Helena, Ascension and Tristan Da Cunha",
    "flag": "🇸🇭",
    "code": "SH",
    "dial_code": "+290"
  },
  {
    "name": "Saint Kitts and Nevis",
    "flag": "🇰🇳",
    "code": "KN",
    "dial_code": "+1869"
  },
  {
    "name": "Saint Lucia",
    "flag": "🇱🇨",
    "code": "LC",
    "dial_code": "+1758"
  },
  {
    "name": "Saint Martin",
    "flag": "🇲🇫",
    "code": "MF",
    "dial_code": "+590"
  },
  {
    "name": "Saint Pierre and Miquelon",
    "flag": "🇵🇲",
    "code": "PM",
    "dial_code": "+508"
  },
  {
    "name": "Saint Vincent and the Grenadines",
    "flag": "🇻🇨",
    "code": "VC",
    "dial_code": "+1784"
  },
  {
    "name": "Samoa",
    "flag": "🇼🇸",
    "code": "WS",
    "dial_code": "+685"
  },
  {
    "name": "San Marino",
    "flag": "🇸🇲",
    "code": "SM",
    "dial_code": "+378"
  },
  {
    "name": "Sao Tome and Principe",
    "flag": "🇸🇹",
    "code": "ST",
    "dial_code": "+239"
  },
  {
    "name": "Saudi Arabia",
    "flag": "🇸🇦",
    "code": "SA",
    "dial_code": "+966"
  },
  {
    "name": "Senegal",
    "flag": "🇸🇳",
    "code": "SN",
    "dial_code": "+221"
  },
  {
    "name": "Serbia",
    "flag": "🇷🇸",
    "code": "RS",
    "dial_code": "+381"
  },
  {
    "name": "Seychelles",
    "flag": "🇸🇨",
    "code": "SC",
    "dial_code": "+248"
  },
  {
    "name": "Sierra Leone",
    "flag": "🇸🇱",
    "code": "SL",
    "dial_code": "+232"
  },
  {
    "name": "Singapore",
    "flag": "🇸🇬",
    "code": "SG",
    "dial_code": "+65"
  },
  {
    "name": "Slovakia",
    "flag": "🇸🇰",
    "code": "SK",
    "dial_code": "+421"
  },
  {
    "name": "Slovenia",
    "flag": "🇸🇮",
    "code": "SI",
    "dial_code": "+386"
  },
  {
    "name": "Solomon Islands",
    "flag": "🇸🇧",
    "code": "SB",
    "dial_code": "+677"
  },
  {
    "name": "Somalia",
    "flag": "🇸🇴",
    "code": "SO",
    "dial_code": "+252"
  },
  {
    "name": "South Africa",
    "flag": "🇿🇦",
    "code": "ZA",
    "dial_code": "+27"
  },
  {
    "name": "South Sudan",
    "flag": "🇸🇸",
    "code": "SS",
    "dial_code": "+211"
  },
  {
    "name": "South Georgia and the South Sandwich Islands",
    "flag": "🇬🇸",
    "code": "GS",
    "dial_code": "+500"
  },
  {
    "name": "Spain",
    "flag": "🇪🇸",
    "code": "ES",
    "dial_code": "+34"
  },
  {
    "name": "Sri Lanka",
    "flag": "🇱🇰",
    "code": "LK",
    "dial_code": "+94"
  },
  {
    "name": "Sudan",
    "flag": "🇸🇩",
    "code": "SD",
    "dial_code": "+249"
  },
  {
    "name": "Suriname",
    "flag": "🇸🇷",
    "code": "SR",
    "dial_code": "+597"
  },
  {
    "name": "Svalbard and Jan Mayen",
    "flag": "🇸🇯",
    "code": "SJ",
    "dial_code": "+47"
  },
  {
    "name": "Swaziland",
    "flag": "🇸🇿",
    "code": "SZ",
    "dial_code": "+268"
  },
  {
    "name": "Sweden",
    "flag": "🇸🇪",
    "code": "SE",
    "dial_code": "+46"
  },
  {
    "name": "Switzerland",
    "flag": "🇨🇭",
    "code": "CH",
    "dial_code": "+41"
  },
  {
    "name": "Syrian Arab Republic",
    "flag": "🇸🇾",
    "code": "SY",
    "dial_code": "+963"
  },
  {
    "name": "Taiwan",
    "flag": "🇹🇼",
    "code": "TW",
    "dial_code": "+886"
  },
  {
    "name": "Tajikistan",
    "flag": "🇹🇯",
    "code": "TJ",
    "dial_code": "+992"
  },
  {
    "name": "Tanzania, United Republic of Tanzania",
    "flag": "🇹🇿",
    "code": "TZ",
    "dial_code": "+255"
  },
  {
    "name": "Thailand",
    "flag": "🇹🇭",
    "code": "TH",
    "dial_code": "+66"
  },
  {
    "name": "Timor-Leste",
    "flag": "🇹🇱",
    "code": "TL",
    "dial_code": "+670"
  },
  {
    "name": "Togo",
    "flag": "🇹🇬",
    "code": "TG",
    "dial_code": "+228"
  },
  {
    "name": "Tokelau",
    "flag": "🇹🇰",
    "code": "TK",
    "dial_code": "+690"
  },
  {
    "name": "Tonga",
    "flag": "🇹🇴",
    "code": "TO",
    "dial_code": "+676"
  },
  {
    "name": "Trinidad and Tobago",
    "flag": "🇹🇹",
    "code": "TT",
    "dial_code": "+1868"
  },
  {
    "name": "Tunisia",
    "flag": "🇹🇳",
    "code": "TN",
    "dial_code": "+216"
  },
  {
    "name": "Turkey",
    "flag": "🇹🇷",
    "code": "TR",
    "dial_code": "+90"
  },
  {
    "name": "Turkmenistan",
    "flag": "🇹🇲",
    "code": "TM",
    "dial_code": "+993"
  },
  {
    "name": "Turks and Caicos Islands",
    "flag": "🇹🇨",
    "code": "TC",
    "dial_code": "+1649"
  },
  {
    "name": "Tuvalu",
    "flag": "🇹🇻",
    "code": "TV",
    "dial_code": "+688"
  },
  {
    "name": "Uganda",
    "flag": "🇺🇬",
    "code": "UG",
    "dial_code": "+256"
  },
  {
    "name": "Ukraine",
    "flag": "🇺🇦",
    "code": "UA",
    "dial_code": "+380"
  },
  {
    "name": "United Arab Emirates",
    "flag": "🇦🇪",
    "code": "AE",
    "dial_code": "+971"
  },
  {
    "name": "United Kingdom",
    "flag": "🇬🇧",
    "code": "GB",
    "dial_code": "+44"
  },
  {
    "name": "United States",
    "flag": "🇺🇸",
    "code": "US",
    "dial_code": "+1"
  },
  {
    "name": "Uruguay",
    "flag": "🇺🇾",
    "code": "UY",
    "dial_code": "+598"
  },
  {
    "name": "Uzbekistan",
    "flag": "🇺🇿",
    "code": "UZ",
    "dial_code": "+998"
  },
  {
    "name": "Vanuatu",
    "flag": "🇻🇺",
    "code": "VU",
    "dial_code": "+678"
  },
  {
    "name": "Venezuela",
    "flag": "🇻🇪",
    "code": "VE",
    "dial_code": "+58"
  },
  {
    "name": "Vietnam",
    "flag": "🇻🇳",
    "code": "VN",
    "dial_code": "+84"
  },
  {
    "name": "Virgin Islands, British",
    "flag": "🇻🇬",
    "code": "VG",
    "dial_code": "+1284"
  },
  {
    "name": "Virgin Islands, U.S.",
    "flag": "🇻🇮",
    "code": "VI",
    "dial_code": "+1340"
  },
  {
    "name": "Wallis and Futuna",
    "flag": "🇼🇫",
    "code": "WF",
    "dial_code": "+681"
  },
  {
    "name": "Yemen",
    "flag": "🇾🇪",
    "code": "YE",
    "dial_code": "+967"
  },
  {
    "name": "Zambia",
    "flag": "🇿🇲",
    "code": "ZM",
    "dial_code": "+260"
  },
  {
    "name": "Zimbabwe",
    "flag": "🇿🇼",
    "code": "ZW",
    "dial_code": "+263"
  }
]

