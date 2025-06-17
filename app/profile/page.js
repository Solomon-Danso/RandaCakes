"use client"
import React, { useEffect, useState } from 'react'
import "./profile.css"
import Navbar from '@/Pages/Navbar/Navbar'
import LastFooter from '@/Pages/Footer/LastFooter'
import Footer from '@/Pages/Footer/Footer'
import { Accounts, apiServer, Countries } from '@/Constants/data'
import { useRouter } from 'next/navigation'
import { AES, enc } from 'crypto-js';
import CountrySelect from '@/Constants/CountrySelect'
import { Show } from '@/Constants/Alerts'


const Page = () => {

    const router = useRouter();
        const navigate = (path) => {
          router.push(path);
        };


const current = "/profile"
const [selectedCountry, setSelectedCountry] = useState(Countries[0]);


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
     navigate("/authenticate")    
    }
  }, []);

const [fullName, setFullName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = async () => {
  

    try {
        Show.showLoading("Processing Data.....");

        const postData = new FormData();
        
        postData.append("Username", fullName);
        postData.append("Phone", phoneNumber);
        postData.append("Email",email);
        postData.append("Password", password);
        postData.append("UserId", userInfo.UserId);
        

        const res = await fetch(apiServer + "UpdateCustomer", {
          method: "POST",
          headers: {
            "UserId": userInfo.UserId,
            "SessionId": userInfo.SessionId
          },
          body: postData,
        });

        const data = await res.json();
       

        if (res.ok) {
           Show.hideLoading();

           Show.Success(data.message);

        } else {
          Show.Attention(data.message || "Signup failed");
        }
      


    } catch (err) {
      console.error(err);
      Show.Attention("Something went wrong. Try again.");
    }
  };

const LogOut = () => {
    sessionStorage.clear();
    Show.Success("Logged out successfully");
    navigate("/");
  }



  return (
    <div>
<Navbar/>
<div className='profile'>

<div className='profile-left'>

<div className='profile-left-1'>
<div style={{width:"120px", height:"120px", borderRadius:"50%", backgroundColor:"#EC407A", color:"white", textAlign:"center", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", fontSize:"50px", fontWeight:"bold"}}> {userInfo?.FullName?.charAt(0)?.toUpperCase() || ""}</div>
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
   <div style={{fontSize:"1.2rem", fontFamily:"Hydot-SemiBold", paddingBottom:"1rem"}}>My Profile</div><hr/>

   <div className='profile-right-div'>

    <fieldset>
          <legend>Full Name *</legend>
          <input
            className="profile-input"
            type="text"
            onChange={(e) => setFullName(e.target.value)}
            required
          />
    </fieldset>

    <fieldset>
          <legend>Phone Number *</legend>
          <input
            className="profile-input"
            type="text"
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
    </fieldset>

   </div>

   <div className='profile-right-div'>



    <fieldset>
          <legend>Password*</legend>
          <input
            className="profile-input"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
    </fieldset>


   </div>



 <div className='profile-right-div'>
 
 <div className="add-to-cart-btn1" style={{width:"150px"}} onClick={()=> handleSubmit()}>Update</div>
 <div className="add-to-cart-btn1" style={{width:"150px", backgroundColor:"#EC407A"}} onClick={()=> LogOut()}>LogOut</div>

 </div>


</div>


</div>

<LastFooter/>
<Footer/>

    </div>
    
  )
}

export default Page