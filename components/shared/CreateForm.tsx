"use client";
import { useEdgeStore } from "@/lib/edgestore";
import { useState } from "react";
import SingleImageDropZone from "../ui/SingleImageDropZone";

// interface res {
//   url: string;
//   size: number;
//   uploadedAt: Date;
//   metadata: Record<string, never>;
//   path: Record<string, never>;
//   pathOrder: string[];
// }

export default function CreateForm() {
  const [file, setFile] = useState<File>();
  const { edgestore } = useEdgeStore();

  return (
    <div>
      <SingleImageDropZone
        width={200}
        height={200}
        value={file}
        onChange={(file) => {
          setFile(file);
        }}
      />
      <button
        onClick={async () => {
          if (file) {
            const res = await edgestore.publicFiles.upload({
              file,
              onProgressChange: (progress) => {
                // you can use this to show a progress bar
                console.log(progress);
              },
            });
            // you can run some server action or api here
            // to add the necessary data to your database
            console.log(res);
          }
        }}
      >
        Upload
      </button>
    </div>
  );
}
