"use client"

import React, {useState, useEffect} from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import Profile from '@components/Profile'

const MyProfile = () => {
    const {data: session} = useSession();
    const router = useRouter();

    const [posts, setPosts] = useState([])

     useEffect(() => {
       const fetchPost = async () => {
         const response = await fetch(`/api/users/${session?.user.id}/posts`); // calls the fetch function of the prompt folder
         const data = await response.json(); // turns the data into a json
         setPosts(data);
       };

       if (session?.user.id) fetchPost();
     }, []);


    const handleEdit = (post) => {
        router.push(`/update-prompt?id=${post._id}`)
    }

    const handleDelete = async (post) => {
      const hasConfirmed = confirm("Are you sure you want to delete this post?");

      if(hasConfirmed){
        try{
          await fetch(`/api/prompt/${post._id.toString()}`, {
            method: 'DELETE',
          });

          const filteredPosts = posts.filter((p) => p._id !== post._id)

          setPosts(filteredPosts);
        } catch(err){
          console.error(err);
          alert("Failed to delete post");
        }
      }
    }

  return (
    <Profile
        name="My"
        desc= "Welcome to your personalized profile page"
        data={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
    />
  )
}

export default MyProfile;