import React from "react";
import SidebarTab from "../SidebarTab/SidebarTab";
import { Button, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import SendIcon from "@material-ui/icons/Send";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";
import styles from "./Sidebar.module.scss";

const Sidebar: React.FC = () => (
  <aside className={styles.sidebar}>
    <Button
      variant="contained"
      startIcon={<AddIcon />}
      className={styles.composeBtn}
    >
      Compose
    </Button>
    <SidebarTab icon={<InboxIcon />} title="Inbox" number={123} selected />
    <SidebarTab icon={<StarIcon />} title="Starred" number={10} />
    <SidebarTab icon={<WatchLaterIcon />} title="Snoozed" number={10} />
    <SidebarTab icon={<LabelImportantIcon />} title="Important" number={10} />
    <SidebarTab icon={<SendIcon />} title="Sent" number={10} />
    <SidebarTab icon={<InsertDriveFileIcon />} title="Drafts" number={10} />
    <SidebarTab icon={<ExpandMoreIcon />} title="More" number={10} />
    <div className={styles.footer}>
      <div>
        <IconButton>
          <PersonIcon />
        </IconButton>
        <IconButton>
          <DuoIcon />
        </IconButton>
        <IconButton>
          <PhoneIcon />
        </IconButton>
      </div>
    </div>
  </aside>
);

export default Sidebar;
