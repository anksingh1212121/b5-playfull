// Skills.jsx

import { useState } from "react";
import "./Skills.css";

function Skills({ friends }) {
  const [search, setSearch] = useState("");
  const [newSkill, setNewSkill] = useState("");

  const filteredFriend = friends.find(
    (friend) => friend.name.toLowerCase() === search.toLowerCase(),
  );

  const addSkill = () => {
    if (filteredFriend && newSkill.trim() !== "") {
      filteredFriend.skills.push(newSkill);

      setNewSkill("");
    }
  };

  return (
    <div className="main">
      <input
        type="text"
        placeholder="Search name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredFriend && (
        <div>
          <h2>{filteredFriend.name}</h2>

          <h1>Skills:</h1>

          {filteredFriend.skills.map((skill, index) => (
            <p key={index}>{skill}</p>
          ))}

          {filteredFriend.name === "Harendra" && (
            <div>
              <input
                type="text"
                placeholder="Add skill"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
              />

              <button onClick={addSkill}>Add</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Skills;
