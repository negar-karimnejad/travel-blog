"use client";
import { useEdgeStore } from "@/lib/edgestore";
import { useEffect, useState } from "react";
import { userTypes } from "@/types/userTypes";
import { createPost } from "@/app/actions";
import Form from "../ui/Form";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { SingleImageDropzone } from "../ui/SingleImageDropZone";

export default function CreateForm({ user }: { user: userTypes }) {
  const [file, setFile] = useState<File>();
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
          <>
            <SingleImageDropzone
              onChange={(file) => {
                setFile(file);
              }}
              width={200}
              height={200}
              value={file}
            />

            <Form
              action={createPost}
              onSubmit={() => setFile(undefined)}
              className="flex flex-col gap-5 mt-5"
            >
              <Input type="hidden" name="image" value={imagePath} />
              <Input name="title" type="text" placeholder="Enter Title" />
              <textarea
                required
                name="description"
                rows={10}
                placeholder="Write Here..."
                className="text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6 border w-full border-gray-200 p-2 rounded-md py-1.5"
              ></textarea>
              <select
                name="category"
                required
                className="text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6 border w-full border-gray-200 p-2 rounded-md py-1.5"
              >
                <option value="" disabled selected>
                  Choose Tag
                </option>
                <option value="Adventure">Adventure</option>
                <option value="Colture">Colture</option>
                <option value="Journey">Journey</option>
                <option value="Discovery">Discovery</option>
                <option value="Wonderlust">Wonderlust</option>
              </select>
              <Input name="email" type="hidden" value={user?.email || ""} />{" "}
              <Button type="submit" text="Create" aria="create blog" />
            </Form>
          </>
        )}
      </div>
    </div>
  );
}
