import Link from 'next/link'

const getUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  if(!res.ok){
    throw new Error("Something went wrong")
  }
  return res.json()
}

const BlogPage = async () => {
  const users = await getUsers()
  return (
    <div className='grid grid-cols-3 gap-y-6 gap-x-3'>
{users?.map((user:any)=>(
  <div className="p-2 flex flex-col gap-2 text-light rounded items-center bg-text-light" key={user?.id}>
    <p className='font-semibold text-lg'>{user?.name}</p>
    <p>{user?.email} - {user?.phone}</p>
    <Link href={`/blog/${user?.id}`} className='bg-button text-text-main py-1 px-2 w-fit rounded' prefetch={false}>View User</Link>
  </div>
))}
    </div>
  )
}

export default BlogPage