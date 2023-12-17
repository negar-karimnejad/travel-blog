"use client";
import { useEdgeStore } from "@/lib/edgestore";
import { useEffect, useState } from "react";
import { SingleImageDropzone } from "../ui/SingleImageDropZone";

export default function CreateForm({ user }: { user: any }) {
  const [file, setFile] = useState();
  const { edgestore } = useEdgeStore();
  const [imagePath, setImagePath] = useState("");

  const uploadImageHandler = async () => {
    if (file) {
      const res = await edgestore.publicFiles.upload({
        file,
      });
      setImagePath(res.url);
    }
  };
  useEffect(() => {
    if (file) {
      uploadImageHandler();
    }
  }, [file]);

  return (
    <div className="mt-8 mx-auto w-full max-w-3xl px-4">
      <div className="py-8 shadow rounded-lg px-10 bg-white">
        <h1 className="text-center font-extrabold text-2xl mt-10">
          Create a Post ✍
        </h1>
        {!user ? (
          <h2 className="text-center text-xl font-extrabold uppercase">
            Please Sign up or Log in to create a post!
          </h2>
        ) : (
          <SingleImageDropzone />
        )}
      </div>
    </div>
  );
}
