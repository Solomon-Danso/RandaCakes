"use client"
import React, { useEffect } from 'react'

import Hero from '@/Pages/Hero/Hero'
import Navbar from '@/Pages/Navbar/Navbar'

import { apiServer, Categories } from '@/Constants/data'
import MultiProduct from '@/Pages/MultiProduct/MultiProduct'

import { useCartStore } from '@/Components/CartStore'


const Page = () => {

const { loadProducts, productList, loadCategory, categoryList } = useCartStore();

  // Load products and categories once on mount
  useEffect(() => {
    loadProducts();
    loadCategory();
  }, [loadProducts,loadCategory ]);

 useEffect(() => {
 
}, []);

 useEffect(() => {
    const storedValue = sessionStorage.getItem("he7dvavd1783bsdcgdas");
   
     const BrowserId = localStorage.getItem("BrowserId");

  if (!BrowserId) {
    const random20DigitNumber = Array.from({ length: 20 }, () =>
      Math.floor(Math.random() * 10)
    ).join("");

    localStorage.setItem("BrowserId", random20DigitNumber);
  }

    if (!storedValue) {
      const random20DigitNumber = Array.from({ length: 20 }, () =>
      Math.floor(Math.random() * 10)
    ).join("");

      const handleVisits = async () => {
        try {
          const response = await fetch(apiServer+"Visitors", {
            method: "POST",
            headers: {
              "ShortName":ShortName
            },
          });

          if (response.ok) {
           
            sessionStorage.setItem("he7dvavd1783bsdcgdas", random20DigitNumber);
           
          } else {
 
          }
        } catch (error) {

        }
      };

      handleVisits(); // Call the function inside the if block
    } 
  }, []);




  return (
    <div>

<Navbar/>
<Hero/>


{
  categoryList.map((data, index)=>(
  <div key={index}>
<MultiProduct cate={data.name}/>
  </div>))
}







    </div>
  )
}

export default Page