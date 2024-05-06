import { login } from '@/server/controllers/userController'
import { auth, signIn } from '@/utils/auth'
import { RedirectType, redirect } from 'next/navigation'
import React from 'react'
export const checkLoggedIn = async () =>{
const sesssion = await auth()
console.log("RP session :",sesssion)
if(sesssion){
  redirect("/",RedirectType.replace)
}
}
const LoginPage =  async () => {
  await checkLoggedIn()
  const handleGoogleLogin = async () => {
    "use server"
await signIn("google")
  }
  const handleGitHubLogin = async () => {
    "use server"
await signIn("github",{redirectTo:"/"})
  }
  return (
    <div className='flex flex-col gap-8 justify-center items-center'>
      <form action={login} className='flex flex-col gap-5 '>
        <input type="text" name="username" placeholder='Username'  className='px-2 py-1'/>
        <input type='password' name="password" placeholder='Password' className='px-2 py-1'/>
      <button className='bg-button text-text-main py-1 px-2 w-fit rounded  place-self-center'>Login</button>
      </form>
      <form action={handleGoogleLogin}  className='flex flex-col gap-5 '>
      <button className='bg-button text-text-main py-1 px-2 w-fit rounded'>Google</button>
      <button formAction={handleGitHubLogin} className='bg-black text-text-main py-1 px-2 w-fit rounded'>GitHub</button>
      </form>
    </div>
  )
}

export default LoginPage