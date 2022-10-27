import React from "react";

const FormList = (props) => {
  // const k = Math.random().toString();
  return (
    <ul>
      {props.users.map((user) => (
        <li key={user.id}>
          {user.name} {user.age} years old studying in {user.college} college
        </li>
      ))}
    </ul>
  );
};

export default FormList;
