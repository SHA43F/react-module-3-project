import React, { useState } from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");

const Form = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [isNull, setisNull] = useState(false);
  const [isLess, setisLess] = useState(false);
  const usernameValue = (event) => {
    setUsername(event.target.value);
  };

  const ageValue = (event) => {
    setAge(event.target.value);
  };

  const closeNull = () => {
    setisNull(!isNull);
  };
  const closeLess = () => {
    setisLess(!isLess);
  };

  const submitUser = (e) => {
    e.preventDefault();
    if (username.length === 0 || age.length === 0) {
      setisNull(!isNull);
      return;
    }
    if (age < 1) {
      setisLess(!isLess);
      return;
    }
    // const submitUserData ={
    //     id:Math.random().toString(),
    //     nameVal: username,
    //     ageVal: age
    // }
    props.addUserData(username, age);
    setUsername("");
    setAge("");
  };
  return (
    <form onSubmit={submitUser}>
      <div>
        <label>Username</label>
        <input type="text" value={username} onChange={usernameValue}></input>
      </div>
      <div>
        <label>Age(Years)</label>
        <input type="number" value={age} onChange={ageValue}></input>
      </div>
      <button type="submit">Add User</button>
      <Modal
        isOpen={isNull}
        onRequestClose={closeNull}
        contentLabel="isNullDialog"
      >
        <h2>Alert!</h2>
        <p>Please fill the empty blanks.</p>
        <button onClick={closeNull}>Close</button>
      </Modal>
      <Modal
        isOpen={isLess}
        onRequestClose={closeLess}
        contentLabel="isLessDialog"
      >
        <h2>Alert!</h2>
        <p>Please Enter Valid Age.</p>
        <button onClick={closeLess}>Close</button>
      </Modal>
    </form>
  );
};

export default Form;
