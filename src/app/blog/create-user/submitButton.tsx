"use client";
import { useFormStatus } from "react-dom";

const SubmitButton = () =>  {
    const { pending } = useFormStatus();
  return <button>{pending ?"Creating..." : "Create"}</button>
  }

export default SubmitButton