"use client"
import React, { useEffect, useState } from 'react'
import "./profile.css"
import Navbar from '@/Pages/Navbar/Navbar'
import LastFooter from '@/Pages/Footer/LastFooter'
import Footer from '@/Pages/Footer/Footer'
import { Accounts, Countries } from '@/Constants/data'
import { useRouter } from 'next/navigation'
import { FaStar, FaStarHalfAlt, FaRegStar, FaHeart } from 'react-icons/fa'
import { useCartStore } from '@/Components/CartStore'
import { MdDelete } from 'react-icons/md'

const Page = () => {

    const router = useRouter();
        const navigate = (path) => {
          router.push(path);
        };


const current = "/myOrders"

const [orders, setOrders] = useState([
  {
    orderId: "ORD123456",
    paymentId: "PAY987654",
    name: "Solomon Danso",
    phone: "+233501234567",
    address: "12 Airport Road, Accra",
    pincode: "00233",
    totalAmount: 250.75,
    email: "solomondanso2023@gmail.com",
    userId: "USR001",
    status: "Delivered",
    date: "2025-05-05",
  },
  {
    orderId: "ORD123457",
    paymentId: "PAY987655",
    name: "Ama Boateng",
    phone: "+233201112223",
    address: "East Legon, Accra",
    pincode: "00233",
    totalAmount: 120.00,
    email: "amaboateng@gmail.com",
    userId: "USR002",
    status: "Shipped",
    date: "2025-04-30",
  },
  {
    orderId: "ORD123458",
    paymentId: "PAY987656",
    name: "Kwame Mensah",
    phone: "+233242223344",
    address: "Tema Community 5",
    pincode: "00233",
    totalAmount: 75.5,
    email: "kwamemensah@gmail.com",
    userId: "USR003",
    status: "Processing",
    date: "2025-04-28",
  }
]);
 
const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-GH', {
    style: 'currency',
    currency: 'GHS',
    minimumFractionDigits: 2
  }).format(value);
};


  return (
    <div>
<Navbar/>
<div className='profile'>

<div className='profile-left'>

<div className='profile-left-1'>
<div style={{width:"120px", height:"120px", borderRadius:"50%", backgroundColor:"#EC407A", color:"white", textAlign:"center", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", fontSize:"50px", fontWeight:"bold"}}>S</div>
<div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
    <div style={{fontSize:"1.3rem", fontWeight:"bold"}}>Solomon Danso</div>
    <div>solomondanso2023@gmail.com</div>
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
   <div style={{fontSize:"1.2rem", fontFamily:"Hydot-SemiBold", paddingBottom:"1rem"}}>My Orders ({orders.length})</div><hr/>

   <div className="order-table-wrapper">
  <div className="table-responsive">
    <table className="order-table">
      <thead>
        <tr>
        <th>Status</th>
          <th>Order ID</th>

          <th>Payment ID</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Pincode</th>
          <th>Total</th>
          <th>Email</th>
          <th>User ID</th>
          
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order, index) => (
          <tr key={index}>
             <td>
              <span className={`status-badge ${order.status.toLowerCase()}`}>
                {order.status}
              </span>
            </td>
            <td>{order.orderId}</td>
            <td>{order.paymentId}</td>
            <td>{order.name}</td>
            <td>{order.phone}</td>
            <td>{order.address}</td>
            <td>{order.pincode}</td>
            <td>{formatCurrency(order.totalAmount)}</td>
            <td>{order.email}</td>
            <td>{order.userId}</td>
           
            <td>{order.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

   

</div>


</div>

<LastFooter/>
<Footer/>

    </div>
    
  )
}

export default Page