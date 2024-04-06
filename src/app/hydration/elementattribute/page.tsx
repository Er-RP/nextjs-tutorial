'use client';

const ElementAttribute = () => {
   const a = 1 ;
  const b = Math.random()
  console.log("Hydration issue",{a,b})
  return (
    <div suppressHydrationWarning>
      {a}
      <br/>
{b}
    </div>
  )
}

export default ElementAttribute