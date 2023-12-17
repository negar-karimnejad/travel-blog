import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../utils/auth";
import CreateForm from "@/components/shared/CreateForm";

export default async function Create() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return <CreateForm user={user} />;
}
