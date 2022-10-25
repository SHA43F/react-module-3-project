import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import FormList from "./Components/FormList";

function App() {
  const [usersList, setContent] = useState([]);
  const dataValues = (n, a) => {
    setContent((prevUserList) => {
      return [...prevUserList, { name: n, age: a, id:Math.random().toString()}];
    });
  };

  return (
    <div>
      <Form addUserData={dataValues}></Form>
      <FormList users={usersList} />
    </div>
  );
}

export default App;
