import React, { useState, useRef, useEffect } from "react";

import Button from "./UI/Button";
import ErrorModal from "./UI/ErrorModal";

const Form = (props) => {
  // const uName = useRef();
  // const uAge = useRef();
  // const uCollege = useRef();
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [college, setCollege] = useState("");
  const [error, setError] = useState();
  const [formvalid, setFormValid] = useState(false);

  const usernameValue = (event) => {
    setUsername(event.target.value);
  };

  const ageValue = (event) => {
    setAge(event.target.value);
  };

  const collegeValue = (event) => {
    setCollege(event.target.value);
  };

  const onCloseModal = () => {
    setError();
  };
  
  useEffect(() => {
    setFormValid(college.trim().length === 0);
  }, [college, age, username])
  

  const submitUser = (e) => {
    e.preventDefault();
    // const username = uName.current.value;
    // const age = uAge.current.value;
    // const college = uCollege.current.value;
    if (
      username.trim().length === 0 ||
      age.trim().length === 0 ||
      college.trim().length === 0
    ) {
      setError({
        title: "Alert!",
        message: "Please Fill the inputs.",
        boolean: true,
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Alert!",
        message: "Please Enter Valid Age.",
        boolean: true,
      });
      return;
    }
    
    props.addUserData(username, age, college);
    setUsername("");
    setAge("");
    setCollege("");
    // uName.current.value = '';
    // uAge.current.value = '';
    // uCollege.current.value = '';
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          boolean={error.boolean}
          onClose={onCloseModal}
        />
      )}
      <div></div>
      <form onSubmit={submitUser}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={usernameValue}
            // ref={uName}
          ></input>
        </div>
        <div>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={ageValue}
            // ref={uAge}
          ></input>
        </div>
        <div>
          <label htmlFor="college">College</label>
          <input
            id="college"
            type="text"
            value={college}
            onChange={collegeValue}
            // ref={uCollege}
          ></input>
        </div>
        <Button type="submit" validForm={formvalid} >Add User</Button>
      </form>
    </React.Fragment>
  );
};

export default Form;
