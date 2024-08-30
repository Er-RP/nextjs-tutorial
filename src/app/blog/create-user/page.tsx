
'use client';
import { createUser } from "@/server/controllers/userController";
import SubmitButton from "./submitButton";
import { useFormState} from "react-dom";

const CreateUser = () => {
  const createAdminUser = createUser.bind(null,true)
  const [formState,formAction] = useFormState(createAdminUser,undefined)
  return (
    <div className="flex">
      <form action={formAction}>
        <input type="text" placeholder="Username" name="username"/>
        <input type="text" placeholder="Email" name="email"/>
        <input type="password" placeholder="Password" name="password"/>
       <SubmitButton/>
      </form>
      {JSON.stringify(formState)}
    </div>
  );
};

export default CreateUser;

