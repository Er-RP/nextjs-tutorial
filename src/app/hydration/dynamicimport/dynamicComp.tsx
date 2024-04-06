const DynamicComp = () => {
  const a = 1 ;
  const b = Math.random()
  console.log("Hydration issue",{a,b})
  return (
    <div>
      {a}
      <br/>
{b}
    </div>
  )
}

export default DynamicComp