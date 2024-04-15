import { useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";

const Form = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        type="text"
        value={value}
        onChange={onChange}
        label="What do you wanna do today?"
        placeholder="Enter your todo, one at a time 😄"
      />
      <Button type="submit"> Add Todo</Button>
    </form>
  );
};

export default Form;
