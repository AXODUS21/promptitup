"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Correctly import useRouter
import { usePathname } from "next/navigation"; // Import usePathname to get the current path
import Profile from "@components/Profile";

const OtherProfile = () => {
  const pathname = usePathname(); // Get the current pathname
  const id = pathname.split("/").pop(); // Extract the ID from the pathname

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      if (id) {
        const response = await fetch(`/api/users/${id}/posts`);
        const data = await response.json(); // Log the fetched posts for debugging purposes
        setPosts(data);
       
      }
    };

    fetchPost();
  }, [id]); // Update dependency to use id directly

  return (
    <Profile
      name={posts[0]?.creator.username}
      desc="You are viewing another person's profile"
      data={posts}
    />
  );
};

export default OtherProfile;
