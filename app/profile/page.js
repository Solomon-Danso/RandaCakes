"use client"
import React, { useState } from 'react'
import "./profile.css"
import Navbar from '@/Pages/Navbar/Navbar'
import LastFooter from '@/Pages/Footer/LastFooter'
import Footer from '@/Pages/Footer/Footer'
import { Accounts, Countries } from '@/Constants/data'
import { useRouter } from 'next/navigation'
import Selector from '@/Constants/Selector'
import CountrySelect from '@/Constants/CountrySelect'

const Page = () => {

    const router = useRouter();
        const navigate = (path) => {
          router.push(path);
        };


const current = "/profile"
const [selectedCountry, setSelectedCountry] = useState(Countries[0]);
const [phone, setPhone] = useState('');


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
   <div style={{fontSize:"1.2rem", fontFamily:"Hydot-SemiBold", paddingBottom:"1rem"}}>My Profile</div><hr/>

   <div className='profile-right-div'>

    <fieldset>
          <legend>Full Name *</legend>
          <input
            className="profile-input"
            type="text"
            // onChange={(e) => setCountry(e.target.value)}
            required
          />
    </fieldset>

    <fieldset>
          <legend>Email *</legend>
          <input
            className="profile-input"
            type="text"
            // onChange={(e) => setCountry(e.target.value)}
            required
          />
    </fieldset>

   </div>

   <div className='profile-right-div'>

   <fieldset style={{ marginBottom: "1rem" }}>
  <legend style={{ fontWeight: "bold", fontSize: "1rem", marginBottom: "0.5rem" }}>Phone Number *</legend>
  <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
    <div style={{ flex: 1 }}>
      <CountrySelect
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />
    </div>

    <input
      className="profile-input"
      type="tel"
      placeholder="Phone number"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      style={{
        flex: 2,
        padding: "0.6rem",
        border: "1px solid #ccc",
        borderRadius: "8px",
        fontSize: "1rem"
      }}
      required
    />
  </div>
</fieldset>



   </div>

   <div className='profile-right-div'>

<fieldset>
      <legend>New Password*</legend>
      <input
        className="profile-input"
        type="text"
        // onChange={(e) => setCountry(e.target.value)}
        required
      />
</fieldset>

<fieldset>
      <legend>Confirm Password*</legend>
      <input
        className="profile-input"
        type="text"
        // onChange={(e) => setCountry(e.target.value)}
        required
      />
</fieldset>

   </div>

   <div className="add-to-cart-btn1" style={{width:"150px"}}>
     
      Update
</div>


</div>


</div>

<LastFooter/>
<Footer/>

    </div>
    
  )
}

export default Page