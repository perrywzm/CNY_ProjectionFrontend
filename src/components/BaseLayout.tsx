import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexFlow: "column",
    height: "100%"
  },
  title: {
    fontSize: "40px"
  }
});

interface Props {
  
}

const BaseLayout: React.FC<Props> = () => {
  const classes = useStyles({});
  return (
    <div>
      
    </div>
  )
}

export default BaseLayout
