'use client';
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';

const NavigationTest = () => {
    const router = useRouter();
    useEffect(()=>{
        router.prefetch("/about") /* Used to prefetch the router and only works on the Prod*/
    },[])
  return (
  <div className="flex flex-wrap gap-4 mx-[3%]">
    <Link href="/" prefetch={false} className='bg-text-main text-main p-1'>Home without prefetch</Link>
    <button className="bg-text-main text-main px-2 py-1" onClick={()=>router.push("/")}>Home (PUSH)</button>
    <button className="bg-text-main text-main px-2 py-1" onClick={()=>router.replace("/")}>Home (Replace)</button>
    <button className="bg-text-main text-main px-2 py-1" onClick={()=>router.refresh()}>Refresh</button>
    <button className="bg-text-main text-main px-2 py-1" onClick={()=>router.back()}>Back</button>
    <button className="bg-text-main text-main px-2 py-1" onClick={()=>router.forward()}>Forward</button>
    {/* <button className="bg-text-main text-main px-2 py-1" onClick={()=>router.prefetch("/")}>Home (Prefetch)</button> */}

  </div>

  )
}

export default NavigationTest