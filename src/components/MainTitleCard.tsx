import React from "react";
import ChineseTitleCard from "./ChineseTitleCard";
import TitleCard from "./TitleCard";
import { Typography } from "@material-ui/core";

interface Props {}

const MainTitleCard: React.FC<Props> = () => {
  return (
    <>
      <ChineseTitleCard />
      <TitleCard>
        <Typography variant="h1" style={{ fontSize: "64px" }}>
          GREAT MINDS THINK ALIKE
        </Typography>
      </TitleCard>
    </>
  );
};

export default MainTitleCard;
