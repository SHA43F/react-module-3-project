import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import FormList from "./Components/FormList";

function App() {
  const [usersList, setContent] = useState([]);
  const dataValues = (n, a, c) => {
    setContent((prevUserList) => {
      return [...prevUserList, { name: n, age: a, college: c ,id:Math.random().toString()}];
    });
  };

  return (
    <React.Fragment>
      <Form addUserData={dataValues}></Form>
      <FormList users={usersList} />
    </React.Fragment>
  );
}

export default App;
