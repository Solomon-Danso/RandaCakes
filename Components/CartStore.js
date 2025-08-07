import { create } from 'zustand';
import CryptoJS from 'crypto-js';
import { Show } from '@/Constants/Alerts';
import { DummyProducts } from '@/Constants/data';

const secretKey = "NXds7IUykdbiy2sDk7c2LsAuh";

export const useCartStore = create((set, get) => ({
  cart: [],
  wishlist:[],
  searchTerm: '',
  searchedProductsList: [],
  forYouList:[],
  theOrder:[],
  productList: [],
  categoryList:[],

loadCategory: async () => {
  try {
    // Extract unique categories from DummyProducts
    const categories = DummyProducts.reduce((acc, product) => {
      if (product.category && !acc.some(cat => cat.name === product.category)) {
        acc.push({
          id: acc.length + 1, // Generate incremental ID
          name: product.category,
          // Optional: include subcategories if needed
          subcategories: product.subCate ? [product.subCate] : []
        });
      }
      return acc;
    }, []);

    // If you want to include subcategories more comprehensively:
    const categoriesWithSubs = DummyProducts.reduce((acc, product) => {
      // Find or create the main category
      let category = acc.find(cat => cat.name === product.category);
      if (!category && product.category) {
        category = { id: acc.length + 1, name: product.category, subcategories: [] };
        acc.push(category);
      }
      
      // Add subcategory if it exists and isn't already included
      if (product.subCate && category && !category.subcategories.includes(product.subCate)) {
        category.subcategories.push(product.subCate);
      }
      
      return acc;
    }, []);

    set({ categoryList: categoriesWithSubs }); // or categories if you prefer simpler version
  } catch (error) {
    console.error("Error loading categories:", error);
  }
},

  loadProducts: async () => {
    try {
      // Using DummyProducts instead of API call
      set({ productList: DummyProducts });
    } catch (error) {
      console.error("Error loading products:", error);
    }
  },
  
  setSearchTerm: (term) => {
    set({ searchTerm: term });
  },

  searchedProducts: () => {
    const { searchTerm, productList } = get();
    if (!searchTerm) {
      set({ searchedProductsList: productList });
      return productList;
    }
  
    const lowerTerm = searchTerm.toLowerCase();
    const searchProducts = productList.filter(product =>
      product.title.toLowerCase().includes(lowerTerm) ||
      product.description?.toLowerCase().includes(lowerTerm) ||
      product.category?.toLowerCase().includes(lowerTerm) ||
      product.subCate?.toLowerCase().includes(lowerTerm)
    );
  
    set({ searchedProductsList: searchProducts });
    return searchProducts;
  },

  forYouProducts: async () => {
    try {
      // Using a subset of DummyProducts for recommendations
      const recommendedProducts = DummyProducts.slice(0, 5); // Get first 5 products as recommendations
      set({ forYouList: recommendedProducts });
    } catch (error) {
      console.error("Error loading recommended products:", error);
    }
  },

  saveCart: (cartData) => {
    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(cartData), secretKey).toString();
    localStorage.setItem('cartData', encrypted);
  },

  loadCart: () => {
    const encryptedCart = localStorage.getItem('cartData');
    if (encryptedCart) {
      const bytes = CryptoJS.AES.decrypt(encryptedCart, secretKey);
      const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      set({ cart: decryptedData });
    }
  },

  addToCart: (item, qty = 1) => {
    const { cart, saveCart, loadCart } = get();

    Show.Alert(item.title + " item added to cart");

    const existingIndex = cart.findIndex(cartItem => cartItem.productId === item.productId);
    let updatedCart;

    if (existingIndex !== -1) {
      const currentQty = cart[existingIndex].quantity;
      if (currentQty + qty > item.Quantity) {
        Show.Alert(`You cannot add more than ${item.Quantity} items.`);
        return;
      }
      updatedCart = cart.map((cartItem, idx) =>
        idx === existingIndex
          ? { ...cartItem, quantity: currentQty + qty }
          : cartItem
      );
    } else {
      if (qty > item.Quantity) {
        Show.Alert(`You cannot add more than ${item.Quantity} items.`);
        return;
      }
      updatedCart = [...cart, { ...item, quantity: qty }];
    }

    set({ cart: updatedCart });
    saveCart(updatedCart);
    loadCart();
  },

  addToCartWithSize: (item, qty = 1, size) => {
    const { cart, saveCart, loadCart } = get();
  
    Show.Alert(item.title + " added to cart");
  
    const existingIndex = cart.findIndex(
      cartItem => cartItem.productId === item.productId && cartItem.size === size
    );
  
    let updatedCart;
  
    if (existingIndex !== -1) {
      const currentQty = cart[existingIndex].quantity;
      if (currentQty + qty > item.Quantity) {
        Show.Alert(`You cannot add more than ${item.Quantity} items.`);
        return;
      }
      updatedCart = cart.map((cartItem, idx) =>
        idx === existingIndex
          ? { ...cartItem, quantity: currentQty + qty }
          : cartItem
      );
    } else {
      if (qty > item.Quantity) {
        Show.Alert(`You cannot add more than ${item.Quantity} items.`);
        return;
      }
      updatedCart = [...cart, { ...item, quantity: qty, size: size }];
    }
  
    set({ cart: updatedCart });
    saveCart(updatedCart);
    loadCart();
  },
  

  deleteFromCart: (productId) => {
    const { cart, saveCart } = get();
    const updatedCart = cart.filter(item => item.productId !== productId);
    set({ cart: updatedCart });
    saveCart(updatedCart);
  },

  updateCartQuantity: (item, change) => {
    const { cart, saveCart, productList } = get();

    const product = productList.find(p => p.productId === item.productId);
    const stockAvailable = product ? product.quantity : item.quantity;

    const updatedCart = cart.map(cartItem => {
      if (cartItem.productId === item.productId) {
        let newQuantity = cartItem.quantity + change;

        if (newQuantity < 1) newQuantity = 1;

        if (newQuantity > stockAvailable) {
          Show.Error(`Only ${stockAvailable} items in stock.`);
          newQuantity = stockAvailable;
        }

        return { ...cartItem, quantity: newQuantity };
      }
      return cartItem;
    });

    set({ cart: updatedCart });
    saveCart(updatedCart);
  },

  clearCart: () => {
    localStorage.removeItem('cartData');
    set({ cart: [] });
  },

  saveWishlist: (cartData) => {
    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(cartData), secretKey).toString();
    localStorage.setItem('wishlistData', encrypted);
  },

  loadWishlist: () => {
    const encryptedCart = localStorage.getItem('wishlistData');
    if (encryptedCart) {
      const bytes = CryptoJS.AES.decrypt(encryptedCart, secretKey);
      const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      set({ wishlist: decryptedData });
    }
  },

  addToWishList: (item, qty = 1) => {
    const { wishlist, saveWishlist, loadWishlist } = get();

    Show.Alert(item.title + " item added to wishlist");

    const existingIndex = wishlist.findIndex(cartItem => cartItem.productId === item.productId);
    let updatedCart;

    if (existingIndex !== -1) {
      const currentQty = wishlist[existingIndex].quantity;
      if (currentQty + qty > item.Quantity) {
        Show.Alert(`You cannot add more than ${item.Quantity} items.`);
        return;
      }
      updatedCart = wishlist.map((cartItem, idx) =>
        idx === existingIndex
          ? { ...cartItem, quantity: currentQty + qty }
          : cartItem
      );
    } else {
      if (qty > item.Quantity) {
        Show.Alert(`You cannot add more than ${item.Quantity} items.`);
        return;
      }
      updatedCart = [...wishlist, { ...item, quantity: qty }];
    }

    set({ wishlist: updatedCart });
    saveWishlist(updatedCart);
    loadWishlist();
  },
  
  deleteFromWishlist: (productId) => {
    const { wishlist, saveWishlist } = get();
    const updatedCart = wishlist.filter(item => item.productId !== productId);
    set({ wishlist: updatedCart });
    saveWishlist(updatedCart);
  },

  processTheOrder: () => {
    const { cart, clearCart } = get();
  
    if (!cart || cart.length === 0) {
      Show.Error("No items in cart to process.");
      return;
    }
  
    const encryptedOrder = CryptoJS.AES.encrypt(JSON.stringify(cart), secretKey).toString();
    localStorage.setItem('orderData', encryptedOrder);
    clearCart();
    Show.Alert("Order processed successfully.");
  },
  
  loadOrder: () => {
    const encryptedOrder = localStorage.getItem('orderData');

    if (encryptedOrder) {
      try {
        const bytes = CryptoJS.AES.decrypt(encryptedOrder, secretKey);
        const decryptedOrder = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        set({ theOrder: decryptedOrder });
        return decryptedOrder;
      } catch (e) {
        Show.Error("An error has occurred");
        return [];
      }
    }

    return [];
  },
  
  clearOrder: () => {
    localStorage.removeItem('orderData');
    set({ cart: [] });
  },
}));