"use client"
import React, { useEffect } from 'react'

import Hero from '@/Pages/Hero/Hero'
import Navbar from '@/Pages/Navbar/Navbar'
import HeroBar from '@/Pages/HeroBar/HeroBar'
import Product from '@/Pages/ProductCard/Product'
import Banner from '@/Pages/Banner/Banner'
import { Categories } from '@/Constants/data'
import MultiProduct from '@/Pages/MultiProduct/MultiProduct'
import FooterBanner from '@/Pages/FooterBanner/FooterBanner'
import Footer from '@/Pages/Footer/Footer'
import LastFooter from '@/Pages/Footer/LastFooter'
import ForYou from '@/Pages/ForYou/ForYou'
import ForYouContainer from '@/Pages/ForYou/ForYouContainer'
import { useCartStore } from '@/Components/CartStore'


const Page = () => {

const { loadProducts, productList, loadCategory, categoryList } = useCartStore();

  // Load products and categories once on mount
  useEffect(() => {
    loadProducts();
    loadCategory();
  }, [loadProducts,loadCategory ]);


  return (
    <div>

<Navbar/>
<Hero/>
<HeroBar/>


<ForYouContainer/>

{
  Categories.map((data, index)=>(
  <div key={index}>
<MultiProduct cate={data.name}/>
  </div>))
}



<FooterBanner/>
<Footer/>
<LastFooter/>


    </div>
  )
}

export default Page