
import { createUser } from "@/server/controllers/userController";
import SubmitButton from "./submitButton";

const CreateUser = () => {
  const createAdminUser = createUser.bind(null,true)
  return (
    <div className="flex">
      <form action={createAdminUser}>
        <input type="text" placeholder="Username" name="username"/>
        <input type="text" placeholder="Email" name="email"/>
        <input type="password" placeholder="Password" name="password"/>
       <SubmitButton/>
      </form>
    </div>
  );
};

export default CreateUser;

