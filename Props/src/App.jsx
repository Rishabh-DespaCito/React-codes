import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProfileCard from "./ProfileCard";

function App() {
  const handleHobbyClick = (hobby) => {
    alert();
  };
  return (
    <div className="app-container">
      <h1>Hello</h1>
      <ProfileCard
        name="Rishabh"
        age={25}
        num={2}
        hobbies={["Swimming", "Hiking", "reading"]}
        onHobbyClick={handleHobbyClick}
      />
      <ProfileCard
        name="Vaibhav"
        age={26}
        num={2}
        hobbies={["Web Development", "gaming", "reading"]}
        onHobbyClick={handleHobbyClick}
      />
    </div>
  );
}

export default App;
