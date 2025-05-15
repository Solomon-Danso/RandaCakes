import React from 'react'
import "./Footer.css"
import CustomButton from '@/Components/Button'

const Footer = () => {
  return (
    <div className='footer'>
    
    <div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
        <div className="title">Contact us</div>
        <div>UG-Mall - Mega Super Store</div>
        <div>507-Union Trade Centre Accra</div>
        <div style={{fontSize:"1.5rem", color:"#FF5252"}}>0599626272</div>
    </div>

    {/* <div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
        <div className="title">Our company</div>
        <div>UG MALL, an authorized online marketplace, offers a comprehensive platform for businesses across Ghana to buy and sell a diverse range of goods and services. This digital hub aims to streamline commercial transactions, providing a convenient and reliable space for businesses to connect and trade.</div>
       
    </div> */}

    <div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
        <div className="title">Subscribe to newsletter</div>
        <div>Subscribe to our latest newsletter to get news about special discounts.</div>
       
       <input type='text' style={{background:"white", padding:"1rem", borderRadius:"1rem", color:"black"}}/>
       <CustomButton
       width='100px'
       title={"Subscribe"}
       backgroundColor='#FF5252'
       />
    </div>



    </div>
  )
}

export default Footer