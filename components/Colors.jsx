import React, {useState} from "react";

const Colors = () => {
  const [mark, setMark] = useState("")
  const [mark2, setMark2] = useState("")
  const [mark3, setMark3] = useState("")
  const handleMark = () => {
    setMark("⁕")
  }

  const handleMark2 = () => {
    setMark2("⁕")
  }

  const handleMark3 = () => {
    setMark3("⁕")
  }
  return (
    <div className="color-container">
        <h3>COLORS</h3>
      <div className="colors">
        <button onClick={handleMark} className="color1">{mark}</button>
        <button onClick={handleMark2} className="color2">{mark2}</button>
        <button onClick={handleMark3} className="color3">{mark3}</button>
      </div>
    </div>
  );
};

export default Colors;
