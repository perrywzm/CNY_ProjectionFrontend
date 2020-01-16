import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, Typography } from "@material-ui/core";
import AjaxService from "../../services/AjaxService";
import UserRank from "./../../models/UserRank";
import { COLORS } from "../../theme";
import ScrollTopImg from "../../assets/ldscrolltop.png";
import ScrollBodyImg from "../../assets/ldscrollbody.png";
import ScrollBtmImg from "../../assets/ldscrollbottom.png";

const useStyles = makeStyles({
  container: {
    position: "fixed",
    display: "flex",
    flexFlow: "column",
    width: "80%",
    margin: "0 10%",
    justifyContent: "center",
    height: "100%",
    visibility: (props: Props) => (props.show ? "visible" : "hidden"),
    overflow: "hidden",
    userSelect: "none",
    "&:focus": {
      outline: "none"
    }
  },
  textContainer: {
    position: "relative",
    width: "100%",
    padding: "0 30%",
    color: COLORS.primary,
    height: (props: Props) => (props.show ? "60%" : 0),
    transition: "height 0.6s",
    overflow: "hidden"
  },
  bodyImg: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    zIndex: -1
  },
  title: {
    textAlign: "center"
  },
  ranking: {
    fontSize: "2em",
    textAlign: "center"
  }
});

interface Props {
  show?: boolean;
  onClose?: () => void;
}

const LeaderboardScroll: React.FC<Props> = props => {
  const classes = useStyles({ show: props.show });
  const [leaderboard, setLeaderboard] = React.useState<UserRank[]>(null);

  React.useEffect(() => {
    if (props.show) {
      console.log("Fetching");
      AjaxService.fetchAllUsersRank().then(userRanks => {
        if (userRanks) {
          setLeaderboard(userRanks);
        }
      });
    }
  }, [props.show]);

  return (
    <Modal keepMounted open={Boolean(props.show)} onClose={props.onClose}>
      <div className={classes.container} onClick={props.onClose}>
        <img src={ScrollTopImg} />
        <div className={classes.textContainer}>
          <img className={classes.bodyImg} src={ScrollBodyImg} />
          <Typography variant="h1" className={classes.title}>
            Leaderboard
          </Typography>
          {leaderboard && (
            <>
              {leaderboard
                .filter(userRank => userRank.username !== "admin")
                .map((userRank, idx) => (
                  <Typography className={classes.ranking}>
                    <span style={{ float: "left" }}>{idx + 1}.</span>
                    {userRank.username}
                  </Typography>
                ))}
            </>
          )}
        </div>
        <img src={ScrollBtmImg} />
      </div>
    </Modal>
  );
};

export default LeaderboardScroll;
