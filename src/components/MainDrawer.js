import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import Divider from "material-ui/Divider";
import InboxIcon from "material-ui-icons/Inbox";
import DraftsIcon from "material-ui-icons/Drafts";
import MuiDrawer from "material-ui/Drawer";

const styles = {
  verticalList: {
    width: 250
  },
  horizontalList: {
    width: "auto"
  }
};

const MainDrawer = ({ classes, anchor, open, onClose }) => {
  const sideList = (
    <div
      className={
        ["left", "right"].includes(anchor)
          ? classes.verticalList
          : classes.horizontalList
      }
    >
      <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav">
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItem button component="a" href="#simple-list">
          <ListItemText primary="Spam" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <MuiDrawer anchor={anchor} open={open} onClose={onClose}>
      <div tabIndex={0} role="button" onClick={onClose} onKeyDown={onClose}>
        {sideList}
      </div>
    </MuiDrawer>
  );
};

MainDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  anchor: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default withStyles(styles)(MainDrawer);
