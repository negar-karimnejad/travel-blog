import CreateForm from "@/components/shared/CreateForm";
import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";

const Create = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return (
    <>
      <CreateForm user={user} />
    </>
  );
};
export default Create;
