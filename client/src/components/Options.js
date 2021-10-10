import { useState } from "react";
import { useVote } from "../contexts/VoteContext";
import { sendMessage } from "../socketApi";

function Options() {
  const { options } = useVote();

  const [selectedOption, setSelectedOption] = useState();

  const handleSelect = ({ target }) => setSelectedOption(target.value);
  const handleSubmit = () => {
    sendMessage("new-vote", { selectedOption });
  };
  let total = 0;
  Object.values(options).map((item) => (total += item));

  const getPercent = (key) => {
    return ((options[key] * 100) / (total === 0 ? 1 : total)).toFixed(1);
  };

  return (
    <div id="options">
      <pre>{JSON.stringify(options, null, 2)}</pre>
      <h1>You selected: {selectedOption}</h1>
      <p>Total Vote: {total}</p>
      <label htmlFor="">
        <input type="radio" name="os" value="windows" onChange={handleSelect} />
        Windows ( % {getPercent("windows")})
      </label>
      <progress id="file" value={options["windows"]} max={total} />
      <label htmlFor="">
        <input
          type="radio"
          name="os"
          value="macos"
          defaultChecked
          onChange={handleSelect}
        />
        MacOS ( % {getPercent("macos")})
      </label>
      <progress id="file" value={options["macos"]} max={total} />
      <label htmlFor="">
        <input type="radio" name="os" value="linux" onChange={handleSelect} />
        Linux ( % {getPercent("linux")})
      </label>
      <progress id="file" value={options["linux"]} max={total} />
      <label htmlFor="">
        <input type="radio" name="os" value="other" onChange={handleSelect} />
        Something Else ( % {getPercent("linux")})
      </label>
      <progress id="file" value={options["other"]} max={total} />
      <div>
        <button onClick={handleSubmit}>Vote</button>
      </div>
    </div>
  );
}

export default Options;
