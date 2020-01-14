// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import { Input, Button, Typography, Box, TextField } from "@material-ui/core";
// import AjaxService from "../../services/AjaxService";
// import { useHistory, useParams } from "react-router-dom";
// import { useUserMedia } from "../../services/MediaService";
// import ChineseTitleCard from "../../components/ChineseTitleCard";
// import MainTitleCard from "../../components/MainTitleCard";
// import TextInputScroll from "../../components/TextInputScroll";
// import { COLORS } from "../../theme";
// import { useDependency } from "./../../services/DependencyInjector";
// import GameService from "./../../game/GameService";
// import queryString from "query-string";;

// const useStyles = makeStyles({
//   container: {
//     display: "flex",
//     flexFlow: "column",
//     height: "100%"
//   },
//   title: {
//     fontSize: "40px"
//   }
// });

// interface Props {}

// const SplashPage: React.FC<Props> = () => {
//   const classes = useStyles({});
//   const params = useParams<{ tableId?: string }>();
//   const history = useHistory();
//   const gameService = useDependency(GameService);
//   console.log(gameService);

//   const [isConnecting, setConnecting] = React.useState(false);
//   const [tableId, setTableId] = React.useState("");

//   React.useEffect(() => {
//     // Check for URL params
//     const tryLogin = async (tableId: string) => {
//       const loginResult = await AjaxService.submitTableId(tableId, "login");
//       if (loginResult) {
//         localStorage.setItem("CNYTable", JSON.stringify(AjaxService.jwtHeader));
//         history.push("/lobby");
//       } else {
//         window.alert("Table ID has already been used or does not exist!");
//       }
//     };
//     const tableIdFromParams = params.tableId;
//     if (tableIdFromParams) {
//       tryLogin(tableIdFromParams);
//       return;
//     }

//     // Otherwise, try to find local JWT
//     const jwtToken = localStorage.getItem("CNYTable");

//     if (jwtToken) {
//       AjaxService.jwtHeader = JSON.parse(jwtToken);

//       if (!AjaxService.jwtHeader.authorization) {
//         localStorage.removeItem("CNYTable");
//       } else {
//         gameService.getCurrentGameState().then(res => {
//           if (res) {
//             history.push("/lobby");
//           } else {
//             localStorage.removeItem("CNYTable");
//             window.alert("Please login again.");
//           }
//         });
//       }
//     }
//   }, []);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setTableId(e.target.value);
//   };

//   const handleSubmit = async () => {
//     if (isConnecting) return;
//     setConnecting(true);
//     const result = await AjaxService.submitTableId(tableId, "create");
//     setConnecting(false);
//     if (result) {
//       localStorage.setItem("CNYTable", JSON.stringify(AjaxService.jwtHeader));
//       history.push("/lobby");
//     } else {
//       const loginResult = await AjaxService.submitTableId(tableId, "login");
//       if (loginResult) {
//         localStorage.setItem("CNYTable", JSON.stringify(AjaxService.jwtHeader));
//         history.push("/lobby");
//       }
//       window.alert("Table ID has already been used or does not exist!");
//     }
//   };

//   return (
//     <div>
//       <MainTitleCard />
//       <Box display="flex" flexDirection="column" padding="24px">
//         <div>Enter your Table ID:</div>
//         <TextInputScroll placeholder="Table ID" onChange={handleInputChange} />
//         <Button
//           variant="contained"
//           onClick={handleSubmit}
//           style={{ background: COLORS.accent }}
//         >
//           Enter
//         </Button>

//         {/* <Typography variant="h1">
//         Or, you can scan the QR code at the table:
//       </Typography> */}
//       </Box>
//     </div>
//   );
// };

// export default SplashPage;

export default class SplashPage {}