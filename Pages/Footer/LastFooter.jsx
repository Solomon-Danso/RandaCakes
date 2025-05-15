import React from 'react'
import "./Footer.css"
import { Socials } from '@/Constants/data'

const LastFooter = () => {
  return (
    <div className='footer'>

        <div style={{display:"flex", flexDirection:"row", gap:"10px"}}>
            {
                (Socials || []).map((data, index) => (
                    <a href={data.url} key={index} target='_blank'>
                        <div>{data.icon}</div>
                    </a>
                ))
            }
        </div>

        <div> © {new Date().getFullYear()} Randa Cakes. All rights reserved.</div>

            <div className='theEnd'></div>


    </div>
  )
}

export default LastFooter