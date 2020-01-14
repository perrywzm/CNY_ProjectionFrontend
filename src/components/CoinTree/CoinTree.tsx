import React from "react";
import CoinImg from "./coin.png";
import "./CoinTree.css";

interface Props {
  style?: Record<string, string>;
  className?: Record<string, string>;
}

const CoinTree: React.FC<Props> = props => {
  return (
    <div className={`pFallingCoint ${props.className}`} style={props.style}>
      <img src={CoinImg} className="coin1" />
      <img src={CoinImg} className="coin2" />
      <img src={CoinImg} className="coin3" />
      <img src={CoinImg} className="coin4" />
      <img src={CoinImg} className="coin5" />
    </div>
  );
};

export default CoinTree;
