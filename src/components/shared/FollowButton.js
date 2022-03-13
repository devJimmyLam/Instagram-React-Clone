import React,{useState} from "react";
import { useFollowButtonStyles } from "../../styles";
import { Button } from "@material-ui/core";

function FollowButton({ side }) {
  const classes = useFollowButtonStyles({ side });
  const [isFollowing, setFollowing] = useState(false);

  const followButton = (
    <Button
      variant={side ? "text" : "contained"}
      color="primary"
      className={classes.button}
      onClick={() => setFollowing(true)}
      fullWidth
    >
      <span style={{textTransform: 'none', fontWeight: 700}}>Follow</span>
    </Button>
  );

  const followingButton = (
    <Button
      variant={side ? "text" : "outlined"}
      className={classes.button}
      color="primary"
      onClick={() => setFollowing(false)}
      fullWidth
      style={{ textTransform: 'none' }}
    >
      <span style={{textTransform: 'none'}}>Following</span>
    </Button>
  );

  return isFollowing ? followingButton : followButton;
}

export default FollowButton;
