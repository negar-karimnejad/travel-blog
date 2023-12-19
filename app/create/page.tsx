import CreateForm from "@/components/shared/CreateForm";
import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
import { userTypes } from "@/types/userTypes";

const Create = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return (
    <>
      <CreateForm user={user as userTypes} />
    </>
  );
};
export default Create;
