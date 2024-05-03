import { createUser } from "@/server/controllers/userController";

const CreateUser = () => {
  return (
    <div className="flex">
      <form action={createUser}>
        <input type="text" placeholder="Username" name="username"/>
        <input type="text" placeholder="Email" name="email"/>
        <input type="password" placeholder="Password" name="password"/>
        <button>Create</button>
      </form>
    </div>
  );
};

export default CreateUser;
