import React from "react";
import Result from "../../models/Result";
import Question from "../../models/Question";
import ScoreElement from "./ScoreElement";

interface Props {
  question: Question;
  availableResults: Result;
}

const ScoreResultsGraph: React.FC<Props> = props => {
  if (!props.availableResults || props.availableResults.resultsMap.size === 0) {
    return (
      <>
        <div style={{ height: "100%" }} />
        {props.question.images.map(img => (
          <ScoreElement votes={0} scorePercent={1} />
        ))}
      </>
    );
  }

  let maxScore = Array.from(
    props.availableResults.resultsMap.values()
  ).reduce((accum, curr) => (accum > curr ? accum : curr));
  console.log("OMG MAX SCOREEEEEEEEEEEEEE", maxScore);
  if (!maxScore) {
    maxScore = 1;
  }

  return (
    <>
      <div style={{ height: "100%" }} />
      {props.question.images.map(img => {
        let votes = props.availableResults.resultsMap.get(img.id);
        if (!votes) {
          votes = 0;
        }

        return <ScoreElement votes={votes} scorePercent={votes / maxScore} />;
      })}
    </>
  );
};

export default ScoreResultsGraph;
