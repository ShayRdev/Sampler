import React, { useState, useEffect } from 'react';
import * as postAPI from '../../utilities/posts-api';
import EditPostForm from '../EditPostForm/EditPostForm';


export default function PostsList({ user, setUpdate, update }) {
  const [allPosts, setAllPosts] = useState([]);
  const [updateState, setUpdateState] = useState(true);

  async function getPosts() {
    try {
      const fetchedData = await postAPI.getAllPosts();
      setAllPosts(fetchedData);
    } catch (error) {
      console.error(error, 'error for getPost');
    }
  }

  useEffect(
    function () {
      getPosts();
      setUpdate(false);
    },
    [update, updateState]
  );

  async function handleDelete(id) {
    await postAPI.deletePost(id);
    setUpdate(true);
  }

  async function handleEdit(id) {
    await postAPI.updatePost(id);
    setUpdate(true);
  }

  return (
   <div className="max-w-md mx-auto rounded-xl overflow-hidden md:max-w-2xl">
  {allPosts.map((post) => (
    <div key={post._id} className="bg-white rounded-lg shadow-md my-4 p-4 pb-10">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
            alt=""
          />
        </div>
        <div className="ml-3">
          <h3 className="text-lg font-medium text-gray-900">{post.username}</h3>
          <p className="text-sm font-medium text-gray-500">{new Date(post.createdAt).toLocaleDateString()}</p>
          <div className='border-solid w-full'></div>
        </div>
      </div>

      <div className="mt-3">
        <h3 className="text-xl mb-2">{post.subject}</h3>
        <p className="text-sm mb-2">{post.body}</p>
      </div>

      {user._id === post.user && (
        <div className="mt-5 flex justify-end">
          <button
            type="button"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            onClick={() => handleDelete(post._id)}
          >
            Delete
          </button>
          <EditPostForm
            id={post._id}
            updateState={updateState}
            setUpdateState={setUpdateState}
            handleEdit={handleEdit}
          />
        </div>
      )}
    </div>
  ))}
</div>

  );
}
