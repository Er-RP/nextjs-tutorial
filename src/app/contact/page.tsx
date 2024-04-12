import { getUsers } from '@/server/controllers/userController'
import React from 'react'

const Contact = async () => {
  const users = await getUsers()

  if(users?.length < 1){
    return <p>No User Found</p>
  }
  return (
    <div>{JSON.stringify(users)}</div>
  )
}

export default Contact