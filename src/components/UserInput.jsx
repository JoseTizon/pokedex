import React, { useState } from "react";
import { changeUser } from "../store/slices/user.slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import pokedex from '../assets/pokedex.png'
import ash1 from '../assets/ash1.png'

const UserInput = () => {
  const [userName, setUserName] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    dispatch(changeUser(userName));
    navigate("/pokedex");
  };

  return (
    <div>
      <header>
        <img src={pokedex} alt="pokedex title" />
      </header>
      <form onSubmit={submit} className="submit-form">
        <img src={ash1} alt="ash picture" />
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
