"use client"
import React, { useEffect, useState } from 'react'
import "./profile.css"
import Navbar from '@/Pages/Navbar/Navbar'


import { Accounts, apiMedia, apiServer, Countries } from '@/Constants/data'
import { useRouter } from 'next/navigation'
import { FaStar, FaStarHalfAlt, FaRegStar, FaHeart } from 'react-icons/fa'
import { useCartStore } from '@/Components/CartStore'
import { MdDelete } from 'react-icons/md'
import { AES, enc } from 'crypto-js';
import { Show } from '@/Constants/Alerts'

const Page = () => {

    const router = useRouter();
        const navigate = (path) => {
          router.push(path);
        };


const current = "/myOrders"

const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
    try {
      const encryptedData = sessionStorage.getItem("userDataEnc");
      const encryptionKey = '$2a$11$3lkLrAOuSzClGFmbuEAYJeueRET0ujZB2TkY9R/E/7J1Rr2u522CK';
      const decryptedData = AES.decrypt(encryptedData, encryptionKey);
      const decryptedString = decryptedData.toString(enc.Utf8);
      const parsedData = JSON.parse(decryptedString);
      setUserInfo(parsedData);
    } catch (error) {
     Show.Attention("You are not logged in, please login to continue");
     navigate("/")    
    }
  }, []);

 
const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-GH', {
    style: 'currency',
    currency: 'GHS',
    minimumFractionDigits: 2
  }).format(value);
};

const formatDateTime = (isoString) => {
  const date = new Date(isoString);

  // Get date parts
  const day = date.getUTCDate();
  const month = date.toLocaleString("en-US", { month: "long", timeZone: "UTC" });
  const year = date.getUTCFullYear();

  // Get time parts
  let hours = date.getUTCHours();
  const minutes = date.getUTCMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'pm' : 'am';

  hours = hours % 12 || 12; // convert 0 to 12, 13 to 1, etc.

  // Get ordinal suffix
  const suffix = (n) => {
    if (n > 3 && n < 21) return 'th';
    switch (n % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };

  return `${day}${suffix(day)} ${month}, ${year} at ${hours}:${minutes} ${ampm}`;
}




const [orderList, setorderList] = useState([])

useEffect(() => {
 const formData = new FormData();
    formData.append("UserId", userInfo.UserId);
   if (userInfo.UserId) {
      fetch(apiServer + "ViewYourOrders", {
      method: "POST",
      body: formData,
    })
    .then(res => res.json())
    .then(data => {
      
      setorderList(data);
    })
    .catch(err => console.error(err));
    }
   
}, [userInfo.UserId]);


const [showModal, setShowModal] = useState(false);
const [selectedOrder, setSelectedOrder] = useState(null);

const [ratings, setRatings] = useState({}); // {productId: rating}

const handleRating = async (productId, orderId, value) => {
  setRatings(prev => ({ ...prev, [productId]: value }));

  const formData = new FormData();
  formData.append("OrderId", orderId);
  formData.append("productId", productId);
  formData.append("rate", value);
  Show.showLoading()

  try {
    const response = await fetch(apiServer + "RatingMaster", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if(response.ok){
    Show.hideLoading()
    Show.Success(data.message);
    }else{
      Show.Attention(data.message)
    }
    
  } catch (err) {
    Show.Attention("Failed to rate product. Try again.");
    console.log(err);
  }
};

const renderStars = (productId, orderId) => {
  const selectedRating = ratings[productId] || 0;

  const stars = Array.from({ length: 5 }, (_, index) => {
    const value = index + 1;
    const isHalf = selectedRating >= value - 0.5 && selectedRating < value;
    const isFull = selectedRating >= value;

    return (
      <span
        key={index}
        onClick={() => handleRating(productId, orderId, isHalf ? value - 0.5 : value)}
        style={{ color: "#f7c948", cursor: "pointer", fontSize: "1.2rem" }}
      >
        {isFull ? <FaStar /> : isHalf ? <FaStarHalfAlt /> : <FaRegStar />}
      </span>
    );
  });

  return <div style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}>{stars}</div>;
};

  


  return (
    <div>
<Navbar/>
<div className='profile'>

<div className='profile-left'>

<div className='profile-left-1'>
<div style={{width:"120px", height:"120px", borderRadius:"50%", backgroundColor:"#EC407A", color:"white", textAlign:"center", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", fontSize:"50px", fontWeight:"bold"}}>  {userInfo?.FullName?.charAt(0)?.toUpperCase() || ""}</div>
<div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
    <div style={{fontSize:"1.3rem", fontWeight:"bold"}}>{userInfo.FullName}</div>
    <div>{userInfo.Email}</div>
</div>

</div>

<div className='profile-left-2'>

{
  Accounts.map((data, index) => (
    <div key={index} onClick={() => navigate(data.url)}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          padding: "1rem",
          borderLeft: data.url === current ? "4px solid #FF5252" : "4px solid transparent",
          cursor: "pointer"
        }}
      >
        <span style={{ fontSize: "1.2rem", color: data.url === current ? "#FF5252" : "" }}>{data.icon}</span>
        <span style={{ fontSize: "1rem" }}>{data.text}</span>
      </div>
    </div>
  ))
}



</div>



</div>

<div className='profile-right'>
   <div style={{fontSize:"1.2rem", fontFamily:"Hydot-SemiBold", paddingBottom:"1rem"}}>My Orders ({orderList.length})</div><hr/>

   <div className="order-table-wrapper">
  <div className="table-responsive">
    <table className="order-table">
      <thead>
        <tr>
        <th>Status</th>
         <th>Pincode</th>
        <th>View Details</th>
          <th>Order ID</th>
          
          <th>Address</th>
         
          <th>Total</th>
          
          <th>OrderDate</th>
           <th>LatestUpdateDate</th>
        </tr>
      </thead>
      <tbody>
        {orderList.length>0&& orderList.map((order, index) => (
          <tr key={index}>
             <td>
              <span className={`status-badge ${order.Status.toLowerCase()}`}>
                {order.Status}
              </span>
            </td>
             <td>{order.PinCode}</td>
            <td>
  <button 
    className="view-btn1" 
    onClick={() => {
      setSelectedOrder(order);
      setShowModal(true);
    }}
  >
    View
  </button>
</td>

            <td>{order.OrderID}</td>
          
           
            <td>{order.DetailedAddress}</td>
           
            <td>{formatCurrency(order.Total)}</td>
           
          
            <td>{formatDateTime(order.created_at)}</td>
            <td>{formatDateTime(order.updated_at)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

   

</div>

{showModal && selectedOrder && (
  <div className="modal-overlay1" onClick={() => setShowModal(false)}>
    <div className="modal-content1" onClick={e => e.stopPropagation()}>
      <button className="close-btn1" onClick={() => setShowModal(false)}>×</button>
      <h2>Order Details - {selectedOrder.OrderID}</h2>
      <p><strong>Payment Method:</strong> {selectedOrder.PaymentMethod}</p>
      <p><strong>Payment Status:</strong> {selectedOrder.PaymentStatus}</p>
      <p><strong>Address:</strong> {selectedOrder.DetailedAddress}, {selectedOrder.City}, {selectedOrder.Region}</p>

      <div className="products1">
        {JSON.parse(selectedOrder.OrderList).map((item, idx) => (
          <div key={idx} className="product-card1">
            <img src={`${apiMedia}${item.mainPicture}`} alt={item.title} />
            <div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <p><strong>Price:</strong> GHS {item.price}</p>
              <p><strong>Quantity:</strong> {item.quantity}</p>
              <p><strong>Category:</strong> {item.category} / {item.subCate} / {item.generalCategory}</p>
              <p><strong>Sizes:</strong>{" "}{Array.isArray(item.size) ? item.size.join(", ") : "N/A"}</p>

            </div>

{selectedOrder.Status === "Delivered" && (
  <div style={{ marginTop: "0.5rem" }}>
    <p><strong>Rate this product:</strong></p>
    {renderStars(item.productId, selectedOrder.OrderID)}
  </div>
)}


          </div>
        ))}
      </div>
    </div>
  </div>




)}





</div>




    </div>
    
  )
}

export default Page