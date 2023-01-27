import React, { useState } from "react";

import Card from "../UI/Card";
import "./TextContainerItem.css";

const TextContainer = (props) => {
  const [heading, setHeading] = useState(
    "The farmers will make more money. Your lunch will not be imported, cassava garri ewa and ehhh ehhhhnn. The farmer will make money, the dinner would be cassava eba ewa and everything."
  );

  const changeText = () => {
    setHeading(
      "A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba."
    );
  };

  return (
    <Card className="container">
      <Card className="inner-container">
        <h2>{heading}</h2>
      </Card>
      <button className="button" onClick={changeText}>
        Change Text
      </button>
    </Card>
  );
};

export default TextContainer;
