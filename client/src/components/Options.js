import { useState } from "react";
import { sendMessage } from "../socketApi";

function Options() {
  const [selectedOption, setSelectedOption] = useState();

  const handleSelect = ({ target }) => setSelectedOption(target.value);
  const handleSubmit = () => {
    sendMessage("new-vote", { selectedOption });
  };

  return (
    <div id="options">
      <h1>{selectedOption}</h1>
      <label htmlFor="">
        <input type="radio" name="os" value="windows" onChange={handleSelect} />
        Windows
      </label>
      <progress id="file" value="32" max="100" />
      <label htmlFor="">
        <input
          type="radio"
          name="os"
          value="macos"
          defaultChecked
          onChange={handleSelect}
        />
        MacOS
      </label>
      <progress id="file" value="32" max="100" />
      <label htmlFor="">
        <input type="radio" name="os" value="linux" onChange={handleSelect} />
        Linux
      </label>
      <progress id="file" value="32" max="100" />
      <label htmlFor="">
        <input type="radio" name="os" value="other" onChange={handleSelect} />
        Something Else
      </label>
      <progress id="file" value="32" max="100" />
      <div>
        <button onClick={handleSubmit}>Vote</button>
      </div>
    </div>
  );
}

export default Options;
