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
    // transition: (props: Props) => (props.show ? "visibility 0.3s 1s" : ""),
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
    // background: `url(${ScrollBodyImg}) repeat-y`,
    // backgroundPosition: "center",
    // backgroundSize: "cover",
    color: COLORS.primary,
    height: (props: Props) => (props.show ? "60%" : 0),
    transition: "height 0.6s"
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
                  <>
                    <Typography className={classes.ranking}>
                      <span style={{ float: "left" }}>{idx + 1}.</span>
                      {userRank.username}
                    </Typography>
                    <Typography className={classes.ranking}>
                      <span style={{ float: "left" }}>{idx+1}.</span>
                      {userRank.username}
                    </Typography>
                    <Typography className={classes.ranking}>
                      <span style={{ float: "left" }}>{idx+1}.</span>
                      {userRank.username}
                    </Typography>
                  </>
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

// import React from "react";
// import LanternImg from "../../assets/lantern.png";
// import { makeStyles, Typography, Modal } from "@material-ui/core";
// import { COLORS } from "./../../theme";
// import ModalOverlay from "../../components/ModalOverlay";

// const useStyles = makeStyles({
//   container: {
//     position: "fixed",
//     display: "flex",
//     width: "100%",
//     justifyContent: "center",
//     height: "100%",
//     top: (props: Props) => (props.show ? 0 : "-100%"),
//     transition: "top 0.3s ease-out",
//     transitionDelay: "1s",
//     overflow: "hidden",
//     userSelect: "none",
//     "&:focus": {
//       outline: "none"
//     }
//   },
//   lantern: {
//     display: "block",
//     position: "absolute",
//     height: "auto"
//   },
//   overlay: {
//     opacity: (props: Props) => (props.show ? 0.5 : 0),
//     display: (props: Props) => (props.show ? "block" : "none"),
//     transition: "opacity 0.75s, display 0.75s"
//   },
//   textContainer: {
//     color: COLORS.accent,
//     position: "absolute",
//     top: 120, // Hard-code hack
//     textAlign: "center"
//   },
//   giantTitle: {
//     fontSize: "80px"
//   }
// });

// interface Props {
//   show?: boolean;
//   rank?: number;
// }

// const Ranking: React.FC<Props> = props => {
//   const classes = useStyles(props);
//   return (
//     <>
//       <Modal keepMounted open={props.show}>
//         <div className={classes.container}>
//           {/* <ModalOverlay className={classes.overlay} /> */}
//           <img className={classes.lantern} src={LanternImg} />
//           <div className={classes.textContainer}>
//             <Typography variant="h1">Your Ranking:</Typography>
//             <Typography variant="h1" className={classes.giantTitle}>
//               {props.rank}
//             </Typography>
//           </div>
//         </div>
//       </Modal>
//     </>
//   );
// };

// Ranking.defaultProps = { rank: 1 };

// export default Ranking;
