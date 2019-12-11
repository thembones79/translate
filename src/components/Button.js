import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
import "./Button.css";

class Button extends React.Component {
  render() {
    return (
      <ColorContext.Consumer>
        {color => {
          return (
            <button className={`ui button shadow ${color}`}>
              <LanguageContext.Consumer>
                {({language}) => (language === "english" ? "Submit" : "Voorleggen")}
              </LanguageContext.Consumer>
            </button>
          );
        }}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
