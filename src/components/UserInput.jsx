import React, { useState } from "react";
import { changeUser } from "../store/slices/user.slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const UserInput = () => {
  const [userName, setUserName] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    dispatch(changeUser(userName));
    navigate("/pokedex");
  };

  const random = Math.floor(Math.random() * 8) + 1;

  return (
    <div>
      <header>
        <img src="./assets/pokedex-title.png" alt="" />
      </header>
      <form onSubmit={submit} className="submit-form">
        <img src={`./assets/ash${random}.png`} alt="" />
        <p><b>Hi trainer!</b> Please write your name to get started!</p>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Type here..."
        />
        <button><i className="fa-solid fa-paper-plane"></i></button>
      </form>
    </div>
  );
};

export default UserInput;
