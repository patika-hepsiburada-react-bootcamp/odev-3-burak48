import React from "react";

function Options() {
  return (
    <div id="options">
      <label htmlFor="">
        <input type="radio" name="os" />
        Windows
      </label>
      <label htmlFor="">
        <input type="radio" name="os" defaultChecked />
        MacOS
      </label>
      <label htmlFor="">
        <input type="radio" name="os" />
        Linux
      </label>
      <label htmlFor="">
        <input type="radio" name="os" />
        Something Else
      </label>
      <button>Vote</button>
    </div>
  );
}

export default Options;
