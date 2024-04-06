'use client';

import dynamic from "next/dynamic"

const DynamicComp = dynamic(()=> import('./dynamicComp'),{ssr:false,loading: () => <p>Loading...</p>})

const Hydration2 = () => {
  return (
    <DynamicComp/>
  )
}

export default Hydration2