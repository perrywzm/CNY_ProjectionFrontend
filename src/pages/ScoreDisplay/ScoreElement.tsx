import React from "react";
import { COLORS } from "../../theme";

interface Props {
  votes: number;
  scorePercent: number;
}

const ScoreElement: React.FC<Props> = props => {
  return (
    <div
      style={{
        margin: "4px 5vw",
        flex: 1,
        minHeight: "1em",
        height:
          props.votes !== -1
            ? `calc(${props.scorePercent * 85}% + 1em)`
            : "1em",
        background: COLORS.accent,
        textAlign: "center",
        fontSize: "2em",
        color: COLORS.primary,
        position: "relative",
        lineHeight: "1em",
        transition: "height 0.5s ease-out"
      }}
    >
      {props.votes !== -1 ? props.votes : ""}
    </div>
  );
};

export default ScoreElement;
