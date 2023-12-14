import React from "react";
interface tagProps {
  text: string[];
}
export default function Tag({ text }: tagProps) {
  return (
    <>
      <span className="uppercase bg-primary py-1 px-3 text-white inline-block text-sm self-center rounded-md">
        {text}
      </span>
    </>
  );
}
