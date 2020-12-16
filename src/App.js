import React, { useState } from "react";
import "./styles.css";

const emojiObject = {
  "💌": "Love Letter",
  "🕳": "Hole",
  "🛀": "Person Taking Bath",
  "🛌": "Person in Bed",
  "🔪": "Kitchen Knife",
  "🏺": "Amphora",
  "🗺️": "World Map",
  "🧭": "Compass",
  "🧱": "Brick",
  "💈": "Barber Pole",
  "🦽": "Manual Wheelchair",
  "🦼": "Motorized Wheelchair",
  "🛢": "Oil Drum",
  "🛎️": "Bellhop Bell",
  "🧳": "Luggage",
  "⌛": "Hourglass Done",
  "⌚": "Watch",
  "⏰": "Alarm Clock"
};

var emojisWeHave = Object.keys(emojiObject);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiClickHandler(emojis) {
    var meaning = emojiObject[emojis];
    setMeaning(meaning);
  }

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiObject[userInput];

    if (meaning === undefined) {
      meaning = "not in our database";
    }
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h2>Emoji Object Meaning</h2>
      <input className="input" onChange={emojiInputHandler} />
      <h2> Meaning ~ {meaning} </h2>

      <h3>emojis we have</h3>
      {emojisWeHave.map(function (emojis) {
        return (
          <span
            onClick={() => emojiClickHandler(emojis)}
            key={emojis}
            style={{ padding: "10px", fontSize: "2rem", cursor: "pointer" }}
          >
            {emojis}
          </span>
        );
      })}
    </div>
  );
}
