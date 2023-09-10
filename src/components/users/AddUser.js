import { useState } from "react";
import Card from "../ui/Card";
import "../../index.css";
import Button from "./Button";

const AddUser = (props) => {
  const initialInput = { username: "", age: "" };
  const [userInput, setUserInput] = useState(initialInput);
  const addUserHandler = (event) => {
    event.preventDefault();
    props.onAddUser(userInput);
    setUserInput({ username: "", age: "" });
  };

  // const clickHandler = () => {
  //   console.log("click handled");
  // };

  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return { ...prevInput, [input]: value };
    });
  };

  return (
    <Card className="input">
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={(event) =>
            inputChangeHandler("username", event.target.value)
          }
          value={userInput.username}
        />
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          onChange={(event) => inputChangeHandler("age", event.target.value)}
          value={userInput.age}
        />
        <Button
          className="button"
          buttonName="Add"
          type="submit"
          onClick={addUserHandler}
        >
          Add User
        </Button>
      </form>
    </Card>
  );
};

export default AddUser;
