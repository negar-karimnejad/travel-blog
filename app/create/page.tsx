import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../utils/auth";
import CreateForm from "@/components/shared/CreateForm";

export default async function Create() {
  const user = await getServerSession(authOptions);
  return <CreateForm />;
}
