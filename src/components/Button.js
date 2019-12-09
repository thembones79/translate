import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
  static contextType = LanguageContext;
  render() {
    this.txt = this.context === "english" ? "Submit" : "Voorleggen";
    const text = this.context === "english" ? "Submit" : "Voorleggen";
    return (
      <button className="ui button primary">{`xx ${text} xxx ${this.txt}`}</button>
    );
  }
}

export default Button;
