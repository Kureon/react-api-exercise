import { useState } from "react";

export const FormFields = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [website, setWebsite] = useState();

  return (
    <form>
      <input type="text" name="name" id="" required />
      <input type="email" name="email" id="" required />
      <input type="text" name="website" id="" required />
    </form>
  );
};
