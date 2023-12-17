"use client";

import { deletePost } from "@/app/actions";
import { PostTypes } from "@/types/postTypes";
import { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";

const DeletePosts: React.FC<{ post: PostTypes }> = ({ post }) => {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Button aria="delete post" onClick={handleDelete} text="Delete" />
      {showModal && (
        <>
          <div
            onClick={() => setShowModal(false)}
            className="fixed inset-0 flex items-center justify-center z-50"
          >
            <div className="w-screen h-screen bg-black/40 absolute" />
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white p-6 rounded shadow-lg z-40"
            >
              <p>Are you sure you want to delete this post?</p>
              <div className="flex gap-3 mt-5">
                <form action={deletePost} onSubmit={closeModal}>
                  <Input type="hidden" name="postId" value={post.id} />
                  <Button aria="delete post" type="submit" text="Yes" />
                </form>
                <Button
                  aria="cancle delete post"
                  onClick={closeModal}
                  text="No"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DeletePosts;
