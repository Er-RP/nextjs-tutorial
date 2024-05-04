import { Suspense } from "react"
import DummyUser from "./dummyUser"

export const generateMetadata = async ({params}:any) =>{
  const {slug} = params
  const user = await getUser({id:slug})
  return {
    title : `${user?.name} view`,
    description: user?.email
  }
}


const getUser = async ({id}:{id:any}) => {
const res = await fetch(`http://127.0.0.1:3000/api/blog/${id}`,{cache:"no-store"})
  if(!res.ok){
    throw new Error("Something went wrong")
  }
  return res.json()
}
const SingleBlogPage = async ({params}:any) => {
  const {slug} = params
  const user = await getUser({id:slug})
  return (
    <div>
      <p className="font-bold text-lg my-2 text-center">User Data </p>
      <span>{JSON.stringify(user)}</span>
      <Suspense fallback={<>Loading DU ....</>}>
      <DummyUser/>
      </Suspense>
      </div>
  )
}

export default SingleBlogPage