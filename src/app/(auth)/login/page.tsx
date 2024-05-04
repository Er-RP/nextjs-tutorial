import { auth, signIn } from '@/utils/auth'
import { redirect } from 'next/navigation'
import React from 'react'
export const checkLoggedIn = async () =>{
const sesssion = await auth()
if(sesssion){
  redirect("/")
}
}
const LoginPage =  async () => {
  await checkLoggedIn()
  const handleGoogleLogin = async () => {
    "use server"
await signIn()
  }
  return (
    <div>
      <form action={handleGoogleLogin} className='flex flex-col gap-5 justify-center items-center'>
      <button className='bg-button text-text-main py-1 px-2 w-fit rounded'>SignIn</button>
      </form>
    </div>
  )
}

export default LoginPage