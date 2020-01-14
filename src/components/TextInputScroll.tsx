import React from "react";
import ScrollLeftImg from "../assets/scrollleft.png";
import ScrollImg from "../assets/scroll.png";
import ScrollRightImg from "../assets/scrollright.png";
import { TextField, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { COLORS } from "../theme";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  left: {
    maxWidth: "24px",
    objectFit: "cover"
  },
  body: {
    flex: 1,
    height: "100%",
    backgroundImage: `url(${ScrollImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center"
  },
  right: {
    maxWidth: "24px",
    objectFit: "fill"
  },
  textfield: {
    margin: 12,
    padding: 8,
    lineHeight: "1em",
    color: COLORS.primary
  }
});

interface Props {
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInputScroll: React.FC<Props> = props => {
  const classes = useStyles({});
  return (
    <Box className={classes.container}>
      <img className={classes.left} src={ScrollLeftImg} />
      <div className={classes.body}>
        <TextField
          placeholder={props.placeholder}
          onChange={props.onChange}
          fullWidth
          InputProps={{
            className: classes.textfield,
            inputProps: { maxLength: 8 },
            disableUnderline: true
          }}
        />
      </div>
      <img className={classes.right} src={ScrollRightImg} />
    </Box>
  );
};

export default TextInputScroll;
