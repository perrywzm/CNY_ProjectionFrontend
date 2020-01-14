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
        height: `${props.scorePercent * 95 + 5}%`,
        background: COLORS.accent,
        textAlign: "center",
        fontSize: "2em",
        color: COLORS.primary
      }}
    >
      {props.votes !== -1 ? props.votes : ""}
    </div>
  );
};

export default ScoreElement;
