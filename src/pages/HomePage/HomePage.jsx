import React, { useState } from 'react'
import NewPostForm from '../../components/NewPostForm/NewPostForm'
import PostsList from '../../components/PostsList/PostsList'
import { getUser } from '../../utilities/users-service'
import EditPostForm from '../../components/EditPostForm/EditPostForm';


export default function HomePage() {
  const [user, setUser] = useState(getUser());
  const [update, setUpdate] = useState(false);

  return (
    <>
    <div className="bg-cover" style={{ backgroundImage: "url('/images/Gotham.jpeg')" }}>
      <NewPostForm user={user} setUser={setUser} setUpdate={setUpdate}/>
      <PostsList update={update} setUpdate={setUpdate} user={user} setUser={setUser}/>
    </div>
    </>
  )
}


