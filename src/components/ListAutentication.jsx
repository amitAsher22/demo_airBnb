import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
// import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

export default function BasicList() {
  return (
    <Box
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      dir="rtl"
    >
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem>
            <ListItemButton>
              <p primary="הרשמה"> הרשמה</p>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <p primary="הרשמה"> התחברות</p>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem>
            <ListItemButton>
              <p primary="הרשמה"> להציע את הבית ב-AirBnb</p>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <p primary="הרשמה"> רוצים לאחר חוויה?</p>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
