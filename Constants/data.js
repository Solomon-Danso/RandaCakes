//export const apiServer = "https://mainapi.hydottech.com/api/";
//export const apiMedia = "https://mainapi.hydottech.com/storage/"; //Live 
export const apiServer = "http://localhost:8000/api/";
export const apiMedia = "http://localhost:8000/"; //Live 

const isLocalhost = typeof window !== "undefined" && window.location.hostname != "localhost";
export const ShortName = isLocalhost 
? "HydotFMS"
: "hydottec_FMS";

import Hb1 from "@/public/assets/images/1.jpg"
import Hb2 from "@/public/assets/images/2.jpg"
import Hb3 from "@/public/assets/images/3.jpg"
import Hb4 from "@/public/assets/images/4.jpg"
import Hb5 from "@/public/assets/images/5.jpg"
import Hb6 from "@/public/assets/images/6.jpg"
import Hb7 from "@/public/assets/images/7.jpeg"
import Hb8 from "@/public/assets/images/8.jpeg"
import Hb9 from "@/public/assets/images/9.jpeg"
import Hb10 from "@/public/assets/images/10.jpeg"
import Hb11 from "@/public/assets/images/11.jpeg"
import Hb12 from "@/public/assets/images/12.jpeg"
import Hb13 from "@/public/assets/images/13.jpg"
import Hb14 from "@/public/assets/images/14.jpeg"
import Hb15 from "@/public/assets/images/15.jpeg"
import Hb16 from "@/public/assets/images/16.jpg"
import Hb17 from "@/public/assets/images/17.jpg"
import Hb18 from "@/public/assets/images/18.jpg"
import Hb19 from "@/public/assets/images/19.jpg"
import Hb20 from "@/public/assets/images/20.jpg"
import Hb21 from "@/public/assets/images/21.jpg"
import Hb22 from "@/public/assets/images/22.jpg"
import Hb23 from "@/public/assets/images/23.jpg"
import Hb24 from "@/public/assets/images/24.jpg"
import Hb25 from "@/public/assets/images/25.jpg"
import Hb26 from "@/public/assets/images/26.jpg"
import Hb27 from "@/public/assets/images/27.jpg"
import Hb28 from "@/public/assets/images/28.jpg"
import Hb29 from "@/public/assets/images/29.jpg"
import Hb30 from "@/public/assets/images/30.jpg"

import Hb31 from "@/public/assets/images/20.jpg"
import Hb32 from "@/public/assets/images/22.jpg"
import Hb33 from "@/public/assets/images/23.jpg"
import Hb34 from "@/public/assets/images/24.jpg"
import Hb35 from "@/public/assets/images/25.jpg"
import Hb36 from "@/public/assets/images/26.jpg"
import Hb37 from "@/public/assets/images/27.jpg"
import Hb38 from "@/public/assets/images/28.jpg"
import Hb39 from "@/public/assets/images/29.jpg"
import Hb40 from "@/public/assets/images/30.jpg"


import Ban1 from "@/public/assets/images/1.jpg"
import Ban2 from "@/public/assets/images/2.jpg"
import Ban3 from "@/public/assets/images/3.jpg"
import Ban4 from "@/public/assets/images/4.jpg"

import { TbTruckDelivery } from "react-icons/tb";
import { PiKeyReturnLight } from "react-icons/pi";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaFacebook, FaGift, FaInstagramSquare, FaShoppingBag, FaTiktok } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { IoLogoYoutube } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FiHeart } from "react-icons/fi";


export const Categories = [
    {
        id: 1,
        name: "Birthday",
        image: Hb1.src,
        subcategories: [
            { id: 1, name: "Kids Birthday Cakes" },
            { id: 2, name: "Adult Birthday Cakes" },
            { id: 3, name: "Photo Cakes" },
        ],
        generalCategory: [
            { subCate: "Kids Birthday Cakes", title: "Cartoon-Themed Cakes" },
            { subCate: "Kids Birthday Cakes", title: "Number Cakes" },
            { subCate: "Adult Birthday Cakes", title: "Luxury Cakes" },
            { subCate: "Adult Birthday Cakes", title: "Minimalist Cakes" },
            { subCate: "Photo Cakes", title: "Printed Image Cakes" },
        ]
    },
    {
        id: 2,
        name: "Wedding",
        image: Hb2.src,
        subcategories: [
            { id: 1, name: "Traditional Wedding Cakes" },
            { id: 2, name: "White Wedding Cakes" },
            { id: 3, name: "Engagement Cakes" },
        ],
        generalCategory: [
            { subCate: "Traditional Wedding Cakes", title: "Kente-Themed Cakes" },
            { subCate: "Traditional Wedding Cakes", title: "Beaded Cakes" },
            { subCate: "White Wedding Cakes", title: "3-Tier Cakes" },
            { subCate: "White Wedding Cakes", title: "Floral Cakes" },
            { subCate: "Engagement Cakes", title: "Ring Box Cakes" },
        ]
    },
    {
        id: 3,
        name: "Cupcakes",
        image: Hb3.src,
        subcategories: [
            { id: 1, name: "Chocolate Cupcakes" },
            { id: 2, name: "Vanilla Cupcakes" },
            { id: 3, name: "Red Velvet Cupcakes" },
        ],
        generalCategory: [
            { subCate: "Chocolate Cupcakes", title: "Choco Chip Topped" },
            { subCate: "Vanilla Cupcakes", title: "Buttercream Frosted" },
            { subCate: "Red Velvet Cupcakes", title: "Cream Cheese Topped" },
        ]
    },
    {
        id: 4,
        name: "Custom",
        image: Hb4.src,
        subcategories: [
            { id: 1, name: "Themed Cakes" },
            { id: 2, name: "Gender Reveal Cakes" },
            { id: 3, name: "Anniversary Cakes" },
        ],
        generalCategory: [
            { subCate: "Themed Cakes", title: "Movie & Character Cakes" },
            { subCate: "Gender Reveal Cakes", title: "Pink or Blue Inside" },
            { subCate: "Anniversary Cakes", title: "Heart Shaped Cakes" },
        ]
    },
    {
        id: 5,
        name: "Pastries",
        image: Hb5.src,
        subcategories: [
            { id: 1, name: "Meat Pies" },
            { id: 2, name: "Doughnuts" },
            { id: 3, name: "Croissants" },
        ],
        generalCategory: [
            { subCate: "Meat Pies", title: "Beef Pies" },
            { subCate: "Meat Pies", title: "Chicken Pies" },
            { subCate: "Doughnuts", title: "Sugar Coated" },
            { subCate: "Doughnuts", title: "Cream Filled" },
            { subCate: "Croissants", title: "Plain Croissants" },
        ]
    },
    {
        id: 6,
        name: "Snacks",
        image: Hb6.src,
        subcategories: [
            { id: 1, name: "Chin Chin" },
            { id: 2, name: "Spring Rolls" },
            { id: 3, name: "Samosa" },
        ],
        generalCategory: [
            { subCate: "Chin Chin", title: "Crispy Chin Chin" },
            { subCate: "Spring Rolls", title: "Vegetable Spring Rolls" },
            { subCate: "Spring Rolls", title: "Beef Spring Rolls" },
            { subCate: "Samosa", title: "Chicken Samosa" },
            { subCate: "Samosa", title: "Spicy Vegetable Samosa" },
        ]
    },
    {
        id: 7,
        name: "Drinks",
        image: Hb7.src,
        subcategories: [
            { id: 1, name: "Fresh Juice" },
            { id: 2, name: "Smoothies" },
            { id: 3, name: "Soft Drinks" },
        ],
        generalCategory: [
            { subCate: "Fresh Juice", title: "Pineapple Juice" },
            { subCate: "Fresh Juice", title: "Orange Juice" },
            { subCate: "Smoothies", title: "Banana Smoothie" },
            { subCate: "Smoothies", title: "Mango Smoothie" },
            { subCate: "Soft Drinks", title: "Coca Cola" },
        ]
    },
    {
        id: 8,
        name: "Desserts",
        image: Hb8.src,
        subcategories: [
            { id: 1, name: "Pudding" },
            { id: 2, name: "Ice Cream" },
            { id: 3, name: "Tarts" },
        ],
        generalCategory: [
            { subCate: "Pudding", title: "Chocolate Pudding" },
            { subCate: "Pudding", title: "Vanilla Pudding" },
            { subCate: "Ice Cream", title: "Strawberry Ice Cream" },
            { subCate: "Ice Cream", title: "Chocolate Ice Cream" },
            { subCate: "Tarts", title: "Fruit Tarts" },
        ]
    }
];






export const DummyProducts = [
  // Birthday (5 Products)
  {
    productId: 1,
    mainPicture: Hb1.src,
    secondPicture: Hb2.src,
    subPictures: [Hb3.src, Hb4.src, Hb5.src],
    title: "Cartoon Character Cake",
    description: "Perfect for kids' birthdays with favorite cartoon characters.",
    discountPercent: 15,
    category: "Birthday",
    subCate: "Kids Birthday Cakes",
    generalCategory: "Cartoon-Themed Cakes",
    price: 120.0,
    quantity: 10,
    size: ["S", "M", "L"],
    starRating: 4.8,
  },
  {
    productId: 2,
    mainPicture: Hb2.src,
    secondPicture: Hb3.src,
    subPictures: [Hb1.src],
    title: "Luxury Adult Birthday Cake",
    description: "Elegant minimalist design for adult celebrations.",
    discountPercent: 10,
    category: "Birthday",
    subCate: "Adult Birthday Cakes",
    generalCategory: "Minimalist Cakes",
    price: 150.0,
    quantity: 8,
    size: ["M", "L"],
    starRating: 4.3,
  },
  {
    productId: 3,
    mainPicture: Hb3.src,
    secondPicture: Hb4.src,
    subPictures: [Hb5.src, Hb6.src],
    title: "Printed Photo Cake",
    description: "Custom photo printed cake for special moments.",
    discountPercent: 5,
    category: "Birthday",
    subCate: "Photo Cakes",
    generalCategory: "Printed Image Cakes",
    price: 130.0,
    quantity: 12,
    size: ["S", "M"],
    starRating: 4.7,
  },
  {
    productId: 21,
    mainPicture: Hb21.src,
    secondPicture: Hb22.src,
    subPictures: [Hb23.src],
    title: "Unicorn Birthday Cake",
    description: "Magical unicorn cake for birthday parties.",
    discountPercent: 12,
    category: "Birthday",
    subCate: "Fantasy Cakes",
    generalCategory: "Unicorn Cakes",
    price: 140.0,
    quantity: 10,
    size: ["S", "M"],
    starRating: 4.6,
  },
  {
    productId: 22,
    mainPicture: Hb22.src,
    secondPicture: Hb23.src,
    subPictures: [Hb24.src],
    title: "Rainbow Layer Cake",
    description: "Bright and colorful rainbow layered birthday cake.",
    discountPercent: 10,
    category: "Birthday",
    subCate: "Colorful Cakes",
    generalCategory: "Rainbow Cakes",
    price: 145.0,
    quantity: 9,
    size: ["S", "M", "L"],
    starRating: 4.5,
  },

  // Wedding (5 Products)
  {
    productId: 4,
    mainPicture: Hb4.src,
    secondPicture: Hb5.src,
    subPictures: [Hb6.src, Hb7.src],
    title: "Traditional Wedding Cake",
    description: "Classic wedding cake with traditional designs.",
    discountPercent: 12,
    category: "Wedding",
    subCate: "Traditional Wedding Cakes",
    generalCategory: "Kente-Themed Cakes",
    price: 300.0,
    quantity: 5,
    size: ["L"],
    starRating: 4.9,
  },
  {
    productId: 5,
    mainPicture: Hb5.src,
    secondPicture: Hb6.src,
    subPictures: [Hb4.src],
    title: "White Wedding Cake",
    description: "Elegant white layered cake perfect for weddings.",
    discountPercent: 8,
    category: "Wedding",
    subCate: "White Wedding Cakes",
    generalCategory: "3-Tier Cakes",
    price: 350.0,
    quantity: 7,
    size: ["M", "L"],
    starRating: 4.6,
  },
  {
    productId: 6,
    mainPicture: Hb6.src,
    secondPicture: Hb7.src,
    subPictures: [Hb5.src],
    title: "Engagement Ring Box Cake",
    description: "Creative engagement cake designed like a ring box.",
    discountPercent: 0,
    category: "Wedding",
    subCate: "Engagement Cakes",
    generalCategory: "Ring Box Cakes",
    price: 180.0,
    quantity: 9,
    size: ["S", "M"],
    starRating: 4.5,
  },
  {
    productId: 23,
    mainPicture: Hb23.src,
    secondPicture: Hb24.src,
    subPictures: [Hb25.src],
    title: "Gold-Themed Wedding Cake",
    description: "Luxury wedding cake with golden decorations.",
    discountPercent: 15,
    category: "Wedding",
    subCate: "Luxury Cakes",
    generalCategory: "Gold Cakes",
    price: 400.0,
    quantity: 6,
    size: ["L"],
    starRating: 4.9,
  },
  {
    productId: 24,
    mainPicture: Hb24.src,
    secondPicture: Hb25.src,
    subPictures: [Hb26.src],
    title: "Floral Wedding Cake",
    description: "Beautifully decorated floral wedding cake.",
    discountPercent: 10,
    category: "Wedding",
    subCate: "Floral Cakes",
    generalCategory: "Rose Cakes",
    price: 330.0,
    quantity: 7,
    size: ["M", "L"],
    starRating: 4.7,
  },

  // Cupcakes (5 Products)
  {
    productId: 7,
    mainPicture: Hb7.src,
    secondPicture: Hb8.src,
    subPictures: [Hb9.src],
    title: "Chocolate Cupcake Delight",
    description: "Rich chocolate cupcake with choco chip topping.",
    discountPercent: 10,
    category: "Cupcakes",
    subCate: "Chocolate Cupcakes",
    generalCategory: "Choco Chip Topped",
    price: 15.0,
    quantity: 50,
    size: ["S"],
    starRating: 4.4,
  },
  {
    productId: 8,
    mainPicture: Hb8.src,
    secondPicture: Hb9.src,
    subPictures: [Hb7.src],
    title: "Vanilla Buttercream Cupcake",
    description: "Soft vanilla cupcakes with smooth buttercream frosting.",
    discountPercent: 7,
    category: "Cupcakes",
    subCate: "Vanilla Cupcakes",
    generalCategory: "Buttercream Frosted",
    price: 15.0,
    quantity: 60,
    size: ["S"],
    starRating: 4.2,
  },
  {
    productId: 9,
    mainPicture: Hb9.src,
    secondPicture: Hb10.src,
    subPictures: [Hb8.src],
    title: "Red Velvet Cupcake",
    description: "Classic red velvet cupcake topped with cream cheese.",
    discountPercent: 5,
    category: "Cupcakes",
    subCate: "Red Velvet Cupcakes",
    generalCategory: "Cream Cheese Topped",
    price: 16.0,
    quantity: 55,
    size: ["S"],
    starRating: 4.7,
  },
  {
    productId: 19,
    mainPicture: Hb19.src,
    secondPicture: Hb20.src,
    subPictures: [Hb18.src],
    title: "Vanilla Cupcake with Sprinkles",
    description: "Classic vanilla cupcake topped with colorful sprinkles.",
    discountPercent: 12,
    category: "Cupcakes",
    subCate: "Vanilla Cupcakes",
    generalCategory: "Sprinkle Topped",
    price: 14.0,
    quantity: 50,
    size: ["S"],
    starRating: 4.5,
  },
  {
    productId: 25,
    mainPicture: Hb25.src,
    secondPicture: Hb26.src,
    subPictures: [Hb27.src],
    title: "Strawberry Cupcake",
    description: "Fresh strawberry cupcake with real fruit topping.",
    discountPercent: 8,
    category: "Cupcakes",
    subCate: "Fruit Cupcakes",
    generalCategory: "Strawberry Topped",
    price: 16.0,
    quantity: 48,
    size: ["S"],
    starRating: 4.6,
  },

  // Custom (5 Products)
  {
    productId: 10,
    mainPicture: Hb10.src,
    secondPicture: Hb11.src,
    subPictures: [Hb12.src],
    title: "Themed Custom Cake",
    description: "Personalized themed cakes for all occasions.",
    discountPercent: 12,
    category: "Custom",
    subCate: "Themed Cakes",
    generalCategory: "Movie & Character Cakes",
    price: 200.0,
    quantity: 15,
    size: ["M", "L"],
    starRating: 4.9,
  },
  {
    productId: 11,
    mainPicture: Hb11.src,
    secondPicture: Hb12.src,
    subPictures: [Hb10.src],
    title: "Gender Reveal Cake",
    description: "Fun cake revealing baby's gender with pink or blue inside.",
    discountPercent: 8,
    category: "Custom",
    subCate: "Gender Reveal Cakes",
    generalCategory: "Pink or Blue Inside",
    price: 180.0,
    quantity: 12,
    size: ["M"],
    starRating: 4.6,
  },
  {
    productId: 12,
    mainPicture: Hb12.src,
    secondPicture: Hb13.src,
    subPictures: [Hb11.src],
    title: "Anniversary Heart Cake",
    description: "Romantic heart-shaped cake for anniversaries.",
    discountPercent: 10,
    category: "Custom",
    subCate: "Anniversary Cakes",
    generalCategory: "Heart Shaped Cakes",
    price: 210.0,
    quantity: 10,
    size: ["M", "L"],
    starRating: 4.8,
  },
  {
    productId: 26,
    mainPicture: Hb26.src,
    secondPicture: Hb27.src,
    subPictures: [Hb28.src],
    title: "Graduation Cake",
    description: "Celebrate academic milestones with this graduation cake.",
    discountPercent: 10,
    category: "Custom",
    subCate: "Graduation Cakes",
    generalCategory: "Hat & Scroll Cakes",
    price: 220.0,
    quantity: 10,
    size: ["M", "L"],
    starRating: 4.7,
  },
  {
    productId: 27,
    mainPicture: Hb27.src,
    secondPicture: Hb28.src,
    subPictures: [Hb29.src],
    title: "Baby Shower Cake",
    description: "Lovely cake design perfect for baby shower events.",
    discountPercent: 5,
    category: "Custom",
    subCate: "Baby Shower Cakes",
    generalCategory: "Teddy Bear Cakes",
    price: 190.0,
    quantity: 8,
    size: ["M"],
    starRating: 4.5,
  },

  {
  productId: 13,
  mainPicture: Hb13.src,
  secondPicture: Hb14.src,
  subPictures: [Hb15.src],
  title: "Croissant Delight",
  description: "Flaky, buttery croissants made fresh every morning.",
  discountPercent: 5,
  category: "Pastries",
  subCate: "Croissants",
  generalCategory: "Butter Pastries",
  price: 10.0,
  quantity: 40,
  size: ["S"],
  starRating: 4.3,
},
{
  productId: 14,
  mainPicture: Hb14.src,
  secondPicture: Hb15.src,
  subPictures: [Hb13.src],
  title: "Meat Pie",
  description: "Savory Ghanaian meat pie with spiced beef filling.",
  discountPercent: 8,
  category: "Pastries",
  subCate: "Meat Pies",
  generalCategory: "Savory Snacks",
  price: 8.0,
  quantity: 50,
  size: ["S"],
  starRating: 4.6,
},
{
  productId: 15,
  mainPicture: Hb15.src,
  secondPicture: Hb16.src,
  subPictures: [Hb14.src],
  title: "Doughnut Ring",
  description: "Soft, sweet doughnuts with sugar glaze.",
  discountPercent: 10,
  category: "Pastries",
  subCate: "Doughnuts",
  generalCategory: "Sweet Snacks",
  price: 7.0,
  quantity: 60,
  size: ["S"],
  starRating: 4.4,
},
{
  productId: 27,
  mainPicture: Hb27.src,
  secondPicture: Hb28.src,
  subPictures: [Hb29.src],
  title: "Sausage Roll",
  description: "Golden pastry with seasoned sausage filling.",
  discountPercent: 5,
  category: "Pastries",
  subCate: "Sausage Rolls",
  generalCategory: "Savory Rolls",
  price: 9.0,
  quantity: 45,
  size: ["S"],
  starRating: 4.5,
},
{
  productId: 28,
  mainPicture: Hb28.src,
  secondPicture: Hb29.src,
  subPictures: [Hb30.src],
  title: "Apple Turnover",
  description: "Crispy pastry filled with cinnamon apple.",
  discountPercent: 12,
  category: "Pastries",
  subCate: "Fruit Pastries",
  generalCategory: "Apple Pastries",
  price: 11.0,
  quantity: 30,
  size: ["S"],
  starRating: 4.7,
},

{
  productId: 16,
  mainPicture: Hb16.src,
  secondPicture: Hb17.src,
  subPictures: [Hb18.src],
  title: "Chilled Sobolo",
  description: "Ghanaian hibiscus drink served ice-cold.",
  discountPercent: 7,
  category: "Drinks",
  subCate: "Traditional Drinks",
  generalCategory: "Sobolo",
  price: 5.0,
  quantity: 100,
  size: ["S", "M"],
  starRating: 4.6,
},
{
  productId: 17,
  mainPicture: Hb17.src,
  secondPicture: Hb18.src,
  subPictures: [Hb16.src],
  title: "Fresh Pineapple Juice",
  description: "100% natural pineapple juice, no additives.",
  discountPercent: 5,
  category: "Drinks",
  subCate: "Fruit Juices",
  generalCategory: "Pineapple Juice",
  price: 6.0,
  quantity: 90,
  size: ["S", "M"],
  starRating: 4.7,
},
{
  productId: 18,
  mainPicture: Hb18.src,
  secondPicture: Hb19.src,
  subPictures: [Hb17.src],
  title: "Vanilla Milkshake",
  description: "Creamy vanilla shake topped with whipped cream.",
  discountPercent: 10,
  category: "Drinks",
  subCate: "Milkshakes",
  generalCategory: "Vanilla Milkshake",
  price: 8.0,
  quantity: 70,
  size: ["M"],
  starRating: 4.5,
},
{
  productId: 29,
  mainPicture: Hb29.src,
  secondPicture: Hb30.src,
  subPictures: [Hb31.src],
  title: "Chocolate Smoothie",
  description: "Rich chocolate smoothie made with real cocoa.",
  discountPercent: 12,
  category: "Drinks",
  subCate: "Smoothies",
  generalCategory: "Chocolate Drinks",
  price: 9.0,
  quantity: 60,
  size: ["M", "L"],
  starRating: 4.8,
},
{
  productId: 30,
  mainPicture: Hb30.src,
  secondPicture: Hb31.src,
  subPictures: [Hb32.src],
  title: "Lemon Ginger Tea (Iced)",
  description: "Detoxifying iced lemon-ginger infusion.",
  discountPercent: 10,
  category: "Drinks",
  subCate: "Herbal Teas",
  generalCategory: "Detox Drinks",
  price: 5.5,
  quantity: 80,
  size: ["S", "M"],
  starRating: 4.4,
},

{
  productId: 31,
  mainPicture: Hb31.src,
  secondPicture: Hb32.src,
  subPictures: [Hb30.src],
  title: "Chocolate Chip Cookies",
  description: "Classic cookies packed with chocolate chips.",
  discountPercent: 8,
  category: "Cookies",
  subCate: "Chocolate Cookies",
  generalCategory: "Choco Chip Cookies",
  price: 6.0,
  quantity: 75,
  size: ["S"],
  starRating: 4.8,
},
{
  productId: 32,
  mainPicture: Hb32.src,
  secondPicture: Hb33.src,
  subPictures: [Hb31.src],
  title: "Oatmeal Raisin Cookies",
  description: "Healthy oats and sweet raisins in every bite.",
  discountPercent: 6,
  category: "Cookies",
  subCate: "Oatmeal Cookies",
  generalCategory: "Healthy Cookies",
  price: 6.0,
  quantity: 60,
  size: ["S"],
  starRating: 4.5,
},
{
  productId: 33,
  mainPicture: Hb33.src,
  secondPicture: Hb34.src,
  subPictures: [Hb32.src],
  title: "Peanut Butter Cookies",
  description: "Crunchy peanut butter flavor in a soft cookie.",
  discountPercent: 10,
  category: "Cookies",
  subCate: "Nut Cookies",
  generalCategory: "Peanut Cookies",
  price: 6.5,
  quantity: 50,
  size: ["S"],
  starRating: 4.6,
},
{
  productId: 34,
  mainPicture: Hb34.src,
  secondPicture: Hb35.src,
  subPictures: [Hb36.src],
  title: "Sugar Cookies",
  description: "Sweet, buttery sugar cookies with colorful toppings.",
  discountPercent: 5,
  category: "Cookies",
  subCate: "Sugar Cookies",
  generalCategory: "Decorated Cookies",
  price: 5.0,
  quantity: 80,
  size: ["S"],
  starRating: 4.4,
},
{
  productId: 35,
  mainPicture: Hb35.src,
  secondPicture: Hb36.src,
  subPictures: [Hb37.src],
  title: "Coconut Crunch Cookies",
  description: "Tropical coconut cookies with crispy texture.",
  discountPercent: 12,
  category: "Cookies",
  subCate: "Coconut Cookies",
  generalCategory: "Island Cookies",
  price: 6.0,
  quantity: 65,
  size: ["S"],
  starRating: 4.7,
},

{
  productId: 36,
  mainPicture: Hb11.src,
  secondPicture: Hb12.src,
  subPictures: [Hb13.src],
  title: "Plantain Chips",
  description: "Crispy fried plantain chips with a hint of spice.",
  discountPercent: 10,
  category: "Snacks",
  subCate: "Chips",
  generalCategory: "Local Snacks",
  price: 5.0,
  quantity: 100,
  size: ["S"],
  starRating: 4.6,
},
{
  productId: 37,
  mainPicture: Hb12.src,
  secondPicture: Hb13.src,
  subPictures: [Hb14.src],
  title: "Kelewele Bites",
  description: "Spicy diced fried plantains, Ghanaian favorite.",
  discountPercent: 5,
  category: "Snacks",
  subCate: "Fried Snacks",
  generalCategory: "Street Snacks",
  price: 6.0,
  quantity: 80,
  size: ["S"],
  starRating: 4.5,
},
{
  productId: 38,
  mainPicture: Hb13.src,
  secondPicture: Hb14.src,
  subPictures: [Hb15.src],
  title: "Groundnut Snack Pack",
  description: "Roasted peanuts, crunchy and protein-packed.",
  discountPercent: 8,
  category: "Snacks",
  subCate: "Nuts",
  generalCategory: "Healthy Snacks",
  price: 4.0,
  quantity: 120,
  size: ["S"],
  starRating: 4.3,
},
{
  productId: 39,
  mainPicture: Hb14.src,
  secondPicture: Hb15.src,
  subPictures: [Hb16.src],
  title: "Chinchinga Skewers",
  description: "Grilled beef kebabs with Ghanaian spices.",
  discountPercent: 7,
  category: "Snacks",
  subCate: "Meat Snacks",
  generalCategory: "Grilled Bites",
  price: 10.0,
  quantity: 70,
  size: ["M"],
  starRating: 4.7,
},
{
  productId: 40,
  mainPicture: Hb15.src,
  secondPicture: Hb16.src,
  subPictures: [Hb17.src],
  title: "Popcorn Pack",
  description: "Light, buttery popcorn – perfect for any time.",
  discountPercent: 6,
  category: "Snacks",
  subCate: "Popcorn",
  generalCategory: "Cinema Snacks",
  price: 3.5,
  quantity: 150,
  size: ["S", "M"],
  starRating: 4.4,
},

{
  productId: 41,
  mainPicture: Hb16.src,
  secondPicture: Hb17.src,
  subPictures: [Hb18.src],
  title: "Chocolate Cake Slice",
  description: "Rich chocolate cake with creamy ganache topping.",
  discountPercent: 12,
  category: "Desserts",
  subCate: "Cakes",
  generalCategory: "Chocolate Desserts",
  price: 12.0,
  quantity: 40,
  size: ["S"],
  starRating: 4.9,
},
{
  productId: 42,
  mainPicture: Hb17.src,
  secondPicture: Hb18.src,
  subPictures: [Hb19.src],
  title: "Fruit Parfait",
  description: "Layers of yogurt, fruit, and granola for a healthy treat.",
  discountPercent: 10,
  category: "Desserts",
  subCate: "Parfaits",
  generalCategory: "Healthy Desserts",
  price: 9.0,
  quantity: 50,
  size: ["M"],
  starRating: 4.6,
},
{
  productId: 43,
  mainPicture: Hb18.src,
  secondPicture: Hb19.src,
  subPictures: [Hb20.src],
  title: "Vanilla Cupcake",
  description: "Soft vanilla cupcakes with colorful frosting.",
  discountPercent: 7,
  category: "Desserts",
  subCate: "Cupcakes",
  generalCategory: "Baked Desserts",
  price: 6.0,
  quantity: 60,
  size: ["S"],
  starRating: 4.5,
},
{
  productId: 44,
  mainPicture: Hb19.src,
  secondPicture: Hb20.src,
  subPictures: [Hb16.src],
  title: "Chilled Mango Mousse",
  description: "Smooth mango mousse topped with whipped cream.",
  discountPercent: 11,
  category: "Desserts",
  subCate: "Mousse",
  generalCategory: "Fruit Desserts",
  price: 10.0,
  quantity: 45,
  size: ["S"],
  starRating: 4.7,
},
{
  productId: 45,
  mainPicture: Hb20.src,
  secondPicture: Hb11.src,
  subPictures: [Hb12.src],
  title: "Ice Cream Trio Cup",
  description: "Three-flavor ice cream cup: vanilla, chocolate, strawberry.",
  discountPercent: 15,
  category: "Desserts",
  subCate: "Ice Cream",
  generalCategory: "Frozen Desserts",
  price: 8.0,
  quantity: 70,
  size: ["S", "M"],
  starRating: 4.8,
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
  title: "Free Delivery",
  description: "On orders over $50",
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
   url: "https://www.instagram.com/randacakes_and_more/",
  },
  {
    icon: <FaInstagramSquare style={{width:"30px", height:"30px"}}/>,
    url: "https://www.instagram.com/randacakes_and_more/",
   },
   {
    icon: <FaTiktok style={{width:"30px", height:"30px"}}/>,
    url: "https://www.instagram.com/randacakes_and_more/",
   },
   {
    icon: <IoLogoYoutube style={{width:"30px", height:"30px"}}/>,
    url: "https://www.instagram.com/randacakes_and_more/",
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

