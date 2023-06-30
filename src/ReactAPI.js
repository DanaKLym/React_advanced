import "./ReactAPI.css";
import { RadioGroup, RadioOption } from "./Radio";
import { useState } from "react";

function ReactAPI() {
  const [selected, setSelected] = useState("");
  return (
    <div className="ReactAPI">
      <h2>How did you hear about Little Lemon?</h2>
      <RadioGroup onChange={setSelected} selected={selected}>
        <RadioOption value="social_media">Social Media</RadioOption>
        <RadioOption value="friends">Friends</RadioOption>
        <RadioOption value="advertising">Advertising</RadioOption>
        <RadioOption value="other">Other</RadioOption>
      </RadioGroup>
      <button className="ReactAPIbutton" disabled={!selected}>Submit</button>
    </div>
  );
}

export default ReactAPI;
