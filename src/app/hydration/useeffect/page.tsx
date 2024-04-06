'use client';

import { useEffect, useState } from "react";

//Fix 

const Hydration1 = () => {
  const [isClient,setIsClient]=useState(false)

  const a = 1 ;
  const b = Math.random()
  console.log("Hydration issue",{a,b})

  useEffect(()=>{
    setIsClient(true)
  },[])
  return (
    <div>
      {a}
      <br/>
{ isClient && b}
    </div>
  )
}

export default Hydration1